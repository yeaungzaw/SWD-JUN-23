import React, { useEffect } from "react";
import { PreventComponents } from "../components";
import { useNavigate, Outlet } from "react-router-dom";
import { getProfile } from "../service/auth.service";

const HomePage = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  useEffect(() => {
    (async () => {
      const res = await getProfile();
    })();
  }, []);

  const handleAdd = () => nav("/home/add");

  return (
    <PreventComponents check={!localStorage.getItem("auth")} route={"/"}>
      <div className="container mx-auto h-screen">
        <div className="w-[80%] h-full mx-auto">
          <nav className="flex justify-between px-2 py-3 shadow sticky top-0">
            <h1>Contact App</h1>
            <div className="space-x-5">
              <button onClick={handleAdd} className="">
                Add
              </button>
              <button onClick={handleLogout} className="">
                Logout
              </button>
            </div>
          </nav>

          <Outlet />
        </div>
      </div>
    </PreventComponents>
  );
};

export default HomePage;
