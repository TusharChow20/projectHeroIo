import React from "react";

const BannerHome = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-7xl ">
        We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          Productive
        </span>
        Apps
      </h1>
      <p className="text-[20px] mt-8 opacity-60">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex gap-4 items-center justify-center mt-7">
        <button className="btn border-1 border-amber-50 text-[18px]">
          Google Play
        </button>
        <button className="btn border-1 border-amber-50 text-[18px]">
          App Store
        </button>
      </div>
    </div>
  );
};

export default BannerHome;
