import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import commonService from "../services/all_services";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleNavigate = useNavigate();

  const handleChange = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await commonService.signUpUser({
        email: formData.email,
        password: formData.password,
        username: formData.name,
      });
      console.log(response);
      if (response?.data?.success) {
        toast.success("Signup successful. Login with provided credentials");

        handleNavigate("/");
      } else {
        toast.error("user existss");
      }
    } catch (error) {
      console.error(`Error signing up: ${error.message}`);
      toast.error("An error occurred while signing up.");
    }
  };
  return (
    <div>
      <div className="bg-blue-200 sm:w-1/2 w-f h-full sm:mx-auto -mx-8 rounded-md shadow-lg">
        <p className="text-2xl font-semibold pt-3">Welcome!</p>
        <p className="mt-3">
          Kindly fill in the details below to register with us.
        </p>
        <div className="mt-5">
          <label className="mr-2">Name:</label>
          <input
            value={formData.name}
            type="text"
            name="name"
            className="w-56 bg-transparent px-2 py-1 border border-solid rounded-sm border-black mx-auto mb-3 text-black"
            placeholder="Enter your full name."
            onChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <label className="mr-2">Email:</label>
          <input
            value={formData.email}
            type="text"
            name="email"
            className="w-fit sm:w-56 bg-transparent px-2 py-1 border border-solid rounded-sm border-black mx-auto mb-3 text-black"
            placeholder="Enter your Email ID."
            onChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <label className="mr-2 pl-7">Password:</label>
          <input
            value={formData.password}
            type="text"
            name="password"
            className="w-56 bg-transparent px-2 py-1 border border-solid rounded-sm border-black mx-auto mb-3 text-black"
            placeholder="Enter your password."
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="bg-white rounded-lg px-3 py-3 mt-3 mb-3 hover:bg-slate-200 w-20"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
