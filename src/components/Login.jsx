import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import commonService from "../services/all_services";

export const Login = () => {
  const [visible, setvisible] = useState(false);

  const [isInputFocused, setIsInputFocused] = useState(false);

  const [isInputPassword, setIsInputPassword] = useState(false);

  const [loginForm, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [loadingStates, setLoadingStates] = useState({
    isSignInLoading: false,
  });
  const changeLoadingStates = (name, value) => {
    setLoadingStates((prev) => ({ ...prev, [name]: value }));
  };
  const handleNavigate = useNavigate();
  const handleSubmit = async () => {
    try {
      changeLoadingStates("isSignInLoading", true);
      const response = await commonService.loginUser({
        email: loginForm.email,
        password: loginForm.password,
      });
      toast.success("Login successful");
      console.log(response);
      if (response?.data?.success) {
        changeLoadingStates("isSignInLoading", false);
        localStorage.setItem("project_user", JSON.stringify(response?.data));

        handleNavigate("/upichecker");
      }
    } catch (error) {
      console.error(`Error signing in: ${error.message}`);
      toast.error("An error occurred while signing in.");
    }
  };
  const handleChange = (e) => {
    setLoginState({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="w-3/4 mx-auto ">
        <div className="sm:w-1/3 w-full bg-blue-300 rounded-md sm:mb-0  mx-auto shadow-2xl">
          <h1 className="text-textred text-4xl text-center mt-5 font-semibold pt-3">
            Welcome back!
          </h1>
          <h1 className="text-textred text-xs text-center mt-3 mb-2">
            Kindly enter your details.
          </h1>
          <div className="group">
            <label
              className={`absolute group-hover:text-xs group-hover:absolute group-hover:mt-2 ml-2 font-light
               ${isInputFocused || loginForm.email ? "mt-2 text-xs" : "mt-9"}`}
            >
              Please enter your Email
            </label>
            <input
              value={loginForm.email}
              type="email"
              name="email"
              className="w-4/5 bg-transparent px-2 py-1 border border-solid rounded-sm border-white mx-auto mt-8 mb-8"
              placeholder=""
              onChange={handleChange}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
          </div>

          <div className="group">
            <h1
              className={`absolute group-hover:text-xs group-hover:absolute group-hover:-mt-5 ml-9 font-light
               ${
                 isInputPassword || loginForm.password
                   ? "-mt-5 text-xs"
                   : "mt-1"
               }`}
            >
              Please enter your Password
            </h1>
            <input
              value={loginForm.password}
              name="password"
              type={visible ? "text" : "password"}
              className="w-4/5 bg-transparent px-2 py-1 border border-solid rounded-sm border-white mx-auto mb-2 "
              placeholder=""
              onChange={handleChange}
              onFocus={() => setIsInputPassword(true)}
              onBlur={() => setIsInputPassword(false)}
            />
          </div>

          <div>
            <Button
              onClick={handleSubmit}
              loading={loadingStates.isSignInLoading}
            >
              Sign In
            </Button>
          </div>
          <div className="mx-auto pb-4">
            <Link to="/signup" className="text-xs underline">
              New User?Please Sign Up!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
