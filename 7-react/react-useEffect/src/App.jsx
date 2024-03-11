import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import HideShow from "./components/HideShow";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5173/api/courses")
    //   .then((res) => res.json())
    //   .then((json) => setCourses(json));

    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await fetch("http://localhost:5173/api/courses");
    const json = await res.json();
    setCourses(json);
  };

  return (
    <div>
      {/* <Counter /> */}
      {/* <HideShow /> */}
      <ListGroup courses={courses} />
    </div>
  );
};

export default App;
