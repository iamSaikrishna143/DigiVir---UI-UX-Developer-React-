import React from "react";
import logo from "../../assets/images/footerlogo.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerSec">
      <div className="flex items-center justify-evenly">
        <div className="flex items-center heightBrder">
          <div>
            <img src={logo} alt="HabotLogo" />
            <p className="copyText"> &#169; R Singhania</p>
          </div>
          <div className="flex justify-evenly gap-20">
            <div className="flex flex-col items-start gap-5">
              <h4 className="navHeader">Company</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link className="navItem">About</Link>
                </li>
                <li>
                  <Link className="navItem">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h4 className="navHeader">Terms</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link className="navItem">Data privacy</Link>
                </li>
                <li>
                  <Link className="navItem">Terms</Link>
                </li>
                <li>
                  <Link className="navItem">Accessibility</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h4 className="navHeader">Related</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link className="navItem">Find Buyer</Link>
                </li>
                <li>
                  <Link className="navItem">Feedback</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex gap-3">
            <li className="iconStyle">
              <Link>
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="iconStyle">
              <Link>
                <BsTwitterX />
              </Link>
            </li>
            <li className="iconStyle">
              <Link>
                <FaFacebookF />
              </Link>
            </li>
            <li className="iconStyle">
              <Link>
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
