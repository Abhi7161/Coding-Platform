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

const MOCK_PROBLEM = {
  id: 10,
  title: "Sum of Two Numbers",
  statement: `Given two integers, A and B, output their sum.
Constraints: -10^9 <= A, B <= 10^9
Input: Two space-separated integers
Output: Single integer (their sum)
Example:
Input: 4 5
Output: 9`,
  samples: [
    { input: "4 5", output: "9" },
    { input: "-2 3", output: "1" }
  ],
  attempts: 32,
  solved: 16,
  tag: "Math",
  difficulty: "Easy"
};

const LANGUAGES = ["Python", "C++", "Java", "JavaScript"];

export default function SolveProblem() {
  const [language, setLanguage] = useState(LANGUAGES);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState("");

  function runCode() {
    setOutput("Example output (connect backend for real execution)"); // Placeholder
    setFeedback("");
  }

  function submitSolution() {
    setFeedback("✅ Submitted! (Integrate backend to validate)");
  }

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
        maxWidth: "900px",
        margin: "36px auto",
        boxShadow: "0 0 32px #43E2FF22",
        padding: "36px 36px 42px 36px"
      }}>
        <h2 style={{ fontWeight: 700, fontSize: "2rem" }}>{MOCK_PROBLEM.title}</h2>
        <div style={{ color: COLORS.textSecondary, fontWeight: 600, fontSize: "1.06rem", marginBottom: 16 }}>
          Tag: {MOCK_PROBLEM.tag} | Difficulty: <span style={{
            color: MOCK_PROBLEM.difficulty === "Easy" ? COLORS.success :
              MOCK_PROBLEM.difficulty === "Medium" ? COLORS.warning :
              COLORS.error
          }}>{MOCK_PROBLEM.difficulty}</span>
          | Attempts: {MOCK_PROBLEM.solved}/{MOCK_PROBLEM.attempts}
        </div>
        <div style={{
          background: COLORS.background,
          borderRadius: "16px",
          marginBottom: "22px",
          color: COLORS.textSecondary,
          fontSize: "1.07rem",
          whiteSpace: "pre-line",
          padding: "20px"
        }}>
          {MOCK_PROBLEM.statement}
          <div style={{ marginTop: 14 }}>
            <strong>Samples:</strong>
            {MOCK_PROBLEM.samples.map((ex, idx) => (
              <div key={idx} style={{ marginTop: 4 }}>
                <span style={{ color: COLORS.highlight }}>Input:</span> {ex.input}
                <span style={{ color: COLORS.success, marginLeft: 24 }}>Output:</span> {ex.output}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 14 }}>
          <label htmlFor="lang" style={{ color: COLORS.textSecondary, fontWeight: 600 }}>Language:</label>
          <select
            id="lang"
            value={language}
            onChange={e => setLanguage(e.target.value)}
            style={{
              background: COLORS.background,
              color: COLORS.textPrimary,
              border: `1.5px solid ${COLORS.highlight}`,
              borderRadius: "9px",
              padding: "8px 16px",
              fontSize: "1.07rem",
              cursor: "pointer",
              outline: "none"
            }}
          >
            {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder={`Write your ${language} code here...`}
          rows={16}
          style={{
            width: "100%",
            background: COLORS.background,
            color: COLORS.textPrimary,
            border: `1.5px solid ${COLORS.highlight}`,
            borderRadius: "11px",
            fontSize: "1.08rem",
            fontFamily: "Fira Mono, Menlo, monospace",
            padding: "18px",
            marginBottom: "16px",
            outline: "none",
            resize: "vertical"
          }}
        />
        <div style={{ display: "flex", gap: 14, marginBottom: 22 }}>
          <button
            style={{
              background: COLORS.accentGradient,
              boxShadow: COLORS.accentGlow,
              color: COLORS.buttonText,
              border: "none",
              borderRadius: "11px",
              fontWeight: 700,
              padding: "12px 32px",
              fontSize: "1.07rem",
              cursor: "pointer"
            }}
            onClick={runCode}
          >Run Code</button>
          <button
            style={{
              background: COLORS.accentGradient,
              boxShadow: COLORS.accentGlow,
              color: COLORS.buttonText,
              border: "none",
              borderRadius: "11px",
              fontWeight: 700,
              padding: "12px 32px",
              fontSize: "1.07rem",
              cursor: "pointer"
            }}
            onClick={submitSolution}
          >Submit</button>
        </div>
        <div style={{
          background: COLORS.background,
          color: COLORS.textSecondary,
          borderRadius: "9px",
          minHeight: "44px",
          padding: "15px 14px",
          fontSize: "1.07rem",
          marginBottom: "10px",
          whiteSpace: "pre-line"
        }}>
          <strong>Output:</strong><br />{output}
        </div>
        {feedback && (
          <div style={{
            color: COLORS.success,
            fontWeight: 700,
            fontSize: "1.09rem",
            marginTop: "4px"
          }}>
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}
