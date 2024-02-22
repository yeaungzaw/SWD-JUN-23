import React from "react";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ContactAddPage,
  ContactPage,
  DetailContactPage,
} from "./page";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<ContactPage />} />
          <Route path="add" element={<ContactAddPage />} />
          <Route path="contact/:id" element={<DetailContactPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
