import React from "react";

function Navbar() {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 text-3xl text-gray-900 font-bold">
          Verizon
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
