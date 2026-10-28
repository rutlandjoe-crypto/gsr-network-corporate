import { getDownloadStats } from "../../lib/android-release";

export const revalidate = 300;

export async function GET() {
  try {
    return Response.json(await getDownloadStats(), {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60" },
    });
  } catch {
    return Response.json({ error: "Download statistics are temporarily unavailable. Please try again shortly." }, {
      status: 503, headers: { "Cache-Control": "no-store", "Retry-After": "300" },
    });
  }
}
