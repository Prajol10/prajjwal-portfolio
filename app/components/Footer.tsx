"use client";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{
      padding: "32px 56px",
      borderTop: "1px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 20,
    }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <div style={{
            width: 20, height: 20, border: "1.5px solid var(--purple)",
            borderRadius: 2, display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 10, color: "var(--purple)",
          }}>▲</div>
          <span style={{ color: "var(--text-primary)", fontWeight: 900, fontSize: 17 }}>
            {siteConfig.name}
          </span>
          <span style={{ color: "var(--text-dim)", fontSize: 14 }}>· {siteConfig.domain}</span>
        </div>
        <div style={{ fontSize: 14, color: "var(--text-dim)", fontWeight: 700 }}>
          Full Stack Engineer | AI/ML | Data Engineering
        </div>
        <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 4 }}>
          © {new Date().getFullYear()} — Built with Next.js
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
        <span style={{ fontSize: 15, fontWeight: 800, color: "var(--text-secondary)", letterSpacing: "0.08em" }}>
          Media
        </span>
        <div style={{ display: "flex", gap: 22 }}>
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--text-dim)", fontSize: 15, fontWeight: 700, textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}>
            GitHub
          </a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--text-dim)", fontSize: 15, fontWeight: 700, textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}>
            LinkedIn
          </a>
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--text-dim)", fontSize: 15, fontWeight: 700, textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}>
            Instagram
          </a>
          <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--text-dim)", fontSize: 15, fontWeight: 700, textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}>
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
