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
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../store/action/auth.action";
import { login, processing } from "../store/slice/auth.slice";
import { Login } from "../service/auth.service";

const LoginPage = () => {
  const nav = useNavigate();
  const { auth, loading, error, data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(processing()); // loading - true
    const res = await Login(formData);
    dispatch(login(res.data));
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
