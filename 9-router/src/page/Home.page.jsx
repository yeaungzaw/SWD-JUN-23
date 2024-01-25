import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const [text, setText] = useState("");
  const handleToContact = () => {
    nav("/contact", { replace: true });
  };

  const handleDataTransfer = (e) => {
    e.preventDefault();
    // console.log(text);
    nav("/contact", { state: { name: text } });
  };

  return (
    <div>
      <p>HomePage</p>
      <button
        onClick={handleToContact}
        className="bg-black p-3 text-white rounded-lg hover:ring-2 ring-cyan-200 duration-200"
      >
        Next to Contact
      </button>
      <form className="flex flex-col  w-[300px]">
        <label htmlFor="name">name</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2"
          type="text"
          name="name"
          id="name"
        />
        <button
          className="bg-black p-3 text-white rounded-lg hover:ring-2 ring-cyan-200 duration-200"
          onClick={handleDataTransfer}
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default HomePage;
