import React from "react";
import logo from "../../assets/images/footerlogo.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
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
            <div className="flex flex-col items-center gap-5">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h4>Terms</h4>
              <ul>
                <li>
                  <Link>Data privacy</Link>
                </li>
                <li>
                  <Link>Terms</Link>
                </li>
                <li>
                  <Link>Accessibility</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h4>Related</h4>
              <ul>
                <li>
                  <Link>Find Buyer</Link>
                </li>
                <li>
                  <Link>Feedback</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="">
            <li>
              <Link>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link>
                <BsTwitterX />
              </Link>
            </li>
            <li>
              <Link>
                <CiFacebook />
              </Link>
            </li>
            <li>
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
