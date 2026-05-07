export default function Home() {
  const sites = [
    {
      name: "Global Sports Report",
      network: "Global Sports Network",
      url: "https://globalsportsreport.com",
      label: "Sports",
      description:
        "Live sports news, scores, context, and journalist-ready story signals.",
      color: "text-red-500",
    },
    {
      name: "Global AI Report",
      network: "Global AI Network",
      url: "https://globalaireport.news",
      label: "AI",
      description:
        "AI and technology developments structured for newsroom awareness.",
      color: "text-blue-400",
    },
    {
      name: "Global Politics Report",
      network: "Global Politics Network",
      url: "https://globalpoliticsreport.com",
      label: "Politics",
      description:
        "Political news signals organized for clarity, speed, and context.",
      color: "text-cyan-400",
    },
    {
      name: "Global Entertainment Report",
      network: "Global Entertainment Network",
      url: "https://globalentertainmentreport.com",
      label: "Entertainment",
      description:
        "Entertainment industry updates presented in a clean newsroom format.",
      color: "text-purple-400",
    },
    {
      name: "Global Betting Report",
      network: "Global Betting Network",
      url: "https://globalbettingreport.com",
      label: "Betting",
      description:
        "Betting odds, fantasy signals, market movement, and sports wagering context.",
      color: "text-lime-400",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* BANNER */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl">
          <img
            src="/gsr-banner.png"
            alt="GSR Network Banner"
            className="h-auto w-full"
          />
        </div>

        {/* HEADLINE */}
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            GSR Network
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Live newsroom intelligence across sports, AI, politics,
            entertainment, and betting.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            GSR Network organizes live signals across five journalist-focused
            platforms, turning real-time news, data, scores, odds, and industry
            movement into clean, structured, editorially useful information.
          </p>

          <p className="mt-5 inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-red-300">
            Updated hourly across the network
          </p>
        </div>

        {/* NETWORK GRAPHIC */}
        <div className="mb-14 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-2xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-neutral-400">
            The Network
          </p>

          <div className="grid gap-4 md:grid-cols-5">
            {sites.map((site) => (
              <div
                key={site.network}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-center"
              >
                <p
                  className={`text-xs font-black uppercase tracking-[0.25em] ${site.color}`}
                >
                  {site.label}
                </p>

                <h2 className="mt-3 text-lg font-black">{site.network}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {sites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl transition hover:-translate-y-2 hover:border-red-500 hover:shadow-red-500/20"
            >
              <p
                className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${site.color}`}
              >
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
            GSR Network pulls in live data and news signals, filters for
            relevance, and presents structured story cards that help
            journalists, analysts, media professionals, fantasy players, and
            betting-focused readers quickly see what matters.
          </p>

          <p className="mt-5 text-base leading-8 text-neutral-300">
            The goal is to automate signal, structure, and organization — not
            storytelling. GSR Network is built to support editorial judgment,
            not replace it. Final journalism stays human.
          </p>
        </div>

        {/* EDITORIAL STANDARD */}
        <div className="mt-8 rounded-3xl border border-red-500/30 bg-red-500/10 p-8 shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">
            Editorial Standard
          </p>

          <h2 className="mt-4 text-3xl font-black">
            Built for journalists, by a journalist.
          </h2>

          <p className="mt-5 text-base leading-8 text-neutral-300">
            GSR Network uses automation to organize information, monitor live
            signals, and surface useful context. It does not replace reporting,
            verification, sourcing, or human editorial responsibility.
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