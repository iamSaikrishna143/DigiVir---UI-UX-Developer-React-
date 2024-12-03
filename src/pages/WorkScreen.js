// React Libraries
import React from "react";

// Images
import logo1 from "../assets/images/WorkIcon/logo1.png";
import logo2 from "../assets/images/WorkIcon/logo2.png";
import logo3 from "../assets/images/WorkIcon/logo3.png";
import logo4 from "../assets/images/WorkIcon/logo4.png";
import logo5 from "../assets/images/WorkIcon/logo5.png";
import logo6 from "../assets/images/WorkIcon/logo6.png";

const WorkScreen = () => {
  return (
    <div className="flex w-full justify-center mb-16">
      <div className="flex w-10/12 justify-center flex-col items-center gap-8">
        <p className="workText">How it works?</p>
        <p className="lightText">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>

        <div className="w-full flex flex-wrap">
          <div className="w-4/12 colorBorder">
            <img src={logo1} alt="" width={"50px"} />
            <p className="textBox">Select Your Role and Sign Up</p>
          </div>
          <div className="w-4/12 EmpBorder">
            <img src={logo2} alt="" width={"50px"} />
            <p className="textBox">Buyers Post Your Requirements</p>
          </div>
          <div className="w-4/12 colorBorder resig2">
            <img src={logo3} alt="" width={"50px"} />
            <p className="textBox"> Review, Select, and Contact the Best Suppliers</p>
          </div>
          <div className="w-4/12 EmpBorder resing">
            <img src={logo4} alt="" width={"50px"} />
            <p className="textBox">
              {" "}
              Suppliers Complete your profile and get notified for opportunities
            </p>
          </div>
          <div className="w-4/12 colorBorder">
            <img src={logo5} alt="" width={"50px"} />
            <p className="textBox">Contact to Buyers and Share your Quote for the service</p>
          </div>
          <div className="w-4/12 EmpBorder">
            <img src={logo6} alt="" width={"50px"} />
            <p className="textBox">
              Both the Parties can Connect and Make Business Leave a Feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkScreen;
