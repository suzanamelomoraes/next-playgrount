import headerStyles from "../styles/Header.module.css";

import React from "react";

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Next</span> Playground
      </h1>
      <p className={headerStyles.description}>
        A platform to play around and learn Next
      </p>
    </div>
  );
}

export default Header;
