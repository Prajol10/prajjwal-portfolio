import { siteConfig } from "@/lib/data";

export default function Blogs() {
  return (
    <div className="page" style={{ padding: "64px 56px" }}>
      <h1 style={{ fontSize: 36, color: "var(--text-primary)", fontWeight: 900, marginBottom: 8 }}>/blogs</h1>
      <p style={{ fontSize: 16, color: "var(--text-dim)", fontWeight: 700, marginBottom: 48 }}>
        Notes on code, tools and things I am learning
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 22 }}>
        {siteConfig.blogs.map((b) => (
          <article key={b.slug} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 11, color: "var(--purple)", border: "1px solid var(--purple)", padding: "2px 8px", borderRadius: 10, fontWeight: 700 }}>
                {b.tag}
              </span>
              <span style={{ fontSize: 13, color: "var(--text-dim)", fontWeight: 700 }}>{b.date}</span>
            </div>
            <h2 style={{ fontSize: 19, color: "var(--text-primary)", fontWeight: 900, lineHeight: 1.4, marginBottom: 10 }}>{b.title}</h2>
            <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 14, fontWeight: 500 }}>{b.summary}</p>
            <details>
              <summary style={{ cursor: "pointer", color: "var(--purple)", fontWeight: 800, fontSize: 14 }}>Read more</summary>
              <div style={{ marginTop: 14 }}>
                {b.body.map((para, i) => (
                  <p key={i} style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 12, fontWeight: 500 }}>{para}</p>
                ))}
              </div>
            </details>
          </article>
        ))}
      </div>
    </div>
  );
}
