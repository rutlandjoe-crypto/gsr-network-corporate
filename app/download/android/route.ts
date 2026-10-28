import { apkDownloadUrl, appSource } from "../../lib/android-release";

export function GET(request: Request) {
  const query = new URL(request.url).searchParams;
  const source = appSource(query.get("source") || query.get("utm_source"));
  return new Response(null, {
    status: 302,
    headers: { Location: apkDownloadUrl(source), "Cache-Control": "no-store" },
  });
}

// Link previews and availability checks must not fetch the APK or inflate counts.
export function HEAD(request: Request) {
  return GET(request);
}
