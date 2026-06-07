"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Wrong password. Try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "var(--bg-main)", fontFamily: "'Courier New', monospace",
    }}>
      <div style={{
        background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: 6, padding: "48px 40px", width: "100%", maxWidth: 400,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
          <div style={{ width: 22, height: 22, border: "2px solid var(--purple)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--purple)", fontWeight: 900 }}>▲</div>
          <span style={{ color: "var(--text-primary)", fontSize: 16, fontWeight: 900 }}>Admin Panel</span>
        </div>

        <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 600, marginBottom: 28 }}>
          Enter your password to access the dashboard.
        </p>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 11, color: "var(--text-dim)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              style={{
                width: "100%", padding: "12px 16px",
                background: "var(--bg-deep)", border: "1px solid var(--border)",
                borderRadius: 3, color: "var(--text-primary)",
                fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 600,
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--purple)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </div>

          {error && (
            <p style={{ fontSize: 12, color: "#f87171", fontWeight: 700, marginBottom: 16 }}>
              ⚠ {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%", padding: "13px",
              background: "var(--purple)", border: "none",
              borderRadius: 3, color: "#fff",
              fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 800,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1, letterSpacing: "0.04em",
            }}
          >
            {loading ? "Logging in..." : "Login →"}
          </button>
        </form>
      </div>
    </div>
  );
}
