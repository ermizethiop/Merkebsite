import { useState, useEffect, useRef } from "react";

const FILES = [
  {
    name: "index.tsx",
    content: [
      `import { useState, useEffect } from 'react'`,
      `import { Dashboard } from './components'`,
      `import { useInventory } from './hooks'`,
      ``,
      `export default function App() {`,
      `  const { data, loading } = useInventory()`,
      `  if (loading) return <Loader />`,
      `  return <Dashboard data={data} theme="dark" />`,
      `}`,
    ].join("\n"),
  },
  {
    name: "models.py",
    content: [
      `from django.db import models`,
      ``,
      `class Product(models.Model):`,
      `    name = models.CharField(max_length=200)`,
      `    price = models.DecimalField(max_digits=10, decimal_places=2)`,
      `    stock = models.IntegerField(default=0)`,
      `    created_at = models.DateTimeField(auto_now_add=True)`,
      ``,
      `    def __str__(self):`,
      `        return self.name`,
    ].join("\n"),
  },
  {
    name: "schema.sql",
    content: [
      `CREATE TABLE products (`,
      `    id SERIAL PRIMARY KEY,`,
      `    name VARCHAR(200) NOT NULL,`,
      `    price DECIMAL(10,2),`,
      `    stock INTEGER DEFAULT 0,`,
      `    created_at TIMESTAMP DEFAULT NOW()`,
      `);`,
      ``,
      `CREATE INDEX idx_products_name ON products(name);`,
    ].join("\n"),
  },
];

const KEYWORDS = {
  tsx: [
    "import", "from", "export", "default", "function", "const", "let",
    "var", "return", "if", "else", "useState", "useEffect",
  ],
  py: [
    "from", "import", "class", "def", "return", "self", "if", "else",
    "for", "in", "as", "True", "False", "None",
  ],
  sql: [
    "CREATE", "TABLE", "NOT", "NULL", "DEFAULT", "INDEX", "ON",
    "TIMESTAMP", "INTEGER", "VARCHAR", "DECIMAL", "SERIAL", "PRIMARY",
    "KEY", "NOW", "SELECT", "FROM", "WHERE", "INSERT", "INTO",
    "VALUES", "AND", "OR", "IN", "IS", "REFERENCES",
  ],
};

const FUNC_NAMES = new Set([
  "Dashboard", "Loader", "App", "Product", "useState", "useEffect",
  "useInventory", "str",
]);

function tokenize(line, lang) {
  if (!line) return [{ t: "\u00A0", c: "#C9D1D9" }];
  const parts = [];
  let i = 0;

  while (i < line.length) {
    if (
      (lang === "tsx" && line.startsWith("//", i)) ||
      (lang === "py" && line[i] === "#") ||
      (lang === "sql" && line.startsWith("--", i))
    ) {
      parts.push({ t: line.slice(i), c: "#4A4A4A" });
      break;
    }

    const q = line[i];
    if (q === '"' || q === "'" || q === "`") {
      let j = i + 1;
      while (j < line.length && line[j] !== q) {
        if (line[j] === "\\") j++;
        j++;
      }
      if (j < line.length) j++;
      parts.push({ t: line.slice(i, j), c: "#00E5C3" });
      i = j;
      continue;
    }

    if (/\w/.test(line[i])) {
      let j = i;
      while (j < line.length && /\w/.test(line[j])) j++;
      const word = line.slice(i, j);
      const kws = KEYWORDS[lang] || [];
      if (kws.includes(word)) {
        parts.push({ t: word, c: "#FF6B00" });
      } else if (/^\d+$/.test(word)) {
        parts.push({ t: word, c: "#79C0FF" });
      } else if (FUNC_NAMES.has(word) || (lang === "tsx" && word[0] >= "A" && word[0] <= "Z")) {
        parts.push({ t: word, c: "#F5A623" });
      } else {
        parts.push({ t: word, c: "#C9D1D9" });
      }
      i = j;
      continue;
    }

    parts.push({ t: line[i], c: "#C9D1D9" });
    i++;
  }
  return parts;
}

