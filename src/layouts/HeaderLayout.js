import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HeaderLayout = () => {
  const location = useLocation();
  const styled = { textDecoration: "none", color: "white" };
  console.log(location);

  return (
    <>
      <div
        style={{
          color: "white",
          width: "100vw",
          overflow: "visible",
          height: "100px",
          backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <button>sedasdt</button>
        <div>
          <h2>{location.state?.title || "Header"}</h2>
        </div>
        <h3>
          <Link style={styled} to="/">
            Home
          </Link>{" "}
          <Link style={styled} to="/about">
            About
          </Link>{" "}
          <Link style={styled} to="/news">
            News
          </Link>{" "}
          <Link style={styled} to="/users">
            Users
          </Link>
          <button
            onClick={() => {
              console.log(window.history.state);
              window.history.pushState({ name: "qweqw" });
            }}
          >
            sedasdt
          </button>
        </h3>
      </div>
    </>
  );
};

export default HeaderLayout;
