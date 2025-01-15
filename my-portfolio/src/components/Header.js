import React from "react";

const Header = () => (
  <header style={{ backgroundColor: "#9a9d68", padding: "18px 20px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Name Section */}
      <div
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: "28px",
          fontWeight: "bold",
          color: "#f5f0ec",
        }}
      >
        Aishwarya Thadiparthi
      </div>

      {/* Social Links */}
      <div>
        <a
          href="https://linkedin.com/in/aishwaryat"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: "15px",
            textDecoration: "none",
            color: "#f5f0ec",
            fontSize: "14px",
          }}
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/aishwarya-t"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: "15px",
            textDecoration: "none",
            color: "#f5f0ec",
            fontSize: "14px",
          }}
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="mailto:athadipa@uci.edu"
          style={{
            marginLeft: "15px",
            textDecoration: "none",
            color: "#f5f0ec",
            fontSize: "14px",
          }}
        >
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>
    </div>
  </header>
);

export default Header;
