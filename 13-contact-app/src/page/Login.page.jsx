import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  FormComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Login, Register } from "../service/auth.service";
import LoadingComponents from "../components/Loading.components";
import useApi from "../hook/useApi";
import ErrorComponents from "../components/Error.components";

const LoginPage = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, data, error, handleDealApi } = useApi(Login);

  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleDealApi(formData);
  };

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  return (
    <PreventComponents check={localStorage.getItem("auth")} route={"/home"}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="Center">
            <div className="w-2/6 h-auto">
              <h1 className="font-serif text-4xl text-center mb-10">
                Login Your Contact
              </h1>

              {error && <ErrorComponents>{error}</ErrorComponents>}

              <form onSubmit={handleSubmit} className="space-y-7 mt-5">
                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  type={"email"}
                  name={"email"}
                  label={"Enter Your Email"}
                  placeholder={"example@gmail.com"}
                />
                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  type={"password"}
                  name={"password"}
                  label={"Enter Your Password"}
                />
                <ButtonComponents type="submit" style={"!rounded-lg"}>
                  Login
                </ButtonComponents>
              </form>
              <p className="mt-5">
                You haven't account. Please{" "}
                <button
                  onClick={() => nav("/register")}
                  className="text-blue-400 underline"
                >
                  Register!
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default LoginPage;
