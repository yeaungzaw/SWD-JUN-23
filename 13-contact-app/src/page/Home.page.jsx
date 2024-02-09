import React from "react";
import { PreventComponents } from "../components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  return (
    <PreventComponents check={!localStorage.getItem("auth")} route={"/"}>
      <div className="font-serif flex justify-around py-3">
        <h1>HomePage</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </PreventComponents>
  );
};

export default HomePage;
