import React from "react";

const ExpenseFilters = ({ categories, selectedCategory, onCategoryChange, startDate, endDate, onDateChange }) => {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 bg-white p-4 rounded-lg shadow-md">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="flex items-center gap-2">
        <label className="text-sm">From:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => onDateChange("start", e.target.value)}
          className="border p-2 rounded"
        />
        <label className="text-sm">To:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onDateChange("end", e.target.value)}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default ExpenseFilters;
