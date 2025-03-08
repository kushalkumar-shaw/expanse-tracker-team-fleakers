import React, { useState } from "react";

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  const [sortBy, setSortBy] = useState("date");

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortBy === "amount") {
      return b.amount - a.amount; // Highest amount first
    } else {
      return new Date(b.date) - new Date(a.date); // Newest date first
    }
  });

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-3">Expense List</h2>

      <div className="flex gap-2 mb-3">
        <button onClick={() => setSortBy("date")} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Sort by Date
        </button>
        <button onClick={() => setSortBy("amount")} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Sort by Amount
        </button>
      </div>

      {sortedExpenses.length === 0 ? (
        <p className="text-gray-500">No expenses yet.</p>
      ) : (
        <ul className="space-y-2">
          {sortedExpenses.map((expense) => (
            <li key={expense.id} className="flex justify-between items-center p-2 border-b last:border-none">
              <span>{expense.title} - {expense.category}</span>
              <span className="font-bold text-red-500">${expense.amount}</span>
              <button onClick={() => onEdit(expense.id)} className="ml-2 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Edit
              </button>
              <button onClick={() => onDelete(expense.id)} className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
