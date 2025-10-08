import React from "react";
import heroPng from "../../assets/hero.png";
const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <img src={heroPng} alt="" />
      </div>
      <div className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-white py-10 md:py-15 text-center p-3">
        <h1 className="flex flex-col md:flex-row justify-center text-2xl md:text-4xl font-bold">
          Trusted By Millions, Build For You
        </h1>
        <div className="flex flex-col md:flex-row justify-around items-center xl:px-100 mt-10 gap-10 border-t-1 md:border-none">
          <div className="space-y-3">
            <p className="opacity-70">Total Downloads</p>
            <p className="text-5xl font-bold">29.6M</p>
            <p className="opacity-70">21% More Than Last Month</p>
          </div>
          <div className="space-y-3 border-t-1 md:border-none border-dashed">
            <p className="opacity-70">Total Reviews</p>
            <p className="text-5xl font-bold">906K</p>
            <p className="opacity-70">46% More Than Last Month</p>
          </div>
          <div className="space-y-3 border-t-1 md:border-none border-dashed">
            <p className="opacity-70">Active apps</p>
            <p className="text-5xl font-bold">132+</p>
            <p className="opacity-70">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
