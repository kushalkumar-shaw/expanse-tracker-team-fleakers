import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseFilters from "./ExpenseFilters";
import ExpenseChart from "./ExpenseChart";
import MonthlyExpenseChart from "./MonthlyExpenseChart";
import BudgetSetter from "./BudgetSetter";
import ExportCSV from './ExportCSV'

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }

    const storedBudget = localStorage.getItem("budget");
    if (storedBudget) {
      setBudget(parseFloat(storedBudget));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);

    // Check if new total exceeds budget
    const totalSpent = updatedExpenses.reduce((acc, exp) => acc + exp.amount, 0);
    if (budget > 0 && totalSpent > budget) {
      alert("⚠️ Warning: You have exceeded your budget!");
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (id, newTitle, newAmount, newCategory) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id
          ? { ...expense, title: newTitle, amount: parseFloat(newAmount), category: newCategory }
          : expense
      )
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleDateChange = (type, value) => {
    if (type === "start") setStartDate(value);
    if (type === "end") setEndDate(value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory = selectedCategory ? expense.category === selectedCategory : true;
    const matchesStartDate = startDate ? new Date(expense.date) >= new Date(startDate) : true;
    const matchesEndDate = endDate ? new Date(expense.date) <= new Date(endDate) : true;
    return matchesCategory && matchesStartDate && matchesEndDate;
  });

  const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const isOverBudget = totalSpent > budget;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      
      <BudgetSetter budget={budget} setBudget={setBudget} />
      
      <div className={`p-4 rounded-lg mb-4 ${isOverBudget ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
        <h2 className="text-lg font-bold">Budget Summary</h2>
        <p>Budget: ${budget.toFixed(2)}</p>
        <p>Spent: ${totalSpent.toFixed(2)}</p>
        {isOverBudget && <p className="font-bold">⚠️ Over budget! Try to cut down expenses.</p>}
      </div>

      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseFilters
        categories={[...new Set(expenses.map((expense) => expense.category))]}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        startDate={startDate}
        endDate={endDate}
        onDateChange={handleDateChange}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <MonthlyExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} onEdit={editExpense} />
      {/* Export CSV Button */}
      <ExportCSV expenses={expenses} />
    </div>
  );
};

export default ExpenseTracker;
