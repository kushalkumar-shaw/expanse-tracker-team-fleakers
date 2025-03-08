import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const MonthlyExpenseChart = ({ expenses }) => {

  const monthlyTotals = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date);
    const month = date.toLocaleString("default", { month: "short" }); // e.g., "Jan"
    acc[month] = (acc[month] || 0) + expense.amount;
    return acc;
  }, {});

  // Convert object to array for Recharts
  const data = Object.keys(monthlyTotals).map((month) => ({
    month,
    total: monthlyTotals[month],
  }));

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-3">Monthly Spending Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#4A90E2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyExpenseChart;
