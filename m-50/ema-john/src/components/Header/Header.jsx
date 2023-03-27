import React from "react";
import logo from "../../Images/Logo.svg";

const Header = () => {
  return (
    <nav className="bg-black min-w-full max-w-full flex justify-between px-4">
      <img className="" src={logo} alt="" />
      <div className="text-white flex justify-around">
        <a className="" href="#">Test</a>
        <a className="" href="#">Test</a>
        <a className="" href="#">Test</a>
        <a className="" href="#">Test</a>
      </div>
    </nav>
  );
};

export default Header;
