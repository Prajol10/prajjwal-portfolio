export default function Blogs() {
  const posts = [
    {
      slug: "coming-soon",
      title: "Blog posts coming soon",
      date: "2026",
      description: "I will be sharing my learnings, project breakdowns, and engineering insights here soon. Stay tuned!",
      tags: ["engineering", "AI/ML", "web"],
    },
  ];

  return (
    <div style={{ padding: "64px 56px" }}>
      <h1 style={{ fontSize: 36, color: "var(--text-primary)", fontWeight: 900, marginBottom: 8 }}>/blogs</h1>
      <p style={{ fontSize: 16, color: "var(--text-dim)", fontWeight: 700, marginBottom: 64 }}>Thoughts, learnings & breakdowns</p>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
        <h2 style={{ fontSize: 24, color: "var(--text-primary)", fontWeight: 900, whiteSpace: "nowrap" }}>
          <span style={{ color: "var(--purple)" }}>#</span>all-posts
        </h2>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {posts.map((post) => (
          <div key={post.slug} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 4, padding: "28px 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
              <h3 style={{ fontSize: 18, color: "var(--text-secondary)", fontWeight: 900 }}>{post.title}</h3>
              <span style={{ fontSize: 13, color: "var(--text-dim)", fontWeight: 700, border: "1px solid var(--border)", padding: "4px 14px", borderRadius: 2 }}>
                {post.date}
              </span>
            </div>
            <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 500, marginBottom: 18 }}>
              {post.description}
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {post.tags.map((tag) => (
                <span key={tag} style={{ fontSize: 13, color: "var(--purple)", border: "1px solid var(--purple)", padding: "3px 12px", borderRadius: 10, fontWeight: 700 }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
