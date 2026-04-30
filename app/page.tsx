"use client";

import { useState } from "react";

const gsrSites = [
  {
    id: "sports",
    label: "GSR SPORTS",
    tagline: "Every Game. Every Angle.",
    description:
      "The definitive destination for real-time sports coverage. From breaking trades to live scores, GSR Sports delivers the depth and speed modern fans demand.",
    url: "https://globalsportsreport.com",
    accentColor: "#F97316",
    glowColor: "rgba(249,115,22,0.35)",
    borderColor: "rgba(249,115,22,0.6)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="#F97316" strokeWidth="2" fill="none" />
        <path d="M20 6 C14 10, 10 16, 10 20 C10 24, 14 30, 20 34 C26 30, 30 24, 30 20 C30 16, 26 10, 20 6Z" stroke="#F97316" strokeWidth="1.5" fill="none" />
        <path d="M6 20 Q13 16, 20 20 Q27 24, 34 20" stroke="#F97316" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="3" fill="#F97316" />
      </svg>
    ),
    features: ["Live Scores", "Game Analysis", "Player Stats", "Breaking News"],
    badge: "LIVE",
  },
  {
    id: "ai",
    label: "GSR AI",
    tagline: "Smarter News. Stronger Future.",
    description:
      "Powering the next generation of journalism with AI-driven insights, automated reporting tools, and real-time intelligence built specifically for newsrooms.",
    url: "https://globalsportsreport.com",
    accentColor: "#38BDF8",
    glowColor: "rgba(56,189,248,0.35)",
    borderColor: "rgba(56,189,248,0.6)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="20" cy="20" r="12" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="4" fill="#38BDF8" fillOpacity="0.3" />
        <circle cx="20" cy="20" r="2" fill="#38BDF8" />
        <path d="M20 4 L20 8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 32 L20 36" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 20 L8 20" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 20 L36 20" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <path d="M8.2 8.2 L11 11" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <path d="M29 29 L31.8 31.8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <path d="M31.8 8.2 L29 11" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 29 L8.2 31.8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    features: ["AI Summaries", "Trend Detection", "Auto-Briefs", "Journalist Tools"],
    badge: "NEW",
  },
  {
    id: "politics",
    label: "GSR POLITICS",
    tagline: "Facts First. Impact Always.",
    description:
      "Unbiased political reporting with the rigor of investigative journalism. GSR Politics tracks legislation, elections, and policy with data-backed precision.",
    url: "https://globalsportsreport.com",
    accentColor: "#A78BFA",
    glowColor: "rgba(167,139,250,0.35)",
    borderColor: "rgba(167,139,250,0.6)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="14" y="22" width="12" height="14" stroke="#A78BFA" strokeWidth="1.5" fill="none" />
        <path d="M10 22 L20 8 L30 22Z" stroke="#A78BFA" strokeWidth="1.5" fill="none" />
        <line x1="8" y1="22" x2="32" y2="22" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="36" x2="32" y2="36" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="15" r="2" fill="#A78BFA" fillOpacity="0.5" />
      </svg>
    ),
    features: ["Election Coverage", "Policy Tracker", "Fact Checks", "Global Affairs"],
    badge: "FEATURED",
  },
  {
    id: "entertainment",
    label: "GSR ENTERTAINMENT",
    tagline: "Culture. Celebrities. Moments. Covered.",
    description:
      "Where pop culture meets serious journalism. GSR Entertainment tracks the stories behind the spotlight — film, music, celebrities, and cultural moments that matter.",
    url: "https://globalsportsreport.com",
    accentColor: "#EC4899",
    glowColor: "rgba(236,72,153,0.35)",
    borderColor: "rgba(236,72,153,0.6)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="6" y="12" width="28" height="20" rx="2" stroke="#EC4899" strokeWidth="1.5" fill="none" />
        <path d="M16 18 L26 22 L16 26Z" fill="#EC4899" fillOpacity="0.7" />
        <path d="M10 8 L14 12" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 8 L26 12" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    features: ["Celebrity News", "Film & TV", "Music Drops", "Cultural Trends"],
    badge: "TRENDING",
  },
];

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #04080F;
          font-family: 'Barlow Condensed', sans-serif;
        }

        .gsr-card {
          position: relative;
          background: linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border-radius: 16px;
          padding: 36px 32px 32px;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s ease;
          flex: 1;
          min-width: 240px;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .gsr-card:hover { transform: translateY(-8px) scale(1.02); }

        .gsr-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          font-family: 'Barlow Condensed', sans-serif;
        }

        .gsr-feature-pill {
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          font-family: 'Barlow Condensed', sans-serif;
          white-space: nowrap;
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .gsr-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          font-family: 'Barlow Condensed', sans-serif;
          text-transform: uppercase;
          color: #fff;
        }

        .gsr-cta:hover { opacity: 0.88; transform: translateX(3px); }

        .gsr-footer-editorial::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #F97316 0%, #38BDF8 33%, #A78BFA 66%, #EC4899 100%);
        }

        .gsr-standard-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .gsr-standard-item:last-child { border-bottom: none; }

        .gsr-network-link {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 5px 12px;
          border-radius: 4px;
          transition: opacity 0.2s;
          font-family: 'Barlow Condensed', sans-serif;
        }

        .gsr-network-link:hover { opacity: 0.75; }

        @media (max-width: 900px) {
          .gsr-cards-grid { flex-direction: column !important; align-items: center; }
          .gsr-card { max-width: 420px; width: 100%; }
          .gsr-editorial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{
        background: "linear-gradient(135deg, #04080F 0%, #0B1628 50%, #091220 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

        {/* ── HERO / HEADER ── */}
        <div style={{
          width: "100%",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 42, height: 42, borderRadius: "50%",
              background: "linear-gradient(135deg, #F97316, #EC4899)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 16, color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}>GSR</div>
            <span style={{
              color: "#fff", fontSize: 18, fontWeight: 800,
              letterSpacing: "0.08em", textTransform: "uppercase",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}>Network</span>
          </div>
          <span style={{
            color: "rgba(255,255,255,0.3)", fontSize: 12,
            letterSpacing: "0.2em", textTransform: "uppercase",
            fontFamily: "'Barlow Condensed', sans-serif",
          }}>globalsportsreport.com</span>
        </div>

        {/* ── CARDS SECTION ── */}
        <section style={{ width: "100%", padding: "60px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "48px" }}>

          <div style={{ textAlign: "center", maxWidth: 700 }}>
            <p style={{
              color: "#F97316", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.25em", textTransform: "uppercase",
              marginBottom: 12, fontFamily: "'Barlow Condensed', sans-serif",
            }}>The GSR Universe</p>
            <h2 style={{
              color: "#fff", fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.05,
              fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase",
            }}>
              One Network.{" "}
              <span style={{
                background: "linear-gradient(90deg, #F97316, #EC4899)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Four Voices.</span>
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.45)", fontSize: 16, marginTop: 16,
              lineHeight: 1.6, fontFamily: "'Barlow', sans-serif", fontWeight: 400,
            }}>
              GSR Network powers a suite of specialized media brands, each purpose-built
              for the modern journalist and reader.
            </p>
          </div>

          <div className="gsr-cards-grid" style={{
            display: "flex", gap: "20px", width: "100%", maxWidth: 1220,
            alignItems: "stretch", flexWrap: "wrap", justifyContent: "center",
          }}>
            {gsrSites.map((site) => {
              const isHovered = hovered === site.id;
              return (
                <div
                  key={site.id}
                  className="gsr-card"
                  onMouseEnter={() => setHovered(site.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    border: `1.5px solid ${isHovered ? site.borderColor : "rgba(255,255,255,0.08)"}`,
                    boxShadow: isHovered
                      ? `0 20px 60px ${site.glowColor}, 0 0 0 1px ${site.borderColor}`
                      : "0 4px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <div style={{
                    position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)",
                    width: 160, height: 160, borderRadius: "50%",
                    background: site.accentColor, filter: "blur(70px)",
                    opacity: isHovered ? 0.18 : 0, transition: "opacity 0.4s ease", pointerEvents: "none",
                  }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{
                      padding: 10, borderRadius: 12,
                      background: `${site.accentColor}18`, border: `1px solid ${site.accentColor}40`,
                    }}>{site.icon}</div>
                    <span className="gsr-badge" style={{
                      background: `${site.accentColor}22`, color: site.accentColor,
                      border: `1px solid ${site.accentColor}55`,
                    }}>{site.badge}</span>
                  </div>

                  <div>
                    <h3 style={{
                      color: "#fff", fontSize: 22, fontWeight: 800,
                      letterSpacing: "0.04em", textTransform: "uppercase",
                      fontFamily: "'Barlow Condensed', sans-serif",
                    }}>{site.label}</h3>
                    <div style={{
                      background: site.accentColor, marginTop: 10, height: 2, borderRadius: 2,
                      width: isHovered ? 60 : 40, transition: "width 0.3s ease",
                    }} />
                    <p style={{
                      color: site.accentColor, fontSize: 13, fontWeight: 700,
                      letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 10,
                      fontFamily: "'Barlow Condensed', sans-serif",
                    }}>{site.tagline}</p>
                  </div>

                  <p style={{
                    color: "rgba(255,255,255,0.5)", fontSize: 14,
                    lineHeight: 1.65, fontFamily: "'Barlow', sans-serif", flexGrow: 1,
                  }}>{site.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {site.features.map((f) => (
                      <span key={f} className="gsr-feature-pill">{f}</span>
                    ))}
                  </div>

                  <a href={site.url} className="gsr-cta" style={{
                    background: `linear-gradient(135deg, ${site.accentColor}DD, ${site.accentColor}99)`,
                    alignSelf: "flex-start",
                    boxShadow: isHovered ? `0 4px 20px ${site.glowColor}` : "none",
                  }}>
                    Visit Site
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>

          <div style={{
            padding: "14px 32px", borderRadius: 40,
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", justifyContent: "center",
          }}>
            {["SPORTS", "AI", "POLITICS", "ENTERTAINMENT"].map((label, i) => {
              const colors = ["#F97316", "#38BDF8", "#A78BFA", "#EC4899"];
              return (
                <span key={label} style={{
                  color: colors[i], fontSize: 13, fontWeight: 800,
                  letterSpacing: "0.2em", fontFamily: "'Barlow Condensed', sans-serif",
                }}>{label}</span>
              );
            })}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ fontFamily: "'Barlow Condensed', sans-serif", width: "100%" }}>

          {/* Copyright strip */}
          <div style={{
            background: "#ffffff", borderTop: "1px solid #e5e7eb", padding: "32px 48px",
          }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <p style={{
                margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: "#111827",
                fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.01em",
              }}>
                © 2026 Global Sports Report.{" "}
                <span style={{ color: "#F97316" }}>Built for journalists, by a journalist.</span>
              </p>
              <p style={{
                margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.65,
                maxWidth: 780, fontFamily: "'Barlow', sans-serif", fontWeight: 400,
              }}>
                Global Sports Report tracks live scores, schedules, advanced metrics,
                story angles and newsroom-ready sports intelligence across MLB, NBA,
                NFL, NHL, soccer and the broader sports calendar.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                {[
                  { label: "GSR Sports", color: "#F97316" },
                  { label: "GSR AI", color: "#38BDF8" },
                  { label: "GSR Politics", color: "#A78BFA" },
                  { label: "GSR Entertainment", color: "#EC4899" },
                ].map((site) => (
                  <a key={site.label} href="#" className="gsr-network-link" style={{
                    color: site.color, background: `${site.color}12`, border: `1px solid ${site.color}35`,
                  }}>{site.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Editorial Standard strip */}
          <div className="gsr-footer-editorial" style={{
            background: "#111827", padding: "40px 48px", position: "relative", overflow: "hidden",
          }}>
            <div className="gsr-editorial-grid" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px",
              maxWidth: 1200, margin: "0 auto",
            }}>
              <div>
                <h4 style={{
                  color: "#ffffff", fontSize: 18, fontWeight: 800, letterSpacing: "0.06em",
                  textTransform: "uppercase", margin: "0 0 6px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}>GSR Network Editorial Standard</h4>
                <p style={{
                  color: "rgba(255,255,255,0.45)", fontSize: 13, margin: "0 0 20px",
                  fontFamily: "'Barlow', sans-serif", lineHeight: 1.55,
                }}>We believe AI should support journalism—not replace it.</p>
                {[
                  { text: "No AI-written stories", color: "#F97316" },
                  { text: "AI used for data, signals, and structure only", color: "#38BDF8" },
                  { text: "Final journalism always human-driven", color: "#A78BFA" },
                ].map((item) => (
                  <div key={item.text} className="gsr-standard-item">
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: item.color, marginTop: 7, flexShrink: 0,
                    }} />
                    <span style={{
                      color: "rgba(255,255,255,0.75)", fontSize: 14,
                      fontFamily: "'Barlow', sans-serif", lineHeight: 1.5,
                    }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h4 style={{
                    color: "#ffffff", fontSize: 18, fontWeight: 800, letterSpacing: "0.06em",
                    textTransform: "uppercase", margin: "0 0 6px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                  }}>GSR Network</h4>
                  <p style={{
                    color: "rgba(255,255,255,0.45)", fontSize: 13, margin: "0 0 20px",
                    fontFamily: "'Barlow', sans-serif", lineHeight: 1.55,
                  }}>A real-time news engine built for journalists.</p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {["Real-Time Updates", "Multi-Site Network", "Data Driven Insights", "Journalist Focused"].map((tag) => (
                      <span key={tag} style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                        color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4,
                        padding: "4px 10px", fontFamily: "'Barlow Condensed', sans-serif",
                        textTransform: "uppercase",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <p style={{
                  color: "rgba(255,255,255,0.2)", fontSize: 12, margin: "24px 0 0",
                  fontFamily: "'Barlow', sans-serif", letterSpacing: "0.05em",
                }}>globalsportsreport.com · All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
