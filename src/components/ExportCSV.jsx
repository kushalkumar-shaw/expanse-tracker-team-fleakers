// src/components/ExportCSV.jsx
import React from "react";

const ExportCSV = ({ expenses }) => {
  const handleExport = () => {
    if (expenses.length === 0) {
      alert("No data to export!");
      return;
    }

    // Define CSV headers
    const headers = ["Title,Amount,Category,Date"];
    
    // Format expense data
    const rows = expenses.map((expense) =>
      `${expense.title},${expense.amount},${expense.category},${expense.date}`
    );

    // Combine headers and rows
    const csvContent = [headers, ...rows].join("\n");

    // Get current date for filename
    const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const fileName = `expenses_${currentDate}.csv`;

    // Create Blob and download file
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
      className="bg-green-500 text-white px-4 py-2 rounded mt-4"
    >
      📥 Export to CSV
    </button>
  );
};

export default ExportCSV;
