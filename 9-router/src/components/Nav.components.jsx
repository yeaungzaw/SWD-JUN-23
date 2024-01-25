import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav>
      <ol className="flex space-x-4 no-underline text-blue-600">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} state={{ phoneNumber: 9785568747 }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/book"}>Book</NavLink>
        </li>
        <li>
          <NavLink to={"/book/2"}>Book2</NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavComponents;
