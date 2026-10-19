import { siteConfig } from "@/lib/data";

export default function Works() {
  const personal = siteConfig.projects.filter((p) => p.personal);
  const client = siteConfig.projects.filter((p) => !p.personal);

  const ProjectCard = ({ p }: { p: typeof siteConfig.projects[0] }) => (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, overflow: "hidden" }}>
      <div style={{ height: 140, overflow: "hidden", background: "var(--bg-deep)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {p.image ? (
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                ) : (
                  <div style={{ width: "84%", height: 92, background: "var(--bg-main)", borderRadius: 3, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "var(--text-dim)", fontWeight: 700 }}>
                    {p.name}
                  </div>
                )}
      </div>
      <div style={{ padding: "8px 18px", background: "var(--bg-deep)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ fontSize: 13, color: "var(--text-dim)", fontWeight: 700, lineHeight: 1.7 }}>{p.tech.join("  ")}</div>
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ fontSize: 20, color: "var(--text-primary)", fontWeight: 900, marginBottom: 10 }}>
          {p.name}
          {p.highlight && (
            <span style={{ fontSize: 11, color: "var(--purple)", border: "1px solid var(--purple)", padding: "2px 8px", borderRadius: 10, marginLeft: 10, fontWeight: 700 }}>FLAGSHIP</span>
          )}
          {p.company && (
            <span style={{ fontSize: 11, color: "var(--text-dim)", border: "1px solid var(--border)", padding: "2px 8px", borderRadius: 10, marginLeft: 8, fontWeight: 700 }}>{p.company}</span>
          )}
        </div>
        <div style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 18, fontWeight: 500 }}>{p.description}</div>
        <div style={{ display: "flex", gap: 10 }}>
          {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--purple)", color: "var(--purple)", fontSize: 13, padding: "6px 16px", borderRadius: 2, fontWeight: 800, textDecoration: "none" }}>Live &lt;—&gt;</a>}
          {p.liveAlt && <a href={p.liveAlt} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--purple)", color: "var(--purple)", fontSize: 13, padding: "6px 16px", borderRadius: 2, fontWeight: 800, textDecoration: "none" }}>Live 2 &lt;—&gt;</a>}
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--border)", color: "var(--text-muted)", fontSize: 13, padding: "6px 16px", borderRadius: 2, fontWeight: 800, textDecoration: "none" }}>Code &gt;&gt;</a>}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ padding: "64px 56px" }}>
      <h1 style={{ fontSize: 36, color: "var(--text-primary)", fontWeight: 900, marginBottom: 8 }}>/projects</h1>
      <p style={{ fontSize: 16, color: "var(--text-dim)", fontWeight: 700, marginBottom: 64 }}>List of my projects</p>

      <div style={{ marginBottom: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <h2 style={{ fontSize: 24, color: "var(--text-primary)", fontWeight: 900, whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--purple)" }}>#</span>personal-apps
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 22 }}>
          {personal.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <h2 style={{ fontSize: 24, color: "var(--text-primary)", fontWeight: 900, whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--purple)" }}>#</span>client-apps
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 22 }}>
          {client.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>
    </div>
  );
}
