// src/components/ExportCSV.jsx
import React from "react";

const ExportCSV = ({ expenses }) => {
  const handleExport = () => {
    if (expenses.length === 0) {
      alert("⚠️ No data to export!");
      return;
    }

    const headers = ["Title,Amount,Category,Date"];
    const rows = expenses.map((expense) =>
      `${expense.title},${expense.amount},${expense.category},${expense.date}`
    );
    const csvContent = [headers, ...rows].join("\n");

    const currentDate = new Date().toISOString().split("T")[0];
    const fileName = `expenses_${currentDate}.csv`;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleExport}
      className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
    >
      📥 Export Expenses
    </button>
  );
};

export default ExportCSV;
