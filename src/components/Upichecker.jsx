import React from "react";

export const Upichecker = () => {
  dummyData = [
    9876543210, 8765432109, 7654321098, 6543210987, 5432109876, 4321098765,
    3210987654, 2109876543, 1098765432, 9870123456,
  ];

  const [upiId, setUpiId] = useState("");

  const handleChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleSubmit = () => {};
  return (
    <div>
      <div className="bg-blue-200 sm:w-1/2 w-f h-full sm:mx-auto -mx-8 rounded-md shadow-lg">
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
      </div>
    </div>
  );
};
