// src/components/SuccessfulTransactionTable.js
import React from "react";

const SuccessfulTransactionTable = ({ successfulTransactions }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Successful Transactions</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Transaction ID</th>
            <th className="border px-4 py-2">Sender Name</th>
            <th className="border px-4 py-2">UPI ID</th>
            {/* Add other columns if needed */}
          </tr>
        </thead>
        <tbody>
          {successfulTransactions.map((transaction) => (
            <tr key={transaction._id}>
              <td className="border px-4 py-2">{transaction.transactionId}</td>
              <td className="border px-4 py-2">{transaction.senderName}</td>
              <td className="border px-4 py-2">{transaction.upiId}</td>
              {/* Add other columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuccessfulTransactionTable;
