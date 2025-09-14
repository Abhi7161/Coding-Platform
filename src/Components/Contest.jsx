import React from "react";

const COLORS = {
  background: "#18192c",
  card: "#21223a",
  gradientBlue: "linear-gradient(90deg, #00ecff 0%, #2190e8 100%)",
  gradientPink: "linear-gradient(90deg, #ff56a9 0%, #c86dd7 100%)",
  accentGlow: "0 0 32px #00ecff44, 0 0 64px #c86dd744",
  textPrimary: "#fff",
  textSecondary: "#b9bbd3",
  highlight: "#00ecff",
  friendlyIconBg: "#222b37",
  globalIconBg: "#351f34"
};

const contestData = {
  friendly: [
    {
      title: "Team Algorithm Challenge",
      host: "Sarah Kim (Platinum I)",
      roomCode: "ALG02024",
      type: "Medium",
      members: "5/8",
      duration: "2 hours",
      special: "Bragging Rights"
    },
    {
      title: "Dynamic Programming Study Group",
      host: "Jordan Chen (Gold III)",
      roomCode: "DPINVITE",
      type: "Hard",
      members: "3/6",
      duration: "90 mins",
      special: "Peer Review"
    }
  ],
  global: [
    {
      title: "Ranked Match - Division II",
      ratingRange: "1800-2200",
      type: "Medium",
      time: "30 seconds",
      reward: "+25 Rating",
      penalty: "-15 Rating"
    },
    {
      title: "Ranked Match - Division I",
      ratingRange: "2200+",
      type: "Hard",
      time: "2 minutes",
      reward: "+40 Rating",
      penalty: "-20 Rating"
    }
  ]
};

function Badge({ text, color, style = {} }) {
  return (
    <span style={{
      display: "inline-block",
      background: color,
      color: "#fff",
      borderRadius: 11,
      fontWeight: 700,
      fontSize: 13,
      padding: "3px 16px",
      marginLeft: 10,
      ...style
    }}>{text}</span>
  );
}

