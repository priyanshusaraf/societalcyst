import React from "react";
import banner from "./banner-img.png";
import "./Banner.css";
function Banner() {
  return (
    <div class="banner__container">
      <div className="banner text-white max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="banner__left">
          <div className="banner__heading text-5xl font-bold">Heading</div>
          <div className="text-lg mt-5">Some text here...</div>
          <div className="banner__buttonContainer mt-4">
            <button
              className="p-2 pl-7 pr-7 text-white rounded-md"
              style={{
                backgroundColor: "#2c3e50",
                border: "2px solid #2c3e50",
              }}
            >
              Button 1
            </button>
            <button className="banner__btnOutlined p-2 pl-7 pr-7 text-white rounded-md ml-3 bg-transparent">
              Button 2
            </button>
          </div>
        </div>
        <img src={banner} alt="" className="banner__image w-auto" />
      </div>
    </div>
  );
}

export default Banner;

// <img  class="w-4/5 my-2 mx-auto  src="Dog2.png" alt="">
