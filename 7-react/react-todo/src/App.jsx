import React from "react";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Heading from "./components/Heading";

const App = () => {
  return (
    <div className="w-[400px] mx-auto mt-20">
      <Heading/>
      <CreateForm />
      <Status />
      <ListGroup />
    </div>
  );
};

export default App;