export default function ContestModule() {
  return (
    <div style={{
      background: COLORS.background,
      minHeight: "100vh",
      width: "100vw",
      color: COLORS.textPrimary,
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{ paddingTop: 48 }}>
        <div style={{ margin: "0 auto", width: "fit-content" }}>
          <span style={{
            color: COLORS.highlight,
            background: "#23284d",
            fontWeight: 700,
            borderRadius: 10,
            padding: "5px 20px",
            fontSize: "1rem",
            letterSpacing: ".04em"
          }}>Contest Modes</span>
        </div>
        <h1 style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "2.45rem",
          margin: "23px 0 2px 0"
        }}>
          Choose Your <span style={{ color: "#d96ae8" }}>Battle Style</span>
        </h1>
        <div style={{
          textAlign: "center",
          color: COLORS.textSecondary,
          fontWeight: 500,
          fontSize: "1.13rem",
          marginBottom: 30
        }}>
          Compete in friendly matches with friends or face random opponents in ranked battles<br />
          that affect your global rating.
        </div>
      </div>
      <div style={{
        display: "flex",
        maxWidth: 1300,
        margin: "30px auto 0 auto",
        gap: 44,
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        {/* Friendly Contests Section */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 14 }}>
            <span style={{
              background: COLORS.friendlyIconBg,
              borderRadius: 12,
              marginRight: 14,
              display: "inline-block",
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 23
            }}>👥</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.25rem" }}>Friendly Contests</div>
              <div style={{ color: COLORS.textSecondary, fontSize: 15, fontWeight: 500 }}>
                Private rooms • No rating impact • Friends only
              </div>
            </div>
          </div>
          {contestData.friendly.map((c, i) => (
            <div key={c.title} style={{
              background: COLORS.card,
              borderRadius: 20,
              marginBottom: 27,
              boxShadow: COLORS.accentGlow,
              padding: "25px 28px 22px 28px",
              marginRight: 8
            }}>
              <div style={{ fontWeight: 700, fontSize: "1.08rem", marginBottom: 6 }}>
                {c.title}
                <Badge text={c.type} color="#28314a" style={{ float: "right", background: "#28314a" }} />
              </div>
              <div style={{ color: COLORS.textSecondary, fontSize: 15, fontWeight: 500, marginBottom: 10 }}>
                Hosted by {c.host}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 25, marginBottom: 12 }}>
                <span style={{ color: COLORS.highlight, fontWeight: 600, fontSize: "1.06rem" }}>👥 {c.members}</span>
                <span style={{ color: "#dadbfa", fontWeight: 600, fontSize: "1.06rem" }}>⏰ {c.duration}</span>
              </div>
              <div style={{
                background: "#162840",
                borderRadius: 10,
                padding: "10px 18px",
                color: COLORS.textPrimary,
                fontWeight: 600,
                fontSize: "1.07rem",
                marginBottom: 16,
                boxShadow: "0 0 16px #10e1fb14"
              }}>
                Room Code: <span style={{ letterSpacing: 1, fontWeight: 700 }}>{c.roomCode}</span>
                <span style={{
                  marginLeft: 20,
                  background: "#232d49",
                  color: "#8cf1e9",
                  fontWeight: 600,
                  fontSize: 13,
                  padding: "2px 15px",
                  borderRadius: 8
                }}>
                  {c.special}
                </span>
              </div>
              <button
                style={{
                  width: "100%",
                  background: COLORS.gradientBlue,
                  color: COLORS.buttonText,
                  fontWeight: 700,
                  fontSize: "1.09rem",
                  border: "none",
                  borderRadius: 12,
                  padding: "11px 0",
                  cursor: "pointer",
                  boxShadow: COLORS.accentGlow
                }}
              >Join Room</button>
            </div>
          ))}
        </div>

        {/* Global Contests Section */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 14 }}>
            <span style={{
              background: COLORS.globalIconBg,
              borderRadius: 12,
              marginRight: 14,
              display: "inline-block",
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22
            }}>🌐</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.25rem" }}>Global Contests</div>
              <div style={{ color: COLORS.textSecondary, fontSize: 15, fontWeight: 500 }}>
                1v1 matches • Rating affected • Worldwide
              </div>
            </div>
          </div>
          {contestData.global.map((c, i) => (
            <div key={c.title} style={{
              background: COLORS.card,
              borderRadius: 20,
              marginBottom: 27,
              boxShadow: COLORS.accentGlow,
              padding: "25px 28px 22px 28px"
            }}>
              <div style={{ fontWeight: 700, fontSize: "1.09rem", marginBottom: 10 }}>
                {c.title}
                <Badge text={c.type} color="#c55be7" style={{ float: "right", background: "#c55be7" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 26, marginBottom: 14 }}>
                <span style={{ color: COLORS.highlight, fontWeight: 600, fontSize: "1.07rem" }}>🛡️ {c.ratingRange}</span>
                <span style={{ color: "#dadbfa", fontWeight: 600, fontSize: "1.07rem" }}>⏰ {c.time}</span>
              </div>
              <div style={{
                display: "flex",
                background: "#1c1926",
                borderRadius: 10,
                fontWeight: 600,
                marginBottom: 12,
                boxShadow: "0 0 14px #f367ca24"
              }}>
                <div style={{
                  padding: "13px 0",
                  fontSize: "1.11rem",
                  color: "#a7fae7",
                  width: "48.5%",
                  textAlign: "center",
                  borderRight: "1.7px solid #23263d"
                }}>
                  <div style={{ fontSize: 15 }}>Win Reward</div>
                  <span style={{ color: "#8fffe0", fontWeight: 700, fontSize: "1.09rem" }}>{c.reward}</span>
                </div>
                <div style={{
                  padding: "13px 0",
                  fontSize: "1.11rem",
                  color: "#ffb9d6",
                  width: "48.5%",
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: 15 }}>Loss Penalty</div>
                  <span style={{ color: "#ff668d", fontWeight: 700, fontSize: "1.09rem" }}>{c.penalty}</span>
                </div>
              </div>
              <button
                style={{
                  width: "100%",
                  background: COLORS.gradientPink,
                  color: COLORS.buttonText,
                  fontWeight: 700,
                  fontSize: "1.09rem",
                  border: "none",
                  borderRadius: 12,
                  padding: "11px 0",
                  cursor: "pointer",
                  marginTop: 2,
                  boxShadow: COLORS.accentGlow
                }}
              >Find Match</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
