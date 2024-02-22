import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import useApi from "../hook/useApi";
import { Login } from "../service/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../store/action/auth.action";

const LoginPage = () => {
  const nav = useNavigate();
  const { auth, loading, error, data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginAction(dispatch, formData);
  };

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
                  placeholder="example@gmail.com"
                />

                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  type={"password"}
                  name={"password"}
                  label={"Password"}
                />

                <ButtonComponents type={"submit"}>Login</ButtonComponents>
              </form>
              <p className="mt-5">
                You haven't account pls{" "}
                <button
                  className="text-blue-400 underline"
                  onClick={() => nav("/register")}
                >
                  Register
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
