import Logo from '../img/logo.png'
import React from "react";
import ExportCSV from "./ExportCSV";

const Navbar = ({ expenses }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="h-8 w-8" />
        <h1 className="text-xl font-bold">Expense Tracker</h1>
      </div>

      {/* Export Button */}
      <ExportCSV expenses={expenses} />
    </nav>
  );
};

export default Navbar;
