import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  FormComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import useApi from "../hook/useApi";
import { Register } from "../service/auth.service";
import LoadingComponents from "../components/Loading.components";
import ErrorComponents from "../components/Error.components";

const RegisterPage = () => {
  const nav = useNavigate();
  const { loading, data, error, handleDealApi } = useApi(Register);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (data) {
      nav("/");
    }
  }, [data]);

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    handleDealApi(formData);
  };

  return (
    <PreventComponents check={localStorage.getItem("auth")} route={"/home"}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="Center">
            <div className="w-2/6 h-auto">
              <h1 className="font-serif text-4xl mb-10">
                Register Your Account
              </h1>

              {error && <ErrorComponents>{error.msg}</ErrorComponents>}

              <form onSubmit={handleSubmit} className="space-y-5">
                <FormComponents
                  value={formData.name}
                  onChange={handleInputChange}
                  label={"Enter Your Name"}
                  type={"text"}
                  name={"name"}
                  placeholder={"John Wick"}
                />
                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  label={"Enter Your Email"}
                  type={"email"}
                  name={"email"}
                  placeholder={"example@gmail.com"}
                />
                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  label={"Enter Your Password"}
                  type={"password"}
                  name={"password"}
                />
                <FormComponents
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  label={"Confirm Your Password"}
                  type={"password"}
                  name={"password_confirmation"}
                />
                <ButtonComponents type={"submit"} style={"!rounded-lg"}>
                  Register
                </ButtonComponents>
              </form>
              <p className="mt-5">
                Do you have already account? Please{" "}
                <button
                  onClick={() => nav("/")}
                  className="text-blue-400 underline"
                >
                  Login!
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
