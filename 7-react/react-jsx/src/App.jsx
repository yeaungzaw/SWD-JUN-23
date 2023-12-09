import React from "react";

const App = () => {
  const title = "Our Course Lists";

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

  return (
    <div className="p-10 m-10 border-2 border-gray-200">
      <h1 className="font-serif font-bold text-3xl text-blue-500 mb-5">
        {title}
      </h1>

      <ul>
        {courses
          .filter(({ studentCount }) => studentCount > 0)
          .map(({ id, title, studentCount }) => (
            <li
              className={`border-s-2 border-gray-200 ${
                studentCount === 0 ? "bg-red-100" : "bg-gray-100"
              } mb-3 p-3`}
              key={id}
            >
              {`${studentCount} ${title}`}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
