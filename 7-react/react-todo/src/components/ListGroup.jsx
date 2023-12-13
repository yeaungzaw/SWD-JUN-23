import React from "react";
import EmptyStage from "./EmptyStage";

const ListGroup = () => {
  return (
    <div id="taskLists" className="font-body">
      <EmptyStage />
      <List />
    </div>
  );
};

export default ListGroup;
