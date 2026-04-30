export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            GSR Network
          </p>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Real-time content engines for modern journalism.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            GSR Network organizes live signals across sports, AI, politics, and
            entertainment into clean, journalist-friendly sites built for speed,
            clarity, and editorial judgment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-bold text-red-500">Global Sports Report</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Live sports news, scores, context, and journalist-ready story signals.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-bold text-blue-400">Global AI Report</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              AI and technology developments structured for newsroom awareness.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-bold text-sky-300">Global Politics Report</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Political news signals organized for clarity, speed, and context.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-bold text-purple-400">
              Global Entertainment Report
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Entertainment industry updates presented in a clean newsroom format.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="text-2xl font-bold">What GSR Network does</h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-zinc-300">
            It pulls in live data and news signals, filters for relevance, and
            presents structured story cards that help journalists quickly see what
            matters. The goal is to automate signal and organization, not
            storytelling. Final journalism stays human.
          </p>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-400">
          Built for journalists, by a journalist.
        </div>
      </section>
    </main>
  );
}