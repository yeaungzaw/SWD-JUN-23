import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  FormComponents,
  LoadingComponents,
  ErrorComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/auth.service";
import useApi from "../hook/useApi";

const RegisterPage = () => {
  const { loading, error, data, handleDealApi } = useApi(Register);

  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleDealApi(formData);
  };

  useEffect(() => {
    if (data) {
      nav("/");
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
                Register Your Contact
              </h1>

              {error && <ErrorComponents>{error}</ErrorComponents>}

              <form onSubmit={handleSubmit} className="space-y-5">
                <FormComponents
                  value={formData.name}
                  onChange={handleInputChange}
                  type={"text"}
                  name={"name"}
                  label={"Enter Your Name"}
                  placeholder="Su Su"
                />

                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  type={"email"}
                  name={"email"}
                  label={"Enter Your Email"}
                  placeholder="example@gmail.com"
                />

                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  type={"password"}
                  name={"password"}
                  label={"Password"}
                />

                <FormComponents
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  type={"password"}
                  name={"password_confirmation"}
                  label={"Password Confirmation"}
                />

                <ButtonComponents type={"submit"}>Register</ButtonComponents>
              </form>

              <p className="mt-5">
                You have a account pls{" "}
                <button
                  className="text-blue-400 underline"
                  onClick={() => nav("/")}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default RegisterPage;
