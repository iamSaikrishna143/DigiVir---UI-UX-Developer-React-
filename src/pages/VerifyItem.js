import React from "react";
import { Link } from "react-router-dom";

const VerifyItem = () => {
  return (
    <div className="w-full customStyle flex justify-center items-center">
      <div className=" w-9/12 flex justify-between items-center">
        <p className="textStyle">
          Let Suppliers{" "}
          <span className="relative">
            Find You <span className="underLine"></span>
          </span>
        </p>
        <Link className="btnVerified">Get Verified</Link>
      </div>
    </div>
  );
};

export default VerifyItem;
