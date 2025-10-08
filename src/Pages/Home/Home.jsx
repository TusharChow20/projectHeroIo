import React from "react";
import BannerHome from "./BannerHome";
import HeroSection from "./HeroSection";
import { Link, useLoaderData } from "react-router-dom";
import TrandingAppsSection from "./TrandingAppsSection";

const Home = () => {
  const allData = useLoaderData();
  // const count = 0;
  return (
    <div className="">
      <BannerHome></BannerHome>

      <HeroSection></HeroSection>
      {
        <div className="px-10 mt-15 text-center mb-10">
          <h1 className=" text-4xl font-bold">Trending Apps</h1>
          <p className="mt-5 mb-8 opacity-75">
            Explore All Trending Apps on the Market developed by us
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {allData?.data?.slice(0, 8).map((data) => (
              <TrandingAppsSection
                key={data.id}
                data={data}
              ></TrandingAppsSection>
            ))}
          </div>
          <Link to={"/apps"}>
            <button className="btn border-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-10 mb-20">
              Show All
            </button>
          </Link>
        </div>
      }
    </div>
  );
};

export default Home;
