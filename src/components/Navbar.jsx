import React from "react";
import ExportCSV from "./ExportCSV";
import Logo from '../img/logo.png'

const Navbar = ({ expenses }) => {
  return (
    <nav className="bg-zinc-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img src={Logo}  alt="Logo" className="h-10 w-10 rounded-full shadow-md" />
          <h1 className="text-2xl font-semibold tracking-wide">Xpanso</h1>
        </div>

        {/* Export Button */}
        <ExportCSV expenses={expenses} />
      </div>
    </nav>
  );
};

export default Navbar;
