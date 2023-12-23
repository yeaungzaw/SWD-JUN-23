import React from "react";
import EmptyStage from "./EmptyStage";
import Record from "./Record";

const RecordGroup = ({ records, removeRecord }) => {
  return (
    <>
      {records.length === 0 && <EmptyStage />}
      {records.map((record, index) => (
        <Record
          key={record.id}
          record={record}
          index={index}
          removeRecord={removeRecord}
        />
      ))}
    </>
  );
};

export default RecordGroup;
