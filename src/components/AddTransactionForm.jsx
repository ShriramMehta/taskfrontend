// src/components/AddTransactionForm.js
import React, { useState } from "react";

const AddTransactionForm = ({ onAddTransaction }) => {
  const [senderName, setSenderName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields (add more validation as needed)
    if (!senderName || !upiId || !transactionId) {
      alert("Please fill in all fields.");
      return;
    }

    // Call the parent component function to add the new transaction
    onAddTransaction({ senderName, upiId, transactionId });

    // Clear the form fields
    setSenderName("");
    setUpiId("");
    setTransactionId("");
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="senderName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Sender Name:
          </label>
          <input
            type="text"
            id="senderName"
            className="border rounded w-full py-2 px-3"
            placeholder="Enter sender's name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
        </div>
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
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="transactionId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Transaction ID:
          </label>
          <input
            type="text"
            id="transactionId"
            className="border rounded w-full py-2 px-3"
            placeholder="Enter transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
