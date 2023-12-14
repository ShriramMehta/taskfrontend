import React, { useEffect, useState } from "react";
import FraudulentUpiTable from "./FraudulentUpiTable";
import SuccessfulTransactionTable from "./SuccessfulTransactionTable";
import AddTransactionForm from "./AddTransactionForm";
import AddFraudulentUpiForm from "./AddFraudulentUpiForm";
import toast from "react-hot-toast";
import commonService from "../services/all_services";
export const Upichecker = () => {
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fraudulentUpis, setFraudulentUpis] = useState([]);
  const [successfulTransactions, setSuccessfulTransactions] = useState([]);

  const handleAddTransaction = async (newTransaction) => {
    try {
      const response = await commonService.addtTxn({
        upiId: newTransaction.upiId,
        senderName: newTransaction.senderName,
        transactionId: newTransaction.transactionId,
      });
      if (response?.data?.success) {
        toast.success("Added Transaction");
        setRender((prev) => !prev);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error(`Error adding transaction: ${error.message}`);
      toast.error("An error occurred while processing the transaction.");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const successfulResponse = await fetch(
          "http://localhost:5000/api/payment/get-all-successful-transactions"
        );
        const successfulData = await successfulResponse.json();
        setSuccessfulTransactions(successfulData.successfulTransactions);

        const fraudulentResponse = await fetch(
          "http://localhost:5000/api/fraudulent/get-all-fraudulent-upis"
        );
        const fraudulentData = await fraudulentResponse.json();
        setFraudulentUpis(fraudulentData.fraudulentUpis);
      } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [render]);
  const handleAddFraudulentUpi = async (newFraudulentUpi) => {
    try {
      const response = await commonService.addUPI(newFraudulentUpi);
      console.log(response);
      if (response?.data?.success) {
        toast.success("Added UPI");
        setRender((prev) => !prev);
      } else {
        console.log(error);
        toast.error("Fraudulent UPI exists");
      }
    } catch (error) {
      toast.error("Fraudulent UPI exists");

      return false; // Indicate failure to keep the form field filled
    }
  };
  return (
    <div>
      {loading ? (
        // Render a spinner or loading indicator while data is being fetched
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="container mx-auto p-8">
          <AddTransactionForm onAddTransaction={handleAddTransaction} />
          <AddFraudulentUpiForm onAddFraudulentUpi={handleAddFraudulentUpi} />

          <FraudulentUpiTable fraudulentUpis={fraudulentUpis} />
          <SuccessfulTransactionTable
            successfulTransactions={successfulTransactions}
          />
        </div>
      )}
    </div>
  );
};
{
  /* <div className="bg-blue-200 sm:w-1/2 w-f h-full sm:mx-auto -mx-8 rounded-md shadow-lg">
        <p className="text-2xl font-semibold pt-3">UPI Checker</p>
        <p className="mt-3">
          Enter the UPI ID to check and detect the fradulent IDs.
        </p>
        <div className="mt-5">
          <label className="mr-2">UPI ID:</label>
          <input
            value={upiId}
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
      </div> */
}
