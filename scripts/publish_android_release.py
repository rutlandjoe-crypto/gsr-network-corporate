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


def main():
    config = json.loads((ROOT / "app-release.json").read_text())
    repo, tag = config["repository"], config["tag"]
    current = gh("api", f"repos/{repo}/releases/tags/{tag}", check=False)
    if current.returncode and "404" not in current.stderr:
        raise RuntimeError("Could not check the existing release: " + current.stderr)
    if current.returncode:
        gh("release", "create", tag, "--repo", repo, "--draft", "--target", os.environ["GITHUB_SHA"],
           "--title", f"GSR Network Android {config['version']}", "--notes",
           "Official signed Android APK. All referral copies are byte-identical. "
           f"SHA-256: {config['sha256']}. Download counts include repeats and tests; they are not installation counts.")
        release = json.loads(gh("api", f"repos/{repo}/releases/tags/{tag}").stdout)
    else:
        release = json.loads(current.stdout)

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

    published = json.loads(gh("api", f"repos/{repo}/releases/tags/{tag}").stdout)
    assets = {asset["name"]: asset for asset in published.get("assets", [])}
    for source in config["sources"]:
        asset = assets[f"gsr-network-{config['version']}-{source}.apk"]
        if asset.get("digest") != f"sha256:{config['sha256']}" or asset["size"] != config["bytes"]:
            raise RuntimeError("Published asset failed final verification.")
    gh("release", "edit", tag, "--repo", repo, "--draft=false", "--latest=false")
    print(f"SUCCESS: Published {len(config['sources'])} identical APK assets for Android {config['version']}.")


if __name__ == "__main__":
    main()
