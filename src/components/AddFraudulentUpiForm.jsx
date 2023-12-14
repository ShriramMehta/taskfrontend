// src/components/AddFraudulentUpiForm.js
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddFraudulentUpiForm = ({ onAddFraudulentUpi }) => {
  const [upiId, setUpiId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields (add more validation as needed)
    if (!upiId) {
      toast.error("Please fill in the UPI ID.");
      return;
    }

    // Call the parent component function to add the new fraudulent UPI
    const success = await onAddFraudulentUpi({ upiId });

    // Clear the form field if the addition was successful
    if (success) {
      setUpiId("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Fraudulent UPI</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="upiId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            UPI ID:
          </label>
          <input
            type="text"
            id="upiId"
            className="border rounded w-full py-2 px-3"
            placeholder="Enter fraudulent UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Add Fraudulent UPI
        </button>
      </form>
    </div>
  );
};

export default AddFraudulentUpiForm;
