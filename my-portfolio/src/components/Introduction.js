import React from "react";
import profile from "../images/me1.png";

const Introduction = ({ onArrowClick }) => (
  <div className="container-fluid" style={{ backgroundColor: "#f5f0ec" }}>
    <div className="row align-items-center" style={{ height: "calc(100vh - 100px)" }}>
      {/* Text Section */}
      <div className="col-lg-6 col-md-6 col-sm-12 px-4">
        <div
          style={{
            color: "#9a9d68",
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "20px",
            paddingLeft: "99px",
          }}
        >
          Hi!
        </div>
        <div
          style={{
            fontFamily: "Times",
            color: "#4A5759",
            fontSize: "16px",
            paddingLeft: "100px",
          }}
        >
          I'm Aishwarya, a 4th year Computer Science student at UC Irvine, specializing in Intelligent Systems. I’m passionate about using technology
          to develop innovative solutions and enhance user experiences through collaboration and creative problem-solving.
          <br />
          <br />
          Check out some of my notable projects below!
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
        <img
          src={profile}
          alt="Aishwarya's Profile"
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

    {/* Arrow Section */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "-50px",
        cursor: "pointer",
      }}
      onClick={onArrowClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9a9d68"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="bounce-animation"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  </div>
);

export default Introduction;
