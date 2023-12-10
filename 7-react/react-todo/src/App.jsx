import React from "react";
import Form from "./components/Form";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Heading from "./components/Heading";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="">
        <Heading title="To Do App" />
        <Form />
        <Status />
        <ListGroup />
      </div>
    </div>
  );
};

export default App;
