import type { Metadata } from "next";
import Link from "next/link";
import { androidRelease, appSource } from "../lib/android-release";

export const metadata: Metadata = {
  title: "Download the GSR Network Android App",
  description: "Sports, AI, politics, entertainment, and betting in one Android app. Download GSR Network directly from its official website.",
  alternates: { canonical: "https://gsrnetwork.io/app" },
  openGraph: { title: "GSR Network is on Android", description: "Five desks. One app. Download GSR Network for Android.", url: "https://gsrnetwork.io/app", type: "website", images: ["https://gsrnetwork.io/gsr-banner.png"] },
  twitter: { card: "summary_large_image", title: "GSR Network is on Android", description: "Sports, AI, politics, entertainment, and betting. Download directly from GSR Network.", images: ["https://gsrnetwork.io/gsr-banner.png"] },
};

export default async function AppDownloadPage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const source = appSource(query.source || query.utm_source);
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <Link href="/" className="text-sm font-bold text-neutral-300 underline underline-offset-4">← GSR Network</Link>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <section>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">The GSR Network Android app</p>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight sm:text-6xl">Five desks.<br /><span className="text-amber-300">One app.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">Sports, AI, politics, entertainment, and betting—together on your Android phone. Browse the feeds and open the stories that matter to you.</p>
            <a href={`/download/android?source=${source}`} className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-amber-300 px-7 py-4 text-base font-black text-neutral-950 transition hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Download for Android ↓</a>
            <p className="mt-4 text-sm text-neutral-400">Free · Version {androidRelease.version} · {(androidRelease.bytes / 1000000).toFixed(1)} MB · Android only</p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-400">No Google Play account required. This APK does not install on iPhone or iPad.</p>
          </section>
          <aside className="rounded-3xl border border-neutral-700 bg-neutral-900 p-7 shadow-2xl">
            <p className="text-2xl font-black">GSR <span className="text-amber-300">Network</span></p>
            <p className="mt-2 text-sm italic text-neutral-400">Built for journalists, by a journalist.</p>
            <ul className="mt-7 space-y-3 text-base font-bold">
              {["Global Sports Report", "Global AI Report", "Global Politics Report", "Global Entertainment Report", "Global Betting Report"].map((desk) => <li key={desk} className="rounded-xl border border-neutral-700 px-4 py-3">{desk}</li>)}
            </ul>
            <p className="mt-5 text-xs leading-5 text-neutral-400">Lone Star Report remains available on its website and is not included in this app version.</p>
          </aside>
        </div>
        <section className="mt-16 rounded-2xl border border-neutral-800 p-6 sm:p-8" aria-labelledby="install-heading">
          <h2 id="install-heading" className="text-2xl font-black">Install in a few steps</h2>
          <ol className="mt-6 list-decimal space-y-4 pl-5 text-neutral-300">
            <li>Open this page on your Android phone and tap <strong className="text-white">Download for Android</strong>.</li>
            <li>Open the downloaded APK. If asked, allow your browser to install apps from this source.</li>
            <li>Choose <strong className="text-white">Install</strong>, or <strong className="text-white">Update</strong> if GSR Network is already installed. Then open the app.</li>
          </ol>
          <p className="mt-6 text-sm leading-6 text-neutral-400">Android may show a Play Protect warning for a developer it has not seen before. Check that the file came from this official page and the installer identifies the app as GSR Network. Review the warning before deciding whether to proceed. You do not need to turn off Play Protect.</p>
          <p className="mt-4 text-sm leading-6 text-neutral-400">If an update fails, keep your existing app installed.</p>
        </section>
        <section className="mt-8 text-sm leading-6 text-neutral-400">
          <h2 className="font-bold text-white">Official download</h2>
          <p className="mt-2">The signed APK is hosted in GSR Network&apos;s public GitHub release. Referral copies contain the same app; only their filenames differ so download totals can be counted by link.</p>
          <details className="mt-4"><summary className="cursor-pointer text-neutral-300">Verify this download</summary><p className="mt-3 break-all font-mono text-xs">SHA-256: {androidRelease.sha256}</p></details>
          <div className="mt-6 flex flex-wrap gap-5"><Link href="/privacy-policy" className="underline">Privacy policy</Link><Link href="/app/downloads" className="underline">Download statistics</Link></div>
        </section>
      </div>
    </main>
  );
}
