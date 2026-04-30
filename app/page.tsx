export default function Home() {
  const sites = [
    {
      name: "Global Sports Report",
      url: "https://globalsportsreport.com",
      label: "Sports",
      description:
        "Live sports news, scores, context, and journalist-ready story signals.",
      color: "text-red-500",
    },
    {
      name: "Global AI Report",
      url: "https://globalaireport.news",
      label: "AI",
      description:
        "AI and technology developments structured for newsroom awareness.",
      color: "text-blue-400",
    },
    {
      name: "Global Politics Report",
      url: "https://globalpoliticsreport.com",
      label: "Politics",
      description:
        "Political news signals organized for clarity, speed, and context.",
      color: "text-cyan-400",
    },
    {
      name: "Global Entertainment Report",
      url: "https://globalentertainmentreport.com",
      label: "Entertainment",
      description:
        "Entertainment industry updates presented in a clean newsroom format.",
      color: "text-purple-400",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-10">

        {/* 🔥 BANNER */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl">
          <img
            src="/gsr-banner.png"
            alt="GSR Network Banner"
            className="w-full h-auto"
          />
        </div>

        {/* HEADLINE */}
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            GSR Network
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Real-time content engines for modern journalism.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            GSR Network organizes live signals across sports, AI, politics, and
            entertainment into clean, journalist-friendly sites built for speed,
            clarity, and editorial judgment.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl transition hover:-translate-y-2 hover:border-red-500 hover:shadow-red-500/20"
            >
              <p className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${site.color}`}>
                {site.label}
              </p>

              <h2 className="text-2xl font-black">{site.name}</h2>

              <p className="mt-4 text-sm leading-6 text-neutral-300">
                {site.description}
              </p>

              <p className="mt-6 text-sm font-bold text-red-400">
                Visit site →
              </p>
            </a>
          ))}
        </div>

        {/* INFO BLOCK */}
        <div className="mt-14 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-2xl">
          <h2 className="text-3xl font-black">What GSR Network does</h2>

          <p className="mt-5 text-base leading-8 text-neutral-300">
            It pulls in live data and news signals, filters for relevance, and
            presents structured story cards that help journalists quickly see
            what matters. The goal is to automate signal and organization, not
            storytelling. Final journalism stays human.
          </p>
        </div>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-neutral-800 pt-6 text-sm font-semibold text-neutral-400">
          Built for journalists, by a journalist.
        </footer>
      </section>
    </main>
  );
}