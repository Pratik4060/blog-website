import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <img
      src="/logo.png" // Make sure this path points to your actual logo image (e.g., in /public folder)
      alt="App Logo"
      style={{ width }}
    />
  );
};

export default Logo;
