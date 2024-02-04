import React from "react";
import { Link } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav className="flex justify-between py-6">
      <h1>Logo</h1>
      <div>
        <Link to={"/"}>
          <p>Menu</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavComponents;
