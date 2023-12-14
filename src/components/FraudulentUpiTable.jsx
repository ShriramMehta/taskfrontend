// src/components/FraudulentUpiTable.js
import React from "react";

const FraudulentUpiTable = ({ fraudulentUpis }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Fraudulent UPIs</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">UPI ID</th>
            {/* Add other columns if needed */}
          </tr>
        </thead>
        <tbody>
          {fraudulentUpis.map((upi) => (
            <tr key={upi._id}>
              <td className="border px-4 py-2">{upi.upiId}</td>
              {/* Add other columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FraudulentUpiTable;
