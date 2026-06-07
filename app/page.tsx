import Link from "next/link";
import { siteConfig } from "@/lib/data";

const GeoDeco = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" style={{ opacity: 0.35 }}>
    <rect x="0" y="0" width="42" height="42" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
    <rect x="48" y="0" width="28" height="28" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5"/>
    <rect x="0" y="48" width="28" height="28" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5"/>
    <rect x="48" y="48" width="42" height="42" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
  </svg>
);

const DotGrid = () => (
  <svg width="110" height="110" viewBox="0 0 110 110" style={{ opacity: 0.2 }}>
    <g fill="#a78bfa">
      {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5].map(col => (
        <circle key={`${row}-${col}`} cx={col*20+5} cy={row*20+5} r="2.5"/>
      )))}
    </g>
  </svg>
);

export default function Home() {
  const featuredProjects = siteConfig.projects.slice(0, 3);

  return (
    <div>

      {/* HERO */}
      <section style={{ padding: "72px 56px 56px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 40, position: "relative" }}>

        {/* Side icons */}
        <div style={{ position: "absolute", left: 16, top: 110, display: "flex", flexDirection: "column", gap: 24 }}>
          {[siteConfig.socials.github, siteConfig.socials.linkedin, siteConfig.socials.instagram].map((href, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--text-dim)", display: "block", width: 22, height: 22 }}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                {i === 0 && <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>}
                {i === 1 && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                {i === 2 && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>}
              </svg>
            </a>
          ))}
        </div>

        {/* Hero text */}
        <div style={{ flex: 1, paddingLeft: 52 }}>
          <div style={{ fontSize: 16, color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: 22, fontWeight: 600 }}>
            // computer engineer · full stack · AI/ML
          </div>
          <h1 style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 900, lineHeight: 1.3,
            color: "var(--text-primary)", marginBottom: 28,
          }}>
            Building scalable software &amp;<br />
            driving business value with<br />
            data — Meet Prajjwal{" "}
            <span style={{ color: "var(--purple)" }}>
              your Software Engineer<br />
              with a focus on Data &amp; AI.
            </span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 540, marginBottom: 38, fontWeight: 500 }}>
            I help organizations solve real-world problems by developing scalable applications,
            building robust data pipelines, uncovering insights, and creating AI/ML solutions
            that drive smarter decision-making.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contacts">
              <button style={{
                background: "transparent",
                border: "2px solid var(--text-primary)",
                color: "var(--text-primary)", padding: "14px 32px",
                fontFamily: "'Courier New', monospace", fontSize: 16, fontWeight: 800,
                cursor: "pointer", borderRadius: 2, letterSpacing: "0.05em",
              }}>
                Contact me !!
              </button>
            </Link>
            <a href="/prajjwal-cv.pdf" download="Prajjwal_Ghimire_CV.pdf">
              <button style={{
                background: "var(--purple)",
                border: "2px solid var(--purple)",
                color: "#ffffff", padding: "14px 32px",
                fontFamily: "'Courier New', monospace", fontSize: 16, fontWeight: 800,
                cursor: "pointer", borderRadius: 2, letterSpacing: "0.05em",
              }}>
                Download CV ↓
              </button>
            </a>
          </div>
        </div>

        {/* Hero right */}
        <div style={{ position: "relative", width: 300, flexShrink: 0 }}>
          <div style={{ position: "absolute", top: -10, right: -14 }}><GeoDeco /></div>
          <div style={{
            width: 270, height: 310,
            background: "var(--bg-deep)",
            border: "1px solid var(--border)", borderRadius: 4,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, color: "var(--text-dim)", fontWeight: 700, textAlign: "center", lineHeight: 2,
          }}>
            [ your photo<br />goes here ]
          </div>
          <div style={{ position: "absolute", bottom: 60, right: -28 }}><DotGrid /></div>
          <div style={{
            background: "var(--bg-deep)", border: "1px solid var(--border)",
            padding: "14px 18px", borderRadius: 3, marginTop: 18,
          }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
              <span style={{ display: "inline-block", width: 8, height: 8, background: "var(--purple)", borderRadius: 1, marginRight: 8, verticalAlign: "middle" }} />
              Currently working on
            </div>
            <div style={{ fontSize: 15, color: "var(--text-secondary)", fontWeight: 800 }}>
              {siteConfig.currentlyWorkingOn}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ padding: "32px 56px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ fontSize: 48, color: "var(--purple)", opacity: 0.4, fontFamily: "Georgia, serif", lineHeight: 1 }}>"</div>
        <p style={{ fontSize: 20, color: "var(--text-muted)", fontStyle: "italic", fontWeight: 600, lineHeight: 1.6, padding: "0 28px" }}>
          {siteConfig.quote}
        </p>
        <div style={{ textAlign: "right", fontSize: 44, color: "var(--purple)", opacity: 0.3, fontFamily: "Georgia, serif" }}>"</div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: "56px 56px" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 36, gap: 18 }}>
          <h2 style={{ fontSize: 26, color: "var(--text-primary)", fontWeight: 900, whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--purple)" }}>#</span>projects
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          <Link href="/works" style={{ fontSize: 15, color: "var(--text-muted)", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
            View all ——→
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 22 }}>
          {featuredProjects.map((p) => (
            <div key={p.slug} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: 130, background: "var(--bg-deep)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "84%", height: 84, background: "var(--bg-main)", borderRadius: 3, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "var(--text-dim)", fontWeight: 700 }}>
                  screenshot
                </div>
              </div>
              <div style={{ padding: "8px 18px", background: "var(--bg-deep)", borderBottom: "1px solid var(--border)" }}>
                <div style={{ fontSize: 13, color: "var(--text-dim)", fontWeight: 700, lineHeight: 1.7 }}>
                  {p.tech.join("  ")}
                </div>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 20, color: "var(--text-primary)", fontWeight: 900, marginBottom: 10 }}>
                  {p.name}
                  {p.highlight && (
                    <span style={{ fontSize: 11, color: "var(--purple)", border: "1px solid var(--purple)", padding: "2px 8px", borderRadius: 10, marginLeft: 10, fontWeight: 700 }}>
                      FEATURED
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 16, fontWeight: 500 }}>
                  {p.tagline}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--purple)", color: "var(--purple)", fontSize: 13, padding: "6px 16px", borderRadius: 2, fontWeight: 800, textDecoration: "none" }}>Live &lt;—&gt;</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--border)", color: "var(--text-muted)", fontSize: 13, padding: "6px 16px", borderRadius: 2, fontWeight: 800, textDecoration: "none" }}>Code &gt;&gt;</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ padding: "56px 56px", borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 36, gap: 18 }}>
          <h2 style={{ fontSize: 26, color: "var(--text-primary)", fontWeight: 900 }}>
            <span style={{ color: "var(--purple)" }}>#</span>skills
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16 }}>
          {Object.entries(siteConfig.skills).map(([category, items]) => (
            <div key={category} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: "var(--purple)", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid var(--border)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {category}
              </div>
              <div style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 2.2, fontWeight: 600 }}>
                {(items as string[]).join("  ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section style={{ padding: "56px 56px", borderTop: "1px solid var(--border)", display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 28, gap: 18 }}>
            <h2 style={{ fontSize: 26, color: "var(--text-primary)", fontWeight: 900 }}>
              <span style={{ color: "var(--purple)" }}>#</span>about-me
            </h2>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", fontWeight: 800, marginBottom: 18 }}>Hello, i'm Prajjwal!</p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 16, fontWeight: 500 }}>
            Computer Engineering graduate from Lalitpur Engineering College (2021–2025). Started as a full stack
            developer at Dailo Technology and grew into AI/ML and data engineering.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 32, fontWeight: 500 }}>
            Currently working at Technology Spot & Dailo Technology. Based in Nepal, open to remote opportunities worldwide.
          </p>
          <Link href="/about-me">
            <button style={{
              background: "transparent", border: "2px solid var(--text-secondary)",
              color: "var(--text-secondary)", fontSize: 15, padding: "12px 26px",
              borderRadius: 2, cursor: "pointer", fontFamily: "'Courier New', monospace", fontWeight: 800,
            }}>
              Read more →
            </button>
          </Link>
        </div>
        <div style={{ width: 240, flexShrink: 0 }}>
          <div style={{ width: 230, height: 260, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "var(--text-dim)", fontWeight: 700 }}>
            [ photo ]
          </div>
        </div>
      </section>

      {/* FUN FACTS */}
      <section style={{ padding: "48px 56px", borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 28, gap: 18 }}>
          <h2 style={{ fontSize: 26, color: "var(--text-primary)", fontWeight: 900 }}>
            <span style={{ color: "var(--purple)" }}>#</span>my-fun-facts
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {siteConfig.funFacts.map((f, i) => (
            <span key={i} style={{
              border: "1.5px solid var(--border)", color: "var(--text-muted)",
              fontSize: 15, padding: "10px 22px", borderRadius: 2,
              background: "var(--bg-card)", fontWeight: 600,
            }}>{f.text}</span>
          ))}
        </div>
      </section>

    </div>
  );
}
