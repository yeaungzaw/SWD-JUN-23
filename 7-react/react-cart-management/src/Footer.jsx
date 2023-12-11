import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto px-6 py-5 bg-zinc-600 text-zinc-300">
      <div className="container">
        <div className="flex justify-between items-center">
          <p>Copyright © MMS IT</p>
          <a
            href="#headerSpacer"
            className="h-12 w-12 border border-white flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
