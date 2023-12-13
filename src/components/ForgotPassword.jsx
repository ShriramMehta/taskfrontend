import React from "react";
import { useState } from "react";

export const ForgotPassword = () => {
  const [userId, setUserId] = useState("");

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = () => {};
  return (
    <div>
      <div className="bg-blue-200 sm:w-1/2 w-f h-full sm:mx-auto -mx-8 rounded-md shadow-lg">
        <p className="text-2xl font-semibold pt-3">Forgot your password?</p>
        <p className="mt-3">
          Dont worry!Enter your email Id and we will email you the next steps.
        </p>
        <div className="mt-5">
          <label className="mr-2">Name:</label>
          <input
            value={userId}
            type="text"
            name="name"
            className="w-60 bg-transparent px-2 py-1 border border-solid rounded-sm border-black mx-auto mb-3 text-black"
            placeholder="Enter your registered Email ID."
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
