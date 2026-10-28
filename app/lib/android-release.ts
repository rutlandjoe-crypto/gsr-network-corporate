import release from "../../app-release.json" with { type: "json" };

export const androidRelease = release;
export type AppSource = keyof typeof release.sources;

export function appSource(value: unknown): AppSource {
  const aliases: Record<string, AppSource> = { twitter: "x", lounge: "lounge-ai" };
  if (typeof value !== "string") return "direct";
  const source = value.toLowerCase();
  if (Object.hasOwn(release.sources, source)) return source as AppSource;
  return Object.hasOwn(aliases, source) ? aliases[source] : "direct";
}

export function apkAssetName(source: AppSource): string {
  return `gsr-network-${release.version}-${source}.apk`;
}

export function apkDownloadUrl(source: AppSource): string {
  return `https://github.com/${release.repository}/releases/download/${release.tag}/${apkAssetName(source)}`;
}

export function summarizeRelease(payload: unknown) {
  if (!payload || typeof payload !== "object") throw new Error("Download statistics are unavailable.");
  const data = payload as Record<string, unknown>;
  if (data.draft !== false || data.tag_name !== release.tag || !Array.isArray(data.assets)) {
    throw new Error("The Android release is not available yet.");
  }
  const assets = data.assets as Record<string, unknown>[];
  const sources = (Object.entries(release.sources) as [AppSource, string][]).map(([source, label]) => {
    const asset = assets.find((item) => item && item.name === apkAssetName(source));
    if (!asset || asset.size !== release.bytes || asset.digest !== `sha256:${release.sha256}` ||
        typeof asset.download_count !== "number" || !Number.isSafeInteger(asset.download_count) || asset.download_count < 0) {
      throw new Error("A download file could not be verified.");
    }
    return { source, label, downloads: asset.download_count as number };
  });
  return {
    version: release.version,
    total: sources.reduce((total, item) => total + item.downloads, 0),
    sources,
    checkedAt: new Date().toISOString(),
    measurement: "GitHub release asset downloads; includes repeat and test downloads. Not installations or unique users.",
  };
}

export async function getDownloadStats() {
  const response = await fetch(`https://api.github.com/repos/${release.repository}/releases/tags/${release.tag}`, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 300 },
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error("Download statistics are temporarily unavailable.");
  return summarizeRelease(await response.json());
}
