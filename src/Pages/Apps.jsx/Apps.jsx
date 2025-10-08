import React from "react";
import { useLoaderData } from "react-router-dom";
import TrandingAppsSection from "../Home/TrandingAppsSection";

const Apps = () => {
  const allData = useLoaderData();
  return (
    <div>
      <h1 className=" text-4xl font-bold text-center">
        <br /> <br />
        Our All Applications
      </h1>
      <p className="mt-5 mb-8 opacity-75 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center">
        <div>
          <h1>Apps Found</h1>
        </div>
        <div>
          <label className="input text-2xl bg-white rounded-2xl p-1">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="search Apps" />
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allData?.data?.map((data) => (
          <TrandingAppsSection key={data.id} data={data}></TrandingAppsSection>
        ))}
      </div>
    </div>
  );
};

export default Apps;