export default function CodeWindow() {
  const [fileIdx, setFileIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState("typing");
  const codeRef = useRef(null);
  const file = FILES[fileIdx];
  const lang = file.name.endsWith(".tsx") ? "tsx" : file.name.endsWith(".py") ? "py" : "sql";

  useEffect(() => {
    if (phase !== "typing") return;
    if (charCount >= file.content.length) {
      setPhase("pausing");
      return;
    }
    const t = setTimeout(() => setCharCount((c) => c + 1), 35);
    return () => clearTimeout(t);
  }, [phase, charCount, file]);

  useEffect(() => {
    if (phase !== "pausing") return;
    const t = setTimeout(() => setPhase("fading"), 2000);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = setTimeout(() => {
      const next = (fileIdx + 1) % FILES.length;
      setFileIdx(next);
      setCharCount(0);
      setPhase("typing");
    }, 400);
    return () => clearTimeout(t);
  }, [phase, fileIdx]);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.scrollTop = codeRef.current.scrollHeight;
    }
  }, [charCount, fileIdx]);

  const visible = file.content.slice(0, charCount);
  const lines = visible.split("\n");

  return (
    <div style={{ position: "relative", maxWidth: 520, width: "100%" }}>
    <div
      style={{
        pointerEvents: "none",
        background: "#0D0D0D",
        borderRadius: 12,
        animation: "floatBob 6s ease-in-out infinite, glowPulse 3s ease-in-out infinite",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
        fontSize: 13,
        lineHeight: "22px",
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 0.4s ease",
        width: "100%",
        position: "relative",
        zIndex: 2,
      }}
    >
      <style>{`
        @keyframes floatBob {
          0%, 100% { transform: perspective(1000px) rotateY(-8deg) rotateX(4deg) translateY(0); }
          50% { transform: perspective(1000px) rotateY(-8deg) rotateX(4deg) translateY(-8px); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 40px rgba(245,166,35,0.12), 0 0 80px rgba(245,166,35,0.06); }
          50% { box-shadow: 0 0 50px rgba(245,166,35,0.22), 0 0 100px rgba(245,166,35,0.11); }
        }
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cmp-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 14px;
          height: 36px;
          font-size: 12px;
          color: #8B8B8B;
          background: #0D0D0D;
          cursor: default;
          user-select: none;
          border-right: 1px solid #1E1E1E;
          transition: color 0.3s;
        }
        .cmp-tab.active {
          color: #C9D1D9;
          background: #0A0A0A;
        }
        .cmp-tab.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #F5A623;
          animation: slideUnder 0.3s ease;
        }
        @keyframes slideUnder {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .cmp-line-num {
          display: inline-block;
          width: 44px;
          text-align: right;
          padding-right: 16px;
          color: #3A3A3A;
          user-select: none;
        }
      `}</style>

      {/* Toolbar */}
      <div style={{ background: "#1A1A1A", height: 36, display: "flex", alignItems: "center", padding: "0 12px", gap: 8, borderBottom: "1px solid #1E1E1E" }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        </div>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 11, color: "#555", fontFamily: "'JetBrains Mono', monospace" }}>merkeb_workspace</span>
        <div style={{ flex: 1 }} />
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", background: "#0D0D0D", borderBottom: "1px solid #1E1E1E" }}>
        {FILES.map((f, i) => (
          <div key={f.name} className={`cmp-tab${i === fileIdx ? " active" : ""}`}>
            <span style={{ fontSize: 10, color: i === fileIdx ? "#F5A623" : "#555" }}>
              {f.name.endsWith(".tsx") ? "TS" : f.name.endsWith(".py") ? "PY" : "SQL"}
            </span>
            {f.name}
          </div>
        ))}
      </div>

      {/* Code area */}
      <div
        ref={codeRef}
        style={{
          background: "#0A0A0A",
          padding: "16px 0",
          maxHeight: 340,
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
      >
        {lines.length === 0 ? (
          <div style={{ paddingLeft: 60, color: "#C9D1D9" }}>
            <span style={{ animation: "blinkCursor 1s step-end infinite", color: "#F5A623" }}>|</span>
          </div>
        ) : (
          lines.map((line, i) => (
            <div key={i} style={{ display: "flex", whiteSpace: "pre" }}>
              <span className="cmp-line-num">{i + 1}</span>
              <span>
                {tokenize(line, lang).map((t, j) => (
                  <span key={j} style={{ color: t.c }}>{t.t}</span>
                ))}
                {i === lines.length - 1 && (
                  <span style={{ animation: "blinkCursor 1s step-end infinite", color: "#F5A623", marginLeft: 1 }}>|</span>
                )}
              </span>
            </div>
          ))
        )}
      </div>

      {/* Status bar */}
      <div
        style={{
          background: "#FF6B00",
          padding: "0 14px",
          height: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 11,
          color: "#fff",
          fontWeight: 500,
        }}
      >
        <span>✦ MerkebTech</span>
        <span>React + Django + PostgreSQL</span>
        <span>Ready</span>
      </div>
    </div>

    {/* Reflection */}
    <div
      style={{
        width: "100%",
        height: "70%",
        background: "linear-gradient(to top, #0A0A0A 0%, #1A1A1A 30%, #0D0D0D 60%, rgba(255,107,0,0.3) 85%)",
        borderRadius: 12,
        transform: "scaleY(-1)",
        opacity: 0.08,
        filter: "blur(6px)",
        pointerEvents: "none",
        position: "absolute",
        top: "100%",
        left: 0,
        zIndex: 1,
      }}
    />
  </div>
  );
}

