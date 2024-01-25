import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ContactPage = () => {
  const nav = useNavigate();
  const { state, pathname, search } = useLocation();
  //   console.log(state);
  //   console.log(pathname);
  //   console.log(search);
  const handleToBack = () => {
    nav(-1);
  };
  return (
    <div>
      <p>ContactPage</p>
      <button
        onClick={handleToBack}
        className="bg-black p-3 text-white rounded-lg hover:ring-2 ring-cyan-200 duration-200s"
      >
        Back
      </button>
      {/* optional changing */}
      <p>Contact Name is {state?.name}</p>
    </div>
  );
};

export default ContactPage;
