import React from "react";
import Course from "./Course";

const CourseGroup = () => {
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
    <div>
      {courses.map(({id, studentCount, title}) => (
        <Course title={title} studentCount={studentCount} key={id} />
      ))}
    </div>
  );
};

export default CourseGroup;
