// React Libraries
import React, { useState } from "react";
// React Player Libraries
import ReactPlayer from "react-player";

// Images
import checkIcon from "../assets/images/checked.png";

// App's Constant
import './Home.css'

const YoutubePlayer = () => {
  // React Hook
  const [activeTab, setActiveTab] = useState("buyer");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="w-full flex justify-center mb-16">
      <div className="flex w-10/12 justify-between thirdPart px-9 py-16">
        <div className="w-6/12 flex flex-col gap-5 tabPanel">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=IZLp-TZyDkQ"
            playing={false} // Set this to `true` to auto-play
            controls={true} // Show video controls (play/pause, volume, etc.)
            width="100%" // Set the width of the video player
            height="260px" // Set the height of the video player
            className="youtubevideo"
          />
        </div>
        <div className="w-4/12 flex justify-center items-center flex-col tabPanel">
          <div className="tab-header w-full">
            <button
              className={`tab-button ${activeTab === "buyer" ? "active" : ""}`}
              onClick={() => handleTabClick("buyer")}
            >
              Buyer
            </button>
            <button
              className={`tab-button ${
                activeTab === "supplier" ? "active" : ""
              }`}
              onClick={() => handleTabClick("supplier")}
            >
              Supplier
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "buyer" && (
              <div className="tab-content-section">
                <ul>
                  <li className="flex gap-2 items-start tabLine">
                    {" "}
                    <img src={checkIcon} className="mt-1 w-4" alt="" />
                    Post your requirements.
                  </li>
                  <li className="flex gap-2 items-start tabLine">
                    <img src={checkIcon} className="mt-1 w-4" alt="" /> Sit back
                    for multiple suppliers to contact you.
                  </li>
                  <li className="flex gap-2 items-start tabLine">
                    <img src={checkIcon} className="mt-1 w-4" alt="" /> Choose
                    among the suppliers based on the ratings and reviews.
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "supplier" && (
              <div className="tab-content-section">
                <ul>
                  <li className="flex gap-2 items-start tabLine">
                    <img src={checkIcon} className="mt-1 w-4" alt="" /> Post
                    your requirements.
                  </li>
                  <li className="flex gap-2 items-start tabLine">
                    <img src={checkIcon} className="mt-1 w-4" alt="" /> Sit back
                    for multiple suppliers to contact you.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;
