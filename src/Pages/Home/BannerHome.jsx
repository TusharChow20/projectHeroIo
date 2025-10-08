import React from "react";
import plastoreImg from "../../assets/newPlaystoreIcon.png";
import appstoreImage from "../../assets/app-store-og-removebg-preview.png";
const BannerHome = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl md:text-7xl ">
        <br /> <br />
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
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-7">
        <button className="btn border-1 border-amber-50 text-[18px] p-4">
          <img className="h-8 w-10" src={plastoreImg} alt="" />
          Google Play
        </button>
        <button className="btn border-1 border-amber-50 text-[18px]">
          <img className="h-10 w-15" src={appstoreImage} alt="" />
          App Store
        </button>
      </div>
    </div>
  );
};

export default BannerHome;
