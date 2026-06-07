"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/works", label: "#works" },
    { href: "/about-me", label: "#about-me" },
    { href: "/blogs", label: "#blogs" },
    { href: "/contacts", label: "#contacts" },
  ];

  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "22px 56px", borderBottom: "1px solid var(--border)",
      position: "sticky", top: 0, zIndex: 100,
      background: "var(--bg-main)",
    }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 24, height: 24, border: "2px solid var(--purple)",
            borderRadius: 3, display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 12, color: "var(--purple)", fontWeight: 900,
          }}>▲</div>
          <span style={{ color: "var(--text-primary)", fontSize: 18, fontWeight: 800, letterSpacing: "0.02em" }}>
            {siteConfig.name.split(" ")[0]}.g
          </span>
          <span style={{
            display: "inline-block", width: 9, height: 18,
            background: "var(--purple)", animation: "blink 1s step-end infinite",
            verticalAlign: "text-bottom", marginLeft: 1,
          }} />
        </div>
      </Link>

      <div style={{ display: "flex", gap: 36 }}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} style={{
            color: pathname === l.href ? "var(--purple-hover)" : "var(--purple)",
            fontSize: 16, fontWeight: 700, textDecoration: "none",
            letterSpacing: "0.03em",
            borderBottom: pathname === l.href ? "1px solid var(--purple)" : "none",
            paddingBottom: 2,
          }}>{l.label}</Link>
        ))}
      </div>
    </nav>
  );
}
