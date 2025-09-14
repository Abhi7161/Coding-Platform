import React, { useState } from "react";

// Theme Colors for Unbelievable UI
const COLORS = {
  background: "#18192c",
  card: "#21223a",
  accentGradient: "linear-gradient(90deg, #00ecff 0%, #c86dd7 100%)",
  sectionGlow: "0 0 36px #00ecff39, 0 0 76px #c86dd73e",
  highlight: "#00ecff",
  pink: "#e549b8",
  textPrimary: "#fff",
  textSecondary: "#b9bbd3",
  tag: "#232d49",
  textHighlight: "#d96ae8"
};

const RESOURCES = [
  {
    type: "Tutorials",
    icon: "📚",
    description: "Best guides to get started and master algorithms, data structures, and problem-solving. Curated for all levels.",
    links: [
      { name: "Competitive Programming Handbook", url: "#" },
      { name: "Beginner’s Guide to CP", url: "#" },
      { name: "Advanced Data Structures", url: "#" }
    ]
  },
  {
    type: "Templates",
    icon: "📝",
    description: "Handy code, contest, and time management templates. Save time and code smarter!",
    links: [
      { name: "C++ STL Cheatsheet", url: "#" },
      { name: "Contest Fast I/O", url: "#" },
      { name: "Visual Studio Setup Guide", url: "#" }
    ]
  },
  {
    type: "Problem Lists",
    icon: "👾",
    description: "Curated problem ladders, must-solve sheets, daily challenge/ladder trackers.",
    links: [
      { name: "DSA 100 Must-Solve", url: "#" },
      { name: "Dynamic Programming Marathon", url: "#" },
      { name: "Most Loved Interview Questions", url: "#" }
    ]
  },
  {
    type: "Video Courses",
    icon: "🎥",
    description: "Handpicked tutorials from world-class instructors and competitive coders. For visual learners.",
    links: [
      { name: "Aditya Verma - DP Series", url: "#" },
      { name: "Stanford Algorithms", url: "#" },
      { name: "CP with Kunal", url: "#" }
    ]
  },
  {
    type: "Editor Tools",
    icon: "💻",
    description: "Boost productivity with these plugins, extensions, and playgrounds.",
    links: [
      { name: "VS Code CP Extension", url: "#" },
      { name: "Online C++/Python Compiler", url: "#" },
      { name: "Code Template Generator", url: "#" }
    ]
  },
  {
    type: "Community & Forums",
    icon: "🌐",
    description: "Ask for help or join thriving coding communities.",
    links: [
      { name: "Official Discussions", url: "#" },
      { name: "Our Discord Server", url: "#" },
      { name: "Community Blogs & Editorials", url: "#" }
    ]
  },
  {
    type: "Inspiration & News",
    icon: "🚀",
    description: "Legend coder profiles, contest results, trending problemsets, and tech news.",
    links: [
      { name: "Topcoder Hall of Fame", url: "#" },
      { name: "Codeforces Global Feed", url: "#" },
      { name: "TechCrunch Dev News", url: "#" }
    ]
  }
];

const SEARCH_PLACEHOLDER = "Find a resource, tag, or keyword…";

export default function ResourceModule() {
  const [search, setSearch] = useState("");

  // Dynamic filtered resources
  const filtered = RESOURCES
    .map(group => ({
      ...group,
      links: group.links.filter(link =>
        link.name.toLowerCase().includes(search.toLowerCase()) ||
        group.type.toLowerCase().includes(search.toLowerCase()) ||
        group.description.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter(group => group.links.length > 0);

  return (
    <div
      style={{
        background: COLORS.background,
        minHeight: "100vh",
        width: "100vw",
        color: COLORS.textPrimary,
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* Header Section */}
      <div style={{ paddingTop: 52, textAlign: "center", marginBottom: 26 }}>
        <div
          style={{
            display: "inline-block",
            margin: "0 auto",
            padding: "6px 33px",
            fontWeight: 700,
            fontSize: 15,
            background: "#23284d",
            borderRadius: 11,
            letterSpacing: "0.06em",
            color: COLORS.highlight
          }}
        >
          Resource Center
        </div>
        <h1 style={{
          fontWeight: 700,
          fontSize: "2.6rem",
          margin: "25px 0 7px 0",
        }}>
          Discover. <span style={{ color: COLORS.textHighlight }}>Code. Evolve.</span>
        </h1>
        <div style={{ fontSize: "1.21rem", color: COLORS.textSecondary, fontWeight: 500, maxWidth: 760, margin: "0 auto" }}>
          Find every tool, tutorial, and guide needed to become an elite coder. Curated by expert programmers, loved by our community. <br />
          <span style={{ color: COLORS.highlight, fontWeight: 700 }}>Level up with exclusive resources & join the coding revolution!</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 35 }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={SEARCH_PLACEHOLDER}
            style={{
              background: "#23263b",
              border: `1.7px solid ${COLORS.highlight}`,
              padding: "13px 24px",
              color: COLORS.textPrimary,
              outline: "none",
              borderRadius: "13px",
              fontSize: "1.14rem",
              width: 425,
              boxShadow: "0 0 24px #17efec10"
            }}
          />
        </div>
      </div>
      {/* Resource Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: 38,
        maxWidth: 1280,
        margin: "0 auto",
        marginBottom: 46,
        padding: "0 22px"
      }}>
        {(filtered.length ? filtered : RESOURCES).map(group => (
          <div key={group.type}
            style={{
              background: COLORS.card,
              borderRadius: "24px",
              boxShadow: COLORS.sectionGlow,
              padding: "32px 34px 31px 34px",
              position: "relative",
              minHeight: "286px",
              display: "flex",
              flexDirection: "column"
            }}>
            <div style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: 8,
              color: COLORS.textHighlight,
              display: "flex",
              alignItems: "center",
              gap: 12
            }}>
              <span style={{
                background: "#282d43",
                padding: "3px 13px",
                borderRadius: 13,
                fontSize: "1.15em"
              }}>{group.icon}</span>
              {group.type}
            </div>
            <div style={{
              fontSize: "1.09rem",
              color: COLORS.textSecondary,
              marginBottom: 18,
              fontWeight: 500
            }}>{group.description}</div>
            <ul style={{
              paddingLeft: 0,
              margin: 0,
              listStyle: "none",
              flex: 1
            }}>
              {group.links.map(res =>
                <li key={res.name} style={{ marginBottom: 13, display: "flex", alignItems: "center" }}>
                  <span style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: COLORS.highlight,
                    marginRight: 12
                  }}></span>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: COLORS.textPrimary,
                      fontWeight: 600,
                      textDecoration: "none",
                      fontSize: "1.09rem",
                      transition: "color .17s"
                    }}
                    onMouseOver={e => e.currentTarget.style.color = COLORS.textHighlight}
                    onMouseOut={e => e.currentTarget.style.color = COLORS.textPrimary}
                  >
                    {res.name}
                  </a>
                </li>)}
            </ul>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div style={{
        margin: "0 auto",
        textAlign: "center",
        padding: "0 20px 48px 20px"
      }}>
        <div style={{
          display: "inline-block",
          background: COLORS.accentGradient,
          color: COLORS.buttonText,
          fontWeight: 700,
          fontSize: "1.23rem",
          borderRadius: "15px",
          padding: "19px 52px",
          letterSpacing: ".03em",
          boxShadow: COLORS.sectionGlow,
          cursor: "pointer"
        }}>
          🚀 Explore, Contribute & Change the Game!
        </div>
      </div>
    </div>
  );
}
