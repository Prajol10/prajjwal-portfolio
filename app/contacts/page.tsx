"use client";
import { siteConfig } from "@/lib/data";

export default function Contacts() {
  return (
    <div className="page" style={{ padding: "64px 56px" }}>
      <h1 style={{ fontSize: 36, color: "var(--text-primary)", fontWeight: 900, marginBottom: 8 }}>/contacts</h1>
      <p style={{ fontSize: 16, color: "var(--text-dim)", fontWeight: 700, marginBottom: 64 }}>Reach out to me</p>

      <div style={{ display: "flex", gap: 36, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 72 }}>
        <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.9, fontWeight: 500, maxWidth: 460, flex: 1 }}>
          I am primarily interested in software and data-related roles, but I am always open to other
          opportunities. Feel free to reach out — whether it is a project, a job, or just a chat about tech.
        </p>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "28px 32px", minWidth: 220, maxWidth: "100%" }}>
          <div style={{ fontSize: 14, fontWeight: 900, color: "var(--text-secondary)", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Message me here
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 16, color: "var(--purple)", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 12, color: "var(--text-dim)" }}>in</span>
              Prajjwal Ghimire
            </a>
            <a href={`mailto:${siteConfig.email}`}
              style={{ fontSize: 16, color: "var(--purple)", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 12, color: "var(--text-dim)" }}>@</span>
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: "var(--text-primary)", fontWeight: 900, whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--purple)" }}>#</span>all-media
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { label: "GitHub", handle: "Prajol10", href: siteConfig.socials.github, desc: "Check out my open source work and projects" },
            { label: "LinkedIn", handle: "prajjwal-ghimire", href: siteConfig.socials.linkedin, desc: "Connect with me professionally" },
            { label: "Instagram", handle: "prajol1000", href: siteConfig.socials.instagram, desc: "Personal life & behind the scenes" },
            { label: "Facebook", handle: "prajol.ghimire.92", href: siteConfig.socials.facebook, desc: "Stay connected on Facebook" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--purple)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div>
                  <div style={{ fontSize: 17, color: "var(--text-secondary)", fontWeight: 900, marginBottom: 4 }}>
                    {s.label}
                    <span style={{ fontSize: 14, color: "var(--text-dim)", fontWeight: 700, marginLeft: 12 }}>@{s.handle}</span>
                  </div>
                  <div style={{ fontSize: 15, color: "var(--text-muted)", fontWeight: 500 }}>{s.desc}</div>
                </div>
                <span style={{ fontSize: 18, color: "var(--purple)", fontWeight: 800 }}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
