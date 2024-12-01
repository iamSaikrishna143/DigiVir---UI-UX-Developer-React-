import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`You selected: ${option}`);
    setIsOpen(false); // Close dropdown after selection
  };

  const handleClick = () => {
    navigate("/"); // Navigates to the home screen
  };

  return (
    <div className="relative">
      <header className="flex justify-between mx-20 py-3 h-20">
        <img
          src={logo}
          alt="HabotLogo"
          className="cursor-pointer"
          onClick={handleClick}
        />
        <nav className="list-none flex items-center gap-5">
          <li className="flex gap-8">
            <Link to={"/FindSuppliers"} className="navLink">
              Find Suppliers
            </Link>
            <Link
              onClick={toggleDropdown}
              className="navLink flex items-center gap-1"
            >
              Find Service Tags <IoIosArrowDown />
            </Link>
            {/* {isOpen && (
              <ul className="">
                <li onClick={() => handleOptionClick("Option 1")}>Option 1</li>
                <li onClick={() => handleOptionClick("Option 2")}>Option 2</li>
                <li onClick={() => handleOptionClick("Option 3")}>Option 3</li>
              </ul>
            )} */}
          </li>
          <Link className="loginbtn hover:bg-green-300 hover:text-green-800">
            Log in/Sign up
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
