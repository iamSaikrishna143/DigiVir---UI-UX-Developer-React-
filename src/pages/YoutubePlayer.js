import React, { useState } from "react";
import { Link } from "react-router-dom";
// import YouTube from "react-youtube";
import ReactPlayer from "react-player";

const YoutubePlayer = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container flex justify-center mb-16">
      <div className="flex w-10/12 thirdPart px-9 py-16">
        <div className="w-8/12 flex flex-col gap-5">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=IZLp-TZyDkQ"
            playing={false} // Set this to `true` to auto-play
            controls={true} // Show video controls (play/pause, volume, etc.)
            width="30rem" // Set the width of the video player
            height="260px" // Set the height of the video player
          />
        </div>

        <div className="w-5/12 flex justify-center items-center">
          <div>
            <button onClick={() => switchTab("tab1")}>Tab 1</button>
            <button onClick={() => switchTab("tab2")}>Tab 2</button>
          </div>

          <div>
            {activeTab === "tab1" && <div>Content for Tab 1</div>}
            {activeTab === "tab2" && <div>Content for Tab 2</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;
