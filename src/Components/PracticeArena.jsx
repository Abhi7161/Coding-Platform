import React, { useState } from "react";

const COLORS = {
  background: "#18192c",
  card: "#21223a",
  accentGradient: "linear-gradient(90deg, #00ecff 0%, #c86dd7 100%)",
  accentGlow: "0 0 16px #00ecff, 0 0 32px #c86dd7",
  textPrimary: "#fff",
  textSecondary: "#b9bbd3",
  buttonText: "#232353",
  highlight: "#00ecff",
  success: "#84ffb2",
  warning: "#ffe782",
  error: "#ff7782"
};

const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];
const TAGS = ["All", "Arrays", "Math", "Strings", "Dynamic Programming", "Greedy"];

const MOCK_PROBLEMS = [
  { id: 1, title: "Sum of Array", difficulty: "Easy", tag: "Arrays", solved: 75, attempts: 100 },
  { id: 2, title: "Prime Finder", difficulty: "Medium", tag: "Math", solved: 40, attempts: 60 },
  { id: 3, title: "Longest Substring", difficulty: "Medium", tag: "Strings", solved: 55, attempts: 80 },
  { id: 4, title: "Knapsack Challenge", difficulty: "Hard", tag: "Dynamic Programming", solved: 20, attempts: 70 },
  { id: 5, title: "Minimum Coins", difficulty: "Easy", tag: "Greedy", solved: 82, attempts: 94 }
];

export default function PracticeArena() {
  const [difficulty, setDifficulty] = useState("All");
  const [tag, setTag] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProblems = MOCK_PROBLEMS.filter(
    prob =>
      (difficulty === "All" || prob.difficulty === difficulty) &&
      (tag === "All" || prob.tag === tag) &&
      prob.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      background: COLORS.background,
      minHeight: "100vh",
      width: "100vw",
      color: COLORS.textPrimary,
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{
        background: COLORS.card,
        borderRadius: "28px",
        maxWidth: "760px",
        margin: "48px auto",
        boxShadow: "0 0 32px #43E2FF22",
        padding: "36px 40px"
      }}>
        <h2 style={{
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: "24px"
        }}>Practice Arena</h2>
        <div style={{ display: "flex", gap: 16, marginBottom: 22 }}>
          <input
            type="text"
            placeholder="Search problems…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              background: COLORS.background,
              color: COLORS.textPrimary,
              border: `1.5px solid ${COLORS.highlight}`,
              borderRadius: "10px",
              padding: "8px 18px",
              fontSize: "1.07rem",
              outline: "none",
              width: "49%",
            }}
          />
          <select
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
            style={{
              background: COLORS.background,
              color: COLORS.textPrimary,
              border: `1.5px solid ${COLORS.highlight}`,
              borderRadius: "10px",
              padding: "8px 14px",
              fontSize: "1.04rem",
              cursor: "pointer",
              outline: "none",
              width: "19%"
            }}
          >
            {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <select
            value={tag}
            onChange={e => setTag(e.target.value)}
            style={{
              background: COLORS.background,
              color: COLORS.textPrimary,
              border: `1.5px solid ${COLORS.highlight}`,
              borderRadius: "10px",
              padding: "8px 14px",
              fontSize: "1.04rem",
              cursor: "pointer",
              outline: "none",
              width: "19%"
            }}
          >
            {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div style={{ marginTop: 10, maxHeight: "380px", overflowY: "auto" }}>
          {filteredProblems.length === 0 ? (
            <div style={{
              color: COLORS.textSecondary,
              fontWeight: 500,
              padding: 30,
              textAlign: "center"
            }}>
              No problems found.
            </div>
          ) : (
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0
            }}>
              {filteredProblems.map(prob => (
                <li key={prob.id}
                  style={{
                    background: COLORS.background,
                    marginBottom: "16px",
                    padding: "19px 26px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0 0 12px #43E2FF22"
                  }}>
                  <div>
                    <div style={{
                      fontWeight: 700,
                      color: COLORS.textPrimary
                    }}>{prob.title}</div>
                    <div style={{
                      color: COLORS.textSecondary,
                      fontWeight: 600,
                      fontSize: "0.97rem",
                      marginTop: 2
                    }}>
                      Tag: {prob.tag} &nbsp;|&nbsp; Attempts: {prob.solved}/{prob.attempts}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{
                      fontWeight: 600,
                      color:
                        prob.difficulty === "Easy" ? COLORS.success :
                        prob.difficulty === "Medium" ? COLORS.warning :
                        COLORS.error
                    }}>
                      {prob.difficulty}
                    </span>
                    <button
                      style={{
                        background: COLORS.accentGradient,
                        boxShadow: COLORS.accentGlow,
                        color: COLORS.buttonText,
                        border: "none",
                        borderRadius: "10px",
                        fontWeight: 700,
                        padding: "7px 18px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        marginLeft: "8px"
                      }}
                      onClick={() => alert(`Open problem "${prob.title}"`)}
                    >
                      Solve Now
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
