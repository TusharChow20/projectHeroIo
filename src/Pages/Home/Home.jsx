import React from "react";
import BannerHome from "./BannerHome";
import HeroSection from "./HeroSection";
import { useLoaderData } from "react-router-dom";
import TrandingAppsSection from "./TrandingAppsSection";

const Home = () => {
  const allData = useLoaderData();

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
            {allData.data.map((data) => (
              <TrandingAppsSection
                key={data.id}
                data={data}
              ></TrandingAppsSection>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
