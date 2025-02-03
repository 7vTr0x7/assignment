import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow w-64">
        <h2 className="text-xl font-semibold">Counter</h2>
        <p className="text-2xl font-bold">{count}</p>
        <div className="flex gap-4">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100">
            Increment
          </button>
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
