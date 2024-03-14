import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [createDrawer, setCreateDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(false);
  const [courses, setCourses] = useState([]);
  const [editCourse, setEditCourse] = useState({});

  const toggleCreateDrawer = () => setCreateDrawer(!createDrawer);
  const toggleEditDrawer = () => setEditDrawer(!editDrawer);
  const addCourse = (newCourse) => setCourses([...courses, newCourse]);
  const deleteCourse = (id) =>
    setCourses(courses.filter((course) => course.id !== id));
  const updateCourse = (newCourse) =>
    setCourses(
      courses.map((course) => (course.id === newCourse.id ? newCourse : course))
    );

  return (
    <DataContext.Provider
      value={{
        createDrawer,
        editDrawer,
        toggleCreateDrawer,
        toggleEditDrawer,
        courses,
        setCourses,
        addCourse,
        deleteCourse,
        editCourse,
        setEditCourse,
        updateCourse,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
