"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/data";

type Section = "overview" | "hero" | "projects" | "experience" | "skills" | "education" | "facts" | "cv";

export default function AdminDashboard() {
  const router = useRouter();
  const [section, setSection] = useState<Section>("overview");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [data, setData] = useState<any>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [cvUploading, setCvUploading] = useState(false);
  const [cvMsg, setCvMsg] = useState("");

  useEffect(() => {
    fetch("/api/admin/data")
      .then((r) => {
        if (r.status === 401) { router.push("/admin"); return null; }
        return r.json();
      })
      .then((d) => {
        if (d && Object.keys(d).length > 0) {
          setData(d);
        } else {
          setData(JSON.parse(JSON.stringify(siteConfig)));
        }
      });
  }, []);

  const save = async () => {
    setSaving(true);
    await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  const uploadCV = async () => {
    if (!fileRef.current?.files?.[0]) return;
    setCvUploading(true);
    const formData = new FormData();
    formData.append("cv", fileRef.current.files[0]);
    const res = await fetch("/api/admin/upload-cv", { method: "POST", body: formData });
    if (res.ok) { setCvMsg("✓ CV uploaded successfully!"); }
    else { setCvMsg("✗ Upload failed. Try again."); }
    setCvUploading(false);
  };

  if (!data) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-main)", color: "var(--text-primary)", fontFamily: "'Courier New', monospace" }}>
      Loading...
    </div>
  );

  const inputStyle = {
    width: "100%", padding: "10px 14px",
    background: "var(--bg-deep)", border: "1px solid var(--border)",
    borderRadius: 3, color: "var(--text-primary)",
    fontFamily: "'Courier New', monospace", fontSize: 13, fontWeight: 600,
    outline: "none", marginTop: 6,
  };

  const labelStyle = {
    fontSize: 11, color: "var(--text-dim)", fontWeight: 700,
    textTransform: "uppercase" as const, letterSpacing: "0.08em",
    display: "block", marginBottom: 2, marginTop: 16,
  };

  const sectionBtnStyle = (s: Section) => ({
    width: "100%", padding: "10px 16px", textAlign: "left" as const,
    background: section === s ? "var(--bg-deep)" : "transparent",
    border: "none", borderLeft: section === s ? "2px solid var(--purple)" : "2px solid transparent",
    color: section === s ? "var(--purple)" : "var(--text-muted)",
    fontFamily: "'Courier New', monospace", fontSize: 13, fontWeight: 700,
    cursor: "pointer", letterSpacing: "0.02em",
  });

  const navItems: { key: Section; label: string }[] = [
    { key: "overview", label: "📊 Overview" },
    { key: "hero", label: "🏠 Hero & Quote" },
    { key: "projects", label: "💻 Projects" },
    { key: "experience", label: "💼 Experience" },
    { key: "skills", label: "🛠 Skills" },
    { key: "education", label: "🎓 Education" },
    { key: "facts", label: "✨ Fun Facts" },
    { key: "cv", label: "📄 CV Upload" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", fontFamily: "'Courier New', monospace", background: "var(--bg-main)" }}>

      {/* Sidebar */}
      <div style={{ width: 220, background: "var(--bg-card)", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ padding: "24px 20px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 20, height: 20, border: "2px solid var(--purple)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "var(--purple)", fontWeight: 900 }}>▲</div>
            <span style={{ color: "var(--text-primary)", fontSize: 14, fontWeight: 900 }}>Admin Panel</span>
          </div>
          <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 4, fontWeight: 600 }}>prajjwalg.com.np</div>
        </div>

        <nav style={{ flex: 1, padding: "12px 0" }}>
          {navItems.map((item) => (
            <button key={item.key} style={sectionBtnStyle(item.key)} onClick={() => setSection(item.key)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: "16px", borderTop: "1px solid var(--border)" }}>
          <button onClick={logout} style={{
            width: "100%", padding: "9px", background: "transparent",
            border: "1px solid var(--border)", borderRadius: 3,
            color: "var(--text-muted)", fontFamily: "'Courier New', monospace",
            fontSize: 12, fontWeight: 700, cursor: "pointer",
          }}>
            Logout →
          </button>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflow: "auto" }}>

        {/* Top bar */}
        <div style={{ padding: "20px 36px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "var(--bg-main)", zIndex: 10 }}>
          <h1 style={{ fontSize: 18, color: "var(--text-primary)", fontWeight: 900 }}>
            {navItems.find(n => n.key === section)?.label}
          </h1>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {saved && <span style={{ fontSize: 12, color: "#4ade80", fontWeight: 700 }}>✓ Saved!</span>}
            <button onClick={save} disabled={saving} style={{
              padding: "9px 24px", background: "var(--purple)", border: "none",
              borderRadius: 3, color: "#fff", fontFamily: "'Courier New', monospace",
              fontSize: 13, fontWeight: 800, cursor: saving ? "not-allowed" : "pointer",
              opacity: saving ? 0.7 : 1,
            }}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>

        <div style={{ padding: "36px" }}>

          {/* OVERVIEW */}
          {section === "overview" && (
            <div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", fontWeight: 600, marginBottom: 32, lineHeight: 1.8 }}>
                Welcome to your admin panel. Use the sidebar to edit any section of your portfolio. Changes are saved to a JSON file and reflected on your site instantly.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                {[
                  { label: "Projects", count: data.projects?.length || 0 },
                  { label: "Experience", count: data.experience?.length || 0 },
                  { label: "Skills", count: Object.keys(data.skills || {}).length },
                  { label: "Fun Facts", count: data.funFacts?.length || 0 },
                ].map((s) => (
                  <div key={s.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "20px 24px" }}>
                    <div style={{ fontSize: 28, color: "var(--purple)", fontWeight: 900 }}>{s.count}</div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 700, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* HERO */}
          {section === "hero" && (
            <div>
              <label style={labelStyle}>Currently Working On</label>
              <input style={inputStyle} value={data.currentlyWorkingOn || ""} onChange={(e) => setData({ ...data, currentlyWorkingOn: e.target.value })} />

              <label style={labelStyle}>Quote</label>
              <input style={inputStyle} value={data.quote || ""} onChange={(e) => setData({ ...data, quote: e.target.value })} />

              <label style={labelStyle}>Tagline</label>
              <input style={inputStyle} value={data.tagline || ""} onChange={(e) => setData({ ...data, tagline: e.target.value })} />

              <label style={labelStyle}>Email</label>
              <input style={inputStyle} value={data.email || ""} onChange={(e) => setData({ ...data, email: e.target.value })} />

              <label style={labelStyle}>Location</label>
              <input style={inputStyle} value={data.location || ""} onChange={(e) => setData({ ...data, location: e.target.value })} />

              <label style={{ ...labelStyle, marginTop: 32 }}>Social Links</label>
              {["github", "linkedin", "facebook", "instagram"].map((s) => (
                <div key={s}>
                  <label style={{ ...labelStyle, textTransform: "capitalize" as const }}>{s}</label>
                  <input style={inputStyle} value={data.socials?.[s] || ""} onChange={(e) => setData({ ...data, socials: { ...data.socials, [s]: e.target.value } })} />
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS */}
          {section === "projects" && (
            <div>
              <button onClick={() => setData({
                ...data, projects: [...(data.projects || []), {
                  slug: "new-project", name: "New Project", highlight: false,
                  tagline: "", description: "", tech: [], live: "", github: "",
                  personal: true, company: "",
                }]
              })} style={{
                padding: "9px 20px", background: "transparent", border: "1px solid var(--purple)",
                borderRadius: 3, color: "var(--purple)", fontFamily: "'Courier New', monospace",
                fontSize: 12, fontWeight: 800, cursor: "pointer", marginBottom: 24,
              }}>
                + Add Project
              </button>

              {(data.projects || []).map((p: any, i: number) => (
                <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "20px 24px", marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 900 }}>{p.name || "Untitled"}</span>
                    <button onClick={() => setData({ ...data, projects: data.projects.filter((_: any, idx: number) => idx !== i) })}
                      style={{ background: "transparent", border: "1px solid #f87171", borderRadius: 3, color: "#f87171", padding: "4px 12px", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                      Delete
                    </button>
                  </div>

                  {[
                    { label: "Name", key: "name" },
                    { label: "Slug", key: "slug" },
                    { label: "Tagline", key: "tagline" },
                    { label: "Live URL", key: "live" },
                    { label: "GitHub URL", key: "github" },
                    { label: "Company (if client)", key: "company" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={labelStyle}>{f.label}</label>
                      <input style={inputStyle} value={p[f.key] || ""} onChange={(e) => {
                        const updated = [...data.projects];
                        updated[i] = { ...updated[i], [f.key]: e.target.value };
                        setData({ ...data, projects: updated });
                      }} />
                    </div>
                  ))}

                  <label style={labelStyle}>Description</label>
                  <textarea style={{ ...inputStyle, minHeight: 80, resize: "vertical" as const }} value={p.description || ""} onChange={(e) => {
                    const updated = [...data.projects];
                    updated[i] = { ...updated[i], description: e.target.value };
                    setData({ ...data, projects: updated });
                  }} />

                  <label style={labelStyle}>Tech Stack (comma separated)</label>
                  <input style={inputStyle} value={(p.tech || []).join(", ")} onChange={(e) => {
                    const updated = [...data.projects];
                    updated[i] = { ...updated[i], tech: e.target.value.split(",").map((t: string) => t.trim()) };
                    setData({ ...data, projects: updated });
                  }} />

                  <div style={{ display: "flex", gap: 24, marginTop: 14 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-muted)", fontWeight: 700, cursor: "pointer" }}>
                      <input type="checkbox" checked={p.personal || false} onChange={(e) => {
                        const updated = [...data.projects];
                        updated[i] = { ...updated[i], personal: e.target.checked };
                        setData({ ...data, projects: updated });
                      }} />
                      Personal Project
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-muted)", fontWeight: 700, cursor: "pointer" }}>
                      <input type="checkbox" checked={p.highlight || false} onChange={(e) => {
                        const updated = [...data.projects];
                        updated[i] = { ...updated[i], highlight: e.target.checked };
                        setData({ ...data, projects: updated });
                      }} />
                      Featured / Flagship
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EXPERIENCE */}
          {section === "experience" && (
            <div>
              <button onClick={() => setData({
                ...data, experience: [...(data.experience || []), {
                  role: "New Role", company: "", type: "Full-time", period: "", description: "",
                }]
              })} style={{
                padding: "9px 20px", background: "transparent", border: "1px solid var(--purple)",
                borderRadius: 3, color: "var(--purple)", fontFamily: "'Courier New', monospace",
                fontSize: 12, fontWeight: 800, cursor: "pointer", marginBottom: 24,
              }}>
                + Add Experience
              </button>

              {(data.experience || []).map((ex: any, i: number) => (
                <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "20px 24px", marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 900 }}>{ex.role}</span>
                    <button onClick={() => setData({ ...data, experience: data.experience.filter((_: any, idx: number) => idx !== i) })}
                      style={{ background: "transparent", border: "1px solid #f87171", borderRadius: 3, color: "#f87171", padding: "4px 12px", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                      Delete
                    </button>
                  </div>
                  {[
                    { label: "Role", key: "role" },
                    { label: "Company", key: "company" },
                    { label: "Type (Full-time / Internship / Part-time)", key: "type" },
                    { label: "Period", key: "period" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={labelStyle}>{f.label}</label>
                      <input style={inputStyle} value={ex[f.key] || ""} onChange={(e) => {
                        const updated = [...data.experience];
                        updated[i] = { ...updated[i], [f.key]: e.target.value };
                        setData({ ...data, experience: updated });
                      }} />
                    </div>
                  ))}
                  <label style={labelStyle}>Description</label>
                  <textarea style={{ ...inputStyle, minHeight: 80, resize: "vertical" as const }} value={ex.description || ""} onChange={(e) => {
                    const updated = [...data.experience];
                    updated[i] = { ...updated[i], description: e.target.value };
                    setData({ ...data, experience: updated });
                  }} />
                </div>
              ))}
            </div>
          )}

          {/* SKILLS */}
          {section === "skills" && (
            <div>
              <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 600, marginBottom: 24 }}>
                Edit each skill category. Separate items with commas.
              </p>
              {Object.entries(data.skills || {}).map(([cat, items]) => (
                <div key={cat} style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>{cat}</label>
                  <input style={inputStyle} value={(items as string[]).join(", ")} onChange={(e) => setData({
                    ...data, skills: { ...data.skills, [cat]: e.target.value.split(",").map((s: string) => s.trim()) }
                  })} />
                </div>
              ))}
              <button onClick={() => {
                const cat = prompt("Category name:");
                if (cat) setData({ ...data, skills: { ...data.skills, [cat]: [] } });
              }} style={{
                padding: "9px 20px", background: "transparent", border: "1px solid var(--purple)",
                borderRadius: 3, color: "var(--purple)", fontFamily: "'Courier New', monospace",
                fontSize: 12, fontWeight: 800, cursor: "pointer", marginTop: 8,
              }}>
                + Add Category
              </button>
            </div>
          )}

          {/* EDUCATION */}
          {section === "education" && (
            <div>
              <button onClick={() => setData({
                ...data, education: [...(data.education || []), {
                  degree: "New Degree", institution: "", year: "", location: "",
                }]
              })} style={{
                padding: "9px 20px", background: "transparent", border: "1px solid var(--purple)",
                borderRadius: 3, color: "var(--purple)", fontFamily: "'Courier New', monospace",
                fontSize: 12, fontWeight: 800, cursor: "pointer", marginBottom: 24,
              }}>
                + Add Education
              </button>

              {(data.education || []).map((ed: any, i: number) => (
                <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "20px 24px", marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 900 }}>{ed.degree}</span>
                    <button onClick={() => setData({ ...data, education: data.education.filter((_: any, idx: number) => idx !== i) })}
                      style={{ background: "transparent", border: "1px solid #f87171", borderRadius: 3, color: "#f87171", padding: "4px 12px", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                      Delete
                    </button>
                  </div>
                  {[
                    { label: "Degree", key: "degree" },
                    { label: "Institution", key: "institution" },
                    { label: "Year", key: "year" },
                    { label: "Location", key: "location" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={labelStyle}>{f.label}</label>
                      <input style={inputStyle} value={ed[f.key] || ""} onChange={(e) => {
                        const updated = [...data.education];
                        updated[i] = { ...updated[i], [f.key]: e.target.value };
                        setData({ ...data, education: updated });
                      }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* FUN FACTS */}
          {section === "facts" && (
            <div>
              <button onClick={() => setData({
                ...data, funFacts: [...(data.funFacts || []), { text: "New fun fact" }]
              })} style={{
                padding: "9px 20px", background: "transparent", border: "1px solid var(--purple)",
                borderRadius: 3, color: "var(--purple)", fontFamily: "'Courier New', monospace",
                fontSize: 12, fontWeight: 800, cursor: "pointer", marginBottom: 24,
              }}>
                + Add Fun Fact
              </button>

              {(data.funFacts || []).map((f: any, i: number) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "center" }}>
                  <input style={{ ...inputStyle, marginTop: 0, flex: 1 }} value={f.text || ""} onChange={(e) => {
                    const updated = [...data.funFacts];
                    updated[i] = { text: e.target.value };
                    setData({ ...data, funFacts: updated });
                  }} />
                  <button onClick={() => setData({ ...data, funFacts: data.funFacts.filter((_: any, idx: number) => idx !== i) })}
                    style={{ background: "transparent", border: "1px solid #f87171", borderRadius: 3, color: "#f87171", padding: "8px 14px", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* CV UPLOAD */}
          {section === "cv" && (
            <div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", fontWeight: 600, marginBottom: 28, lineHeight: 1.8 }}>
                Upload your CV as a PDF. It will be available for download at{" "}
                <span style={{ color: "var(--purple)" }}>/prajjwal-cv.pdf</span>
              </p>

              <div style={{ background: "var(--bg-card)", border: "2px dashed var(--border)", borderRadius: 4, padding: "40px", textAlign: "center", marginBottom: 20 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>📄</div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 600, marginBottom: 20 }}>
                  Select your CV PDF file
                </p>
                <input ref={fileRef} type="file" accept=".pdf" style={{ display: "none" }} />
                <button onClick={() => fileRef.current?.click()} style={{
                  padding: "10px 24px", background: "transparent", border: "1px solid var(--border)",
                  borderRadius: 3, color: "var(--text-secondary)", fontFamily: "'Courier New', monospace",
                  fontSize: 13, fontWeight: 700, cursor: "pointer", marginRight: 12,
                }}>
                  Browse File
                </button>
                <button onClick={uploadCV} disabled={cvUploading} style={{
                  padding: "10px 24px", background: "var(--purple)", border: "none",
                  borderRadius: 3, color: "#fff", fontFamily: "'Courier New', monospace",
                  fontSize: 13, fontWeight: 800, cursor: cvUploading ? "not-allowed" : "pointer",
                  opacity: cvUploading ? 0.7 : 1,
                }}>
                  {cvUploading ? "Uploading..." : "Upload CV"}
                </button>
              </div>

              {cvMsg && (
                <p style={{ fontSize: 13, color: cvMsg.startsWith("✓") ? "#4ade80" : "#f87171", fontWeight: 700 }}>
                  {cvMsg}
                </p>
              )}

              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "16px 20px", marginTop: 24 }}>
                <p style={{ fontSize: 12, color: "var(--text-dim)", fontWeight: 700, marginBottom: 8 }}>CURRENT CV</p>
                <a href="/prajjwal-cv.pdf" target="_blank" style={{ fontSize: 13, color: "var(--purple)", fontWeight: 700, textDecoration: "none" }}>
                  /prajjwal-cv.pdf → View / Download
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
