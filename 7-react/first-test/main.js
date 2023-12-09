import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement("h1", null, "Min Ga Lar Par"); // react node

const App = () => {
  const courses = [
    {
      id: 1,
      title: "Basic Ui Design",
      studentCount: 5,
    },
    {
      id: 2,
      title: "Premium Ui Design",
      studentCount: 7,
    },
    {
      id: 3,
      title: "Special Web Design",
      studentCount: 0,
    },
    {
      id: 4,
      title: "Web Application Development",
      studentCount: 5,
    },
    {
      id: 5,
      title: "Web Dev Foundation",
      studentCount: 0,
    },
  ];

  return React.createElement(
    "div",
    {
      className: "p-10 border border-gray-500 m-10",
    },
    React.createElement(
      "h1",
      { className: "font-serif font-bold text-3xl text-blue-500 mb-5" },
      "Course Lists"
    ),
    React.createElement(
      "ul",
      null,
      courses
        .filter(({studentCount}) => studentCount > 0)
        .map(({ id, title, studentCount }) =>
          React.createElement(
            "li",
            {
              key: id,
              className: `font-mono ${
                studentCount === 0 ? "bg-red-100" : "bg-gray-100"
              } mb-3 p-2 border-s-4`,
            },
            studentCount,
            " ",
            title
          )
        )
    )
  );
};

root.render(App());
