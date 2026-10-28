import test from "node:test";
import assert from "node:assert/strict";
import { androidRelease, appSource, apkAssetName, apkDownloadUrl, summarizeRelease } from "../app/lib/android-release.ts";

function fixture() {
  return { draft: false, tag_name: androidRelease.tag, assets: Object.keys(androidRelease.sources).map((source, i) => ({ name: apkAssetName(source), digest: `sha256:${androidRelease.sha256}`, size: androidRelease.bytes, download_count: i })) };
}

test("only recognized channels can select a download asset", () => {
  assert.equal(appSource("SPORTS"), "sports");
  assert.equal(appSource("twitter"), "x");
  assert.equal(appSource("https://bad.example/steal.apk"), "direct");
  assert.equal(appSource(["sports", "x"]), "direct");
  assert.equal(appSource("__proto__"), "direct");
  assert.equal(appSource("constructor"), "direct");
});

test("each channel uses a fixed official release URL", () => {
  for (const source of Object.keys(androidRelease.sources)) {
    const url = new URL(apkDownloadUrl(source));
    assert.equal(url.hostname, "github.com");
    assert.equal(url.pathname, `/${androidRelease.repository}/releases/download/${androidRelease.tag}/${apkAssetName(source)}`);
  }
});

test("totals equal the sum of verified per-channel download counts", () => {
  const summary = summarizeRelease(fixture());
  assert.equal(summary.total, 55);
  assert.equal(summary.sources.length, 11);
  assert.equal(summary.version, "1.0.1");
});

test("partial releases and modified APKs cannot produce misleading statistics", () => {
  const partial = fixture(); partial.assets.pop();
  assert.throws(() => summarizeRelease(partial), /verified/);
  const changed = fixture(); changed.assets[0].digest = "sha256:wrong";
  assert.throws(() => summarizeRelease(changed), /verified/);
  const draft = fixture(); draft.draft = true;
  assert.throws(() => summarizeRelease(draft), /not available/);
});

test("malformed counts do not silently become zero", () => {
  for (const count of [-1, 0.5, NaN, "5"]) {
    const bad = fixture(); bad.assets[0].download_count = count;
    assert.throws(() => summarizeRelease(bad), /verified/);
  }
});
