import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionGroup = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a programming language that enables interactive web pages. It is commonly used for client-side scripting, allowing developers to create dynamic content that interacts with users.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How can I include JavaScript in my HTML file?",
      answer:
        "You can include JavaScript in your HTML file by using the <script> tag. Place your JavaScript code between the opening <script> and closing </script> tags within the <head> or <body> section of your HTML document.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What are the basic data types in JavaScript?",
      answer:
        "JavaScript has several basic data types, including string, number, boolean, object, and null. Additionally, there is a special data type called undefined.",
      isOpen: false,
    },
  ]);

  const openAccordion = (id) => {
    setFaq(
      faq.map((el) =>
        el.id === id ? { ...el, isOpen: true } : { ...el, isOpen: false }
      )
    );
  };

  return (
    <div>
      <h1 className="text-3xl mb-5">FAQ Group</h1>

      {faq.map(({ id, question, answer, isOpen }) => (
        <Accordion
          key={id}
          id={id}
          openAccordion={openAccordion}
          isOpen={isOpen}
          question={question}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
