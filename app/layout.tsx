import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Full Stack & AI/ML Engineer`,
  description: siteConfig.tagline,
  keywords: ["Prajjwal Ghimire", "Full Stack Developer", "AI/ML Engineer", "Nepal", "Software Engineer"],
  authors: [{ name: siteConfig.name }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
