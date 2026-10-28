import type { Metadata } from "next";
import Link from "next/link";
import { androidRelease, getDownloadStats } from "../../lib/android-release";

export const revalidate = 300;
export const metadata: Metadata = { title: "GSR Network App Download Statistics", robots: { index: false, follow: false } };

export default async function DownloadStatistics() {
  let stats: Awaited<ReturnType<typeof getDownloadStats>> | null = null;
  try { stats = await getDownloadStats(); } catch { /* Display unavailability rather than a false zero. */ }
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/app" className="text-amber-300 underline">← App download page</Link>
        <h1 className="mt-8 text-4xl font-black">Android app downloads</h1>
        <p className="mt-3 text-neutral-400">Version {androidRelease.version} · Totals refresh about every five minutes.</p>
        {stats ? <>
          <p className="mt-9 text-6xl font-black text-amber-300">{stats.total.toLocaleString("en-US")}</p>
          <p className="mt-2 text-neutral-300">APK downloads reported by GitHub</p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-700">
            <table className="w-full text-left text-sm"><caption className="sr-only">Download totals by referral link</caption><thead className="bg-neutral-900"><tr><th scope="col" className="px-5 py-4">Referral link</th><th scope="col" className="px-5 py-4 text-right">Downloads</th></tr></thead><tbody>{stats.sources.map((item) => <tr key={item.source} className="border-t border-neutral-800"><th scope="row" className="px-5 py-3 font-normal">{item.label}</th><td className="px-5 py-3 text-right tabular-nums">{item.downloads.toLocaleString("en-US")}</td></tr>)}</tbody></table>
          </div>
          <p className="mt-5 text-xs text-neutral-400">Last checked: {stats.checkedAt.replace("T", " ").replace(/\.\d+Z$/, " UTC")}</p>
        </> : <p role="status" className="mt-8 rounded-xl border border-neutral-700 p-6 text-neutral-300">Statistics are temporarily unavailable. Please try again shortly. Downloads remain available from the app page.</p>}
        <p className="mt-8 text-sm leading-7 text-neutral-400">These totals count downloads of the APK files, including repeats and test downloads. They do not measure installations, unique people, or active users. The source identifies the link used, which may have been shared elsewhere. No personal information is shown.</p>
      </div>
    </main>
  );
}
