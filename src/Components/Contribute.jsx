import React, { useState } from "react";

const COLORS = {
  background: "#18192c",
  card: "#21223a",
  accentGradient: "linear-gradient(90deg, #00ecff 0%, #c86dd7 100%)",
  accentGlow: "0 0 32px #28e0fa88, 0 0 64px #c86dd755",
  textPrimary: "#fff",
  textSecondary: "#b9bbd3",
  buttonText: "#232353",
  highlight: "#00ecff"
};

const DIFFICULTIES = ["Easy", "Medium", "Hard"];
const CATEGORIES = ["Arrays", "Math", "DP", "Strings", "Graph", "Custom"];
const ICON_STYLE = { marginRight: 10, color: COLORS.highlight, fontSize: 20, verticalAlign: 'middle' };

function TestCaseRow({ index, data, onChange, onRemove, isSample, onToggleSample }) {
  return (
    <div style={{
      background: "#17182c",
      borderRadius: "16px",
      marginBottom: 18,
      position: "relative",
      boxShadow: "0 0 19px #31ffe144"
    }}>
      <div style={{ display: "flex", alignItems: "center", padding: "13px 18px 0 18px" }}>
        <span style={{ color: "#80e6f6", fontWeight: 700, fontSize: "1.07rem" }}>
          Test Case {index + 1}
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: "0.97rem",
            background: isSample ? COLORS.accentGradient : "#28314a",
            color: isSample ? "#fff" : COLORS.textSecondary,
            borderRadius: "9px",
            fontWeight: 700,
            padding: "3px 13px"
          }}
          onClick={onToggleSample}
        >{isSample ? "Sample" : "Hidden"}</span>
        {onRemove && (
          <button
            onClick={onRemove}
            style={{
              border: "none",
              background: "none",
              color: "#ff6b92",
              marginLeft: 8,
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 15
            }}>✕</button>
        )}
      </div>
      <div style={{ padding: "13px 18px 16px 18px" }}>
        <div style={{ display: "flex", gap: 16, marginBottom: 8 }}>
          <div style={{ flex: 1 }}>
            <label style={{ color: COLORS.textSecondary, fontWeight: 600, fontSize: 15 }}>Input:</label>
            <input
              type="text"
              value={data.input}
              placeholder="Test input"
              onChange={e => onChange('input', e.target.value)}
              style={{
                width: "100%",
                marginTop: 3,
                background: "#23263b",
                color: COLORS.textPrimary,
                border: `1.2px solid ${COLORS.highlight}`,
                borderRadius: "8px",
                padding: "9px 10px",
                fontSize: "1rem",
                outline: "none"
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ color: COLORS.textSecondary, fontWeight: 600, fontSize: 15 }}>Expected Output:</label>
            <input
              type="text"
              value={data.output}
              placeholder="Expected output"
              onChange={e => onChange('output', e.target.value)}
              style={{
                width: "100%",
                marginTop: 3,
                background: "#23263b",
                color: COLORS.textPrimary,
                border: `1.2px solid ${COLORS.highlight}`,
                borderRadius: "8px",
                padding: "9px 10px",
                fontSize: "1rem",
                outline: "none"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContributionPage() {
  const [selectedTab, setSelectedTab] = useState("create");
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [statement, setStatement] = useState("");
  const [tags, setTags] = useState("");
  const [testCases, setTestCases] = useState([
    { input: "", output: "", isSample: true },
    { input: "", output: "", isSample: false }
  ]);

  function updateTestCase(idx, field, value) {
    setTestCases(tc => tc.map((row, i) => i === idx ? { ...row, [field]: value } : row));
  }
  function removeTestCase(idx) {
    setTestCases(tc => tc.filter((_, i) => i !== idx));
  }
  function toggleSample(idx) {
    setTestCases(tc => tc.map((row, i) =>
      i === idx ? { ...row, isSample: !row.isSample } : row
    ));
  }
  function addTestCase() {
    setTestCases(tc => [...tc, { input: "", output: "", isSample: false }]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Integrate API call here
    window.alert("🎉 Problem submitted for review!");
  }

  return (
    <div style={{
      background: COLORS.background,
      minHeight: "100vh",
      width: "100vw",
      color: COLORS.textPrimary,
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{ paddingTop: 38, textAlign: "center" }}>
        <h1 style={{ fontWeight: 700, fontSize: "2.3rem", marginBottom: 11 }}>
          Create & Share <span style={{ color: "#d96ae8" }}>Problems</span>
        </h1>
        <div style={{ fontSize: "1.15rem", color: COLORS.textSecondary, fontWeight: 500, marginBottom: 13 }}>
          Contribute original problems to the community. Create test cases, write editorials, and help fellow programmers grow.
        </div>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 8,
        marginBottom: 32,
        gap: 16
      }}>
        <button
          style={{
            flex: 1,
            background: selectedTab === "create" ? COLORS.accentGradient : "#1a2236",
            color: selectedTab === "create" ? COLORS.buttonText : COLORS.textSecondary,
            border: "none",
            borderRadius: "16px",
            fontWeight: 700,
            fontSize: "1.07rem",
            boxShadow: selectedTab === "create" ? COLORS.accentGlow : undefined,
            padding: "10px 0",
            cursor: "pointer",
            transition: "background .19s"
          }}
          onClick={() => setSelectedTab("create")}
        >{'\u2795'} Create Problem</button>
        <button
          style={{
            flex: 1,
            background: selectedTab === "community" ? COLORS.accentGradient : "#1a2236",
            color: selectedTab === "community" ? COLORS.buttonText : COLORS.textSecondary,
            border: "none",
            borderRadius: "16px",
            fontWeight: 700,
            fontSize: "1.07rem",
            boxShadow: selectedTab === "community" ? COLORS.accentGlow : undefined,
            padding: "10px 0",
            cursor: "pointer"
          }}
          onClick={() => setSelectedTab("community")}
        >{'\u{1F441}'} Community Problems</button>
      </div>
      {selectedTab === "create" && (
        <form onSubmit={handleSubmit}>
          <div style={{
            display: "flex",
            maxWidth: 1300,
            margin: "0 auto 76px auto",
            gap: "4vw"
          }}>
            {/* Problem Details Card */}
            <div style={{
              flex: 1,
              background: COLORS.card,
              borderRadius: "20px",
              padding: "33px 37px 27px 37px",
              boxShadow: "0 0 36px #3df7ff29"
            }}>
              <div style={{ fontSize: "1.09rem", color: COLORS.highlight, marginBottom: "18px", fontWeight: 600 }}>
                <span style={ICON_STYLE}>{'\u{1F4C4}'}</span>
                Problem Details
              </div>
              <label style={{ color: COLORS.textSecondary, fontWeight: 600 }}>Problem Title</label>
              <input
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter a descriptive problem title..."
                style={{
                  width: "100%",
                  marginBottom: 21,
                  marginTop: 4,
                  background: "#23263b",
                  color: COLORS.textPrimary,
                  border: `1.2px solid ${COLORS.highlight}`,
                  borderRadius: "9px",
                  padding: "10px 16px",
                  fontSize: "1.07rem",
                  outline: "none"
                }}
              />
              <div style={{ display: "flex", gap: 16, marginBottom: 21 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ color: COLORS.textSecondary, fontWeight: 600 }}>Difficulty</label>
                  <select
                    required
                    value={difficulty}
                    onChange={e => setDifficulty(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: 3,
                      background: "#23263b",
                      color: COLORS.textPrimary,
                      border: `1.2px solid ${COLORS.highlight}`,
                      borderRadius: "9px",
                      padding: "10px 10px",
                      fontSize: "1.08rem",
                      outline: "none",
                      cursor: "pointer"
                    }}
                  >
                    <option value="" hidden>Select difficulty</option>
                    {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ color: COLORS.textSecondary, fontWeight: 600 }}>Category</label>
                  <select
                    required
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: 3,
                      background: "#23263b",
                      color: COLORS.textPrimary,
                      border: `1.2px solid ${COLORS.highlight}`,
                      borderRadius: "9px",
                      padding: "10px 10px",
                      fontSize: "1.08rem",
                      outline: "none",
                      cursor: "pointer"
                    }}
                  >
                    <option value="" hidden>Select category</option>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <label style={{ color: COLORS.textSecondary, fontWeight: 600 }}>Problem Statement</label>
              <textarea
                required
                value={statement}
                onChange={e => setStatement(e.target.value)}
                placeholder="Write a clear and detailed problem statement..."
                rows={6}
                style={{
                  width: "100%",
                  marginBottom: 19,
                  marginTop: 3,
                  background: "#23263b",
                  color: COLORS.textPrimary,
                  border: `1.2px solid ${COLORS.highlight}`,
                  borderRadius: "10px",
                  padding: "13px 15px",
                  fontSize: "1.09rem",
                  outline: "none",
                  resize: "vertical"
                }}
              />
              <label style={{ color: COLORS.textSecondary, fontWeight: 600 }}>Tags (comma separated)</label>
              <input
                value={tags}
                onChange={e => setTags(e.target.value)}
                placeholder="array, binary search, two pointers"
                style={{
                  width: "100%",
                  marginTop: 3,
                  marginBottom: 7,
                  background: "#23263b",
                  color: COLORS.textPrimary,
                  border: `1.2px solid ${COLORS.highlight}`,
                  borderRadius: "9px",
                  padding: "9px 14px",
                  fontSize: "1.07rem",
                  outline: "none"
                }}
              />
            </div>
            {/* Test Cases Card */}
            <div style={{
              flex: 1,
              background: COLORS.card,
              borderRadius: "20px",
              padding: "33px 37px 27px 37px",
              boxShadow: "0 0 36px #3df7ff29"
            }}>
              <div style={{ fontSize: "1.09rem", color: COLORS.highlight, marginBottom: "18px", fontWeight: 600 }}>
                <span style={ICON_STYLE}>{'\u{1F4CB}'}</span>
                Test Cases
              </div>
              {testCases.map((tc, idx) => (
                <TestCaseRow
                  key={idx}
                  index={idx}
                  data={tc}
                  isSample={tc.isSample}
                  onRemove={testCases.length > 1 ? () => removeTestCase(idx) : undefined}
                  onToggleSample={() => toggleSample(idx)}
                  onChange={(field, value) => updateTestCase(idx, field, value)}
                />
              ))}
              <button
                type="button"
                onClick={addTestCase}
                style={{
                  width: "100%",
                  marginBottom: 10,
                  background: COLORS.accentGradient,
                  color: COLORS.buttonText,
                  border: "none",
                  borderRadius: "11px",
                  fontWeight: 600,
                  padding: "10px 0",
                  fontSize: "1.07rem",
                  cursor: "pointer",
                  boxShadow: COLORS.accentGlow,
                  marginTop: '4px'
                }}>{'\u2795'} Add Test Case</button>
            </div>
          </div>
          <div style={{ maxWidth: 520, margin: "0 auto", marginBottom: 46 }}>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "1.17rem",
                borderRadius: "14px",
                border: "none",
                background: COLORS.accentGradient,
                boxShadow: COLORS.accentGlow,
                color: COLORS.buttonText,
                fontWeight: 700,
                cursor: "pointer",
                marginTop: "12px"
              }}
            >Submit Problem</button>
          </div>
        </form>
      )}
      {selectedTab === "community" && (
        <div style={{
          background: COLORS.card,
          borderRadius: "20px",
          maxWidth: 760,
          margin: "0 auto",
          padding: 46,
          textAlign: "center",
          color: COLORS.textSecondary,
          fontWeight: 600,
          fontSize: "1.18rem"
        }}>
          Community contributions coming soon!
        </div>
      )}
    </div>
  );
}
