// React libraries
import React, { useState } from "react";

// React Router dom libraries
import { Link, useNavigate } from "react-router-dom";

// App's Constant
import "./Header.css";

// Images
import logo from "../../assets/images/logo.svg";

// React-Icon libraries
import { IoIosArrowDown } from "react-icons/io";

// Humburger Feature for Header
import { Hamburger } from "../../features/Humburger";

const Header = () => {
  // using navigation
  const navigate = useNavigate();

  // using State Hook
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // Showing Navbar Icon on Small Screen
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // working Toggle Functionality
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
      <header className="flex justify-between mx-20 py-3 h-20 respon">
        <img
          src={logo}
          alt="HabotLogo"
          className="cursor-pointer"
          onClick={handleClick}
        />
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <nav
          className={`nav-elements  ${
            showNavbar && "active"
          } list-none flex items-center gap-5`}
        >
          <li className="flex gap-8 relative">
            <Link to={"/FindSuppliers"} className="navLink">
              Find Suppliers
            </Link>
            <Link
              onClick={toggleDropdown}
              className="navLink flex items-center gap-1"
            >
              Find Service Tags <IoIosArrowDown />
            </Link>
            {isOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleOptionClick("Option 1")}>Option 1</li>
                <li onClick={() => handleOptionClick("Option 2")}>Option 2</li>
                <li onClick={() => handleOptionClick("Option 3")}>Option 3</li>
              </ul>
            )}
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
