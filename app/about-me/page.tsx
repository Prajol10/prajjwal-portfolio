import { siteConfig } from "@/lib/data";

export default function AboutMe() {
  return (
    <div style={{ padding: "64px 56px" }}>
      <h1 style={{ fontSize: 36, color: "var(--text-primary)", fontWeight: 900, marginBottom: 8 }}>/about-me</h1>
      <p style={{ fontSize: 16, color: "var(--text-dim)", fontWeight: 700, marginBottom: 64 }}>A little more about me</p>

      {/* Bio */}
      <div style={{ display: "flex", gap: 56, alignItems: "flex-start", marginBottom: 72, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
            <h2 style={{ fontSize: 24, color: "var(--text-primary)", fontWeight: 900 }}>
              <span style={{ color: "var(--purple)" }}>#</span>about-me
            </h2>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", fontWeight: 800, marginBottom: 20 }}>Hello, i'm Prajjwal!</p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 16, fontWeight: 500 }}>
            I'm a Computer Engineering graduate from Lalitpur Engineering College (2021–2025) based in Nepal.
            I started my career as a full stack developer and quickly grew a deep interest in AI/ML and data engineering.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 16, fontWeight: 500 }}>
            Today, I build end-to-end solutions — from beautiful frontends to smart backends, data pipelines,
            and machine learning models. Currently working at Technology Spot and Dailo Technology.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, fontWeight: 500 }}>
            I enjoy working at the intersection of software, data, and business — building systems that not only
            explain what's happening but also help predict what's next.
          </p>
        </div>
        <div>
          <div style={{ width: 240, height: 280, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "var(--text-dim)", fontWeight: 700 }}>
            [ photo ]
          </div>
        </div>
      </div>

      {/* Education */}
      <div style={{ marginBottom: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: "var(--text-primary)", fontWeight: 900, whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--purple)" }}>#</span>education
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {siteConfig.education.map((e, i) => (
            <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "22px 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
              <div>
                <div style={{ fontSize: 17, color: "var(--text-secondary)", fontWeight: 900 }}>{e.degree}</div>
                <div style={{ fontSize: 15, color: "var(--purple)", fontWeight: 700, marginTop: 6 }}>{e.institution}</div>
                {e.location && <div style={{ fontSize: 14, color: "var(--text-dim)", fontWeight: 700, marginTop: 4 }}>{e.location}</div>}
              </div>
              {e.year && (
                <div style={{ fontSize: 13, color: "var(--text-dim)", fontWeight: 700, border: "1px solid var(--border)", padding: "5px 14px", borderRadius: 2 }}>
                  {e.year}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div style={{ marginBottom: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: "var(--text-primary)", fontWeight: 900, whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--purple)" }}>#</span>experience
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {siteConfig.experience.map((ex, i) => (
            <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "22px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 17, color: "var(--text-secondary)", fontWeight: 900 }}>{ex.role}</div>
                  <div style={{ fontSize: 15, color: "var(--purple)", fontWeight: 700, marginTop: 4 }}>{ex.company}</div>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, color: "var(--text-dim)", border: "1px solid var(--border)", padding: "3px 12px", borderRadius: 10, fontWeight: 700 }}>{ex.type}</span>
                  <span style={{ fontSize: 13, color: "var(--text-dim)", fontWeight: 700 }}>{ex.period}</span>
                </div>
              </div>
              <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 500 }}>{ex.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: "var(--text-primary)", fontWeight: 900 }}>
            <span style={{ color: "var(--purple)" }}>#</span>skills
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16 }}>
          {Object.entries(siteConfig.skills).map(([cat, items]) => (
            <div key={cat} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: "var(--purple)", marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid var(--border)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{cat}</div>
              <div style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 2.2, fontWeight: 600 }}>{(items as string[]).join("  ")}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, color: "var(--text-primary)", fontWeight: 900, whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--purple)" }}>#</span>my-fun-facts
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {siteConfig.funFacts.map((f, i) => (
            <span key={i} style={{ border: "1.5px solid var(--border)", color: "var(--text-muted)", fontSize: 15, padding: "10px 22px", borderRadius: 2, background: "var(--bg-card)", fontWeight: 600 }}>
              {f.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
