// src/App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ExpenseTracker from "./components/ExpenseTracker";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Load saved expenses from localStorage
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  return (
    <div className="min-h-screen bg-blue-400">
      <Navbar expenses={expenses} />
      <ExpenseTracker setExpenses={setExpenses} />
    </div>
  );
};

export default App;
