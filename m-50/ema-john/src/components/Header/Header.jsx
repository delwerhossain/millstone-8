import React from "react";
import logo from "../../Images/Logo.svg";

const Header = () => {
  return (
    <nav className="bg-black min-w-full max-w-full flex justify-between px-4   py-2 z-20 top-0 left-0 fixed ">
      <img className="" src={logo} alt="" />
      <div className="text-white flex gap-3 ">
        <a className="" href="#">Test</a>
        <a className="" href="#">Test</a>
        <a className="" href="#">Test</a>
        <a className="" href="#">Test</a>
      </div>
    </nav>
  );
};

export default Header;
