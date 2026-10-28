"""Publish the tested APK unchanged; separate asset counters identify referral links."""
import hashlib
import json
import os
from pathlib import Path
import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor
from urllib.request import Request, urlopen
import zipfile

ROOT = Path(__file__).resolve().parents[1]


def gh(*args, check=True):
    return subprocess.run(["gh", *args], check=check, capture_output=True, text=True)


def find_release(repo, tag):
    # The tag endpoint excludes drafts. The authenticated release list includes
    # them, which lets a failed upload resume without replacing any assets.
    releases = json.loads(gh("api", f"repos/{repo}/releases?per_page=100").stdout)
    return next((release for release in releases if release["tag_name"] == tag), None)


def main():
    config = json.loads((ROOT / "app-release.json").read_text())
    repo, tag = config["repository"], config["tag"]
    release = find_release(repo, tag)
    if release is None:
        gh("release", "create", tag, "--repo", repo, "--draft", "--target", os.environ["GITHUB_SHA"],
           "--title", f"GSR Network Android {config['version']}", "--notes",
           "Official signed Android APK. All referral copies are byte-identical. "
           f"SHA-256: {config['sha256']}. Download counts include repeats and tests; they are not installation counts.")
        release = find_release(repo, tag)
        if release is None:
            raise RuntimeError("The newly created draft release could not be found.")

    with tempfile.TemporaryDirectory() as directory:
        root = Path(directory)
        apk = root / "verified.apk"
        digest = hashlib.sha256()
        request = Request(config["sourceUrl"], headers={"User-Agent": "Mozilla/5.0", "Accept": "*/*"})
        with urlopen(request, timeout=60) as response, apk.open("wb") as output:
            while block := response.read(1024 * 1024):
                output.write(block)
                digest.update(block)
        if digest.hexdigest() != config["sha256"] or apk.stat().st_size != config["bytes"]:
            raise RuntimeError("APK checksum or size mismatch; nothing will be uploaded.")
        with zipfile.ZipFile(apk) as archive:
            if not {"AndroidManifest.xml", "classes.dex"}.issubset(archive.namelist()):
                raise RuntimeError("Downloaded file is not the expected Android package.")

        existing = {asset["name"]: asset for asset in release.get("assets", [])}
        def upload(source):
            name = f"gsr-network-{config['version']}-{source}.apk"
            if name in existing:
                if existing[name].get("digest") != f"sha256:{config['sha256']}":
                    raise RuntimeError(f"Existing asset {name} cannot be verified; refusing to replace it.")
                return
            target = root / name
            target.hardlink_to(apk)
            gh("release", "upload", tag, str(target), "--repo", repo)
        with ThreadPoolExecutor(max_workers=3) as pool:
            list(pool.map(upload, config["sources"]))

    published = json.loads(gh("api", f"repos/{repo}/releases/{release['id']}").stdout)
    assets = {asset["name"]: asset for asset in published.get("assets", [])}
    for source in config["sources"]:
        asset = assets[f"gsr-network-{config['version']}-{source}.apk"]
        if asset.get("digest") != f"sha256:{config['sha256']}" or asset["size"] != config["bytes"]:
            raise RuntimeError("Published asset failed final verification.")
    gh("release", "edit", tag, "--repo", repo, "--draft=false", "--latest=false")
    print(f"SUCCESS: Published {len(config['sources'])} identical APK assets for Android {config['version']}.")


if __name__ == "__main__":
    main()
