import React, { useState, useEffect } from "react";

const DARK_COLORS = {
  background: "#18192c",
  card: "#21223a",
  accentGradient: "linear-gradient(90deg, #00ecff 0%, #c86dd7 100%)",
  accentGlow: "0 0 16px #00ecff, 0 0 32px #c86dd7",
  textPrimary: "#fff",
  textSecondary: "#b9bbd3",
  buttonText: "#232353",
  highlight: "#00ecff",
};

const SETTINGS_SCHEMA = [
  { key: "aiAssistance", label: "AI Assistance", type: "toggle" },
  { key: "notifications", label: "Enable Notifications", type: "toggle" },
  { key: "darkMode", label: "Dark Mode", type: "toggle" },
  { key: "language", label: "Language", type: "select", options: ["English", "Spanish", "French"] }
];

const CONNECT_SCHEMA = [
  { key: "codeforces", label: "Codeforces Handle" },
  { key: "codechef", label: "CodeChef Username" },
  { key: "leetcode", label: "LeetCode Username" },
  { key: "hackerrank", label: "HackerRank Username" }
];

const Toggle = ({ value, onChange, accentColor }) => (
  <input
    type="checkbox"
    checked={value}
    onChange={e => onChange(e.target.checked)}
    style={{ accentColor, width: "22px", height: "22px", cursor: "pointer" }}
    aria-checked={value}
  />
);

const Select = ({ options, value, onChange, colors }) => (
  <select
    value={value}
    onChange={e => onChange(e.target.value)}
    style={{
      background: colors.card,
      color: colors.textPrimary,
      border: `1.5px solid ${colors.highlight}`,
      borderRadius: "10px",
      padding: "7px 18px",
      fontSize: "1.05rem",
      cursor: "pointer",
      outline: "none",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
    }}
  >
    {options.map(opt => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
);

const TextInput = ({ value, onChange, colors, placeholder }) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={e => onChange(e.target.value)}
    style={{
      background: colors.card,
      color: colors.textPrimary,
      border: `1.5px solid ${colors.highlight}`,
      borderRadius: "10px",
      padding: "7px 18px",
      fontSize: "1.05rem",
      width: "220px",
      outline: "none"
    }}
  />
);

const SavePrompt = ({ message, onClose, colors }) => (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  }}>
    <div style={{
      background: colors.card,
      padding: "30px 40px",
      borderRadius: "20px",
      textAlign: "center",
      boxShadow: colors.accentGlow,
      maxWidth: "400px",
      color: colors.textPrimary
    }}>
      <h3 style={{ marginBottom: "15px" }}>{message}</h3>
      <button
        onClick={onClose}
        style={{
          marginTop: "10px",
          padding: "10px 25px",
          border: "none",
          borderRadius: "12px",
          background: colors.accentGradient,
          color: colors.buttonText,
          fontWeight: 700,
          cursor: "pointer"
        }}>
        Okay
      </button>
    </div>
  </div>
);

export default function Settings() {
  const [settings, setSettings] = useState({
    aiAssistance: true,
    notifications: true,
    darkMode: true,
    language: "English",
    codeforces: "",
    codechef: "",
    leetcode: "",
    hackerrank: ""
  });
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("userSettings");
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
  }, [settings]);

  const onChange = (key, value) => setSettings(prev => ({ ...prev, [key]: value }));

  const handleSave = () => setShowPrompt(true);

  const colors = DARK_COLORS;

  return (
    <div style={{
      background: colors.background,
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      color: colors.textPrimary,
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{
        background: colors.card,
        borderRadius: "28px",
        maxWidth: "480px",
        margin: "48px auto",
        boxShadow: "0 0 32px #43E2FF22",
        padding: "40px 36px"
      }}>
        <h2 style={{
          fontWeight: 700,
          fontSize: "2.2rem",
          marginBottom: "30px",
          letterSpacing: "-1px"
        }}>Settings</h2>
        {SETTINGS_SCHEMA.map(item => (
          <div key={item.key}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "28px"
            }}>
            <span style={{ color: colors.textSecondary, fontWeight: 500 }}>
              {item.label}
            </span>
            {item.type === "toggle"
              ? <Toggle value={settings[item.key]} onChange={val => onChange(item.key, val)} accentColor={colors.highlight} />
              : <Select options={item.options} value={settings[item.key]} onChange={val => onChange(item.key, val)} colors={colors} />}
          </div>
        ))}

        <h3 style={{
          fontSize: "1.1rem",
          color: colors.textSecondary,
          fontWeight: 700,
          marginBottom: "16px",
          marginTop: "32px"
        }}>Connect Coding Platforms</h3>
        {CONNECT_SCHEMA.map(field => (
          <div key={field.key}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "18px"
            }}>
            <span style={{ color: colors.textSecondary, fontWeight: 500 }}>
              {field.label}
            </span>
            <TextInput
              value={settings[field.key]}
              onChange={val => onChange(field.key, val)}
              colors={colors}
              placeholder={`Enter ${field.label}`}
            />
          </div>
        ))}

        <button style={{
          width: "100%",
          padding: "13px",
          fontSize: "1.13rem",
          borderRadius: "12px",
          border: "none",
          background: colors.accentGradient,
          boxShadow: colors.accentGlow,
          color: colors.buttonText,
          fontWeight: 700,
          cursor: "pointer",
          marginTop: "16px"
        }}
        onClick={handleSave}>Save Changes</button>
      </div>
      {showPrompt && (
        <SavePrompt
          message="🎉 Your settings have been saved successfully!"
          colors={colors}
          onClose={() => setShowPrompt(false)}
        />
      )}
    </div>
  );
}
