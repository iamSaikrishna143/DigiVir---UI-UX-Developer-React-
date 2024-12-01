import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div className="relative">
      <header className="flex justify-between mx-20 py-3 h-20">
        <img src={logo} alt="HabotLogo" />
        <nav className="list-none flex items-center gap-5">
          <li className="flex gap-8">
            <Link to={"/FindSuppliers"} className="navLink">
              Find Suppliers
            </Link>
            <Link
              to={"/FindService"}
              className="navLink flex items-center gap-1"
            >
              Find Service Tags <IoIosArrowDown />
            </Link>
          </li>
          <Link className="loginbtn">Log in/Sign up</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
