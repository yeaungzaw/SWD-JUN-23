import React from "react";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Heading from "./components/Heading";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";

const App = () => {
  let questions = [
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a programming language that enables interactive web pages. It is commonly used for client-side scripting, allowing developers to create dynamic content that interacts with users.",
    },
    {
      id: 2,
      question: "How can I include JavaScript in my HTML file?",
      answer:
        "You can include JavaScript in your HTML file by using the <script> tag. Place your JavaScript code between the opening <script> and closing </script> tags within the <head> or <body> section of your HTML document.",
    },
    {
      id: 3,
      question: "What are the basic data types in JavaScript?",
      answer:
        "JavaScript has several basic data types, including string, number, boolean, object, and null. Additionally, there is a special data type called undefined.",
    },
    // Add more FAQ items as needed
  ];
  return (
    <div className="w-[400px] mx-auto mt-20">
      <Heading />
      <CreateForm />
      <Status />
      <ListGroup />
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <Checker /> */}

      {/* {questions.map(({ id, question, answer }) => (
        <Accordion key={id} question={question} answer={answer} />
      ))} */}
    </div>
  );
};

export default App;
