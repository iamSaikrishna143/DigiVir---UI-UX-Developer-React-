import React from "react";
import "./Home.css";
import Suitcase from "../assets/images/suitcase.svg";
import { PiMapPinFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import HabotSection from "./HabotSection";
import YoutubePlayer from "./YoutubePlayer";
import VerifyItem from "./VerifyItem";
import WorkScreen from "./WorkScreen";

const Home = () => {
  return (
    <>
      <div className="sectionBody">
        <div className="subPart">
          {/* First Section Start */}
          <div className="flex flex-col items-center mb-5">
            <p className="Heading">Are You a Supplier?</p>
            <p className="backTitle">Explore Matching Opportunities.</p>
          </div>
          <div className="flex gap-6 flex-col">
            <div className="flex gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your required service here"
                  className="px-12 w-96 h-14 cross"
                />
                <img src={Suitcase} alt="Suitcase" className="message" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your required service here"
                  className="px-12 w-96 h-14 cross"
                />
                {/* <img src={Suitcase} alt="Suitcase" className="message"/> */}
                <PiMapPinFill className="map" />
              </div>

              <button className="bg-green-700 searchBtn text-white font-semibold">
                Search
              </button>
            </div>
            <p className="labelTxt">
              Are you a buyer?{" "}
              <Link className="lineText">
                Click here if you are looking to post a requirements
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      {/* First Section End */}
      <HabotSection />
      <YoutubePlayer />
      <VerifyItem />
      <WorkScreen />
    </>
  );
};

export default Home;
