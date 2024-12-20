// React libraries
import React from "react";

// Reat Router dom libraries
import { Link } from "react-router-dom";

// React-icon libraries
import { CgArrowLongRight } from "react-icons/cg";

const HabotSection = () => {
  return (
    <>
      <div className="flex w-full justify-center my-16 ">
        <div className="flex w-10/12 justify-between items-center gap-8 hobotBody">
          <div className="w-5/12 flex flex-col gap-5 hobotsub">
            <p className="boldtext">Ready to dive into HABOT?</p>
            <p className="SimpleText">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <Link className="btnSignup">
              Sign up Today ! <CgArrowLongRight className="ml-3" />
            </Link>
          </div>
          <div className="w-6/12 flex justify-center items-center hobotsub">
            <div className="flex flex-wrap gap-3">
              <Link className="borderBox hover:bg-amber-600">Abhu Dhabi</Link>
              <Link className="borderBox hover:bg-amber-600">Dubai</Link>
              <Link className="borderBox hover:bg-amber-600">
                Sharjah & Ajman
              </Link>
              <Link className="borderBox hover:bg-amber-600">Fujairah</Link>
              <Link className="borderBox hover:bg-amber-600">
                Ras Al Khaimah
              </Link>
              <Link className="borderBox hover:bg-amber-600">
                Umm Al Quwain
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HabotSection;
