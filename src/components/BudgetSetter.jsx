import React, { useState, useEffect } from "react";

const BudgetSetter = ({ budget, setBudget }) => {
  const [newBudget, setNewBudget] = useState(budget || "");

  useEffect(() => {
    const storedBudget = localStorage.getItem("budget");
    if (storedBudget) {
      setBudget(parseFloat(storedBudget));
    }
  }, [setBudget]);

  const handleSetBudget = () => {
    if (!newBudget || newBudget < 0) return;
    setBudget(parseFloat(newBudget));
    localStorage.setItem("budget", newBudget);
    alert("Budget set successfully! ✅");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-bold mb-3">Set Monthly Budget</h2>
      <div className="flex gap-2">
        <input
          type="number"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
          placeholder="Enter budget"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSetBudget}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Set
        </button>
      </div>
    </div>
  );
};

export default BudgetSetter;
