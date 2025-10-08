import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import downnloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import Charts from "./Charts";
const AppDetails = () => {
  const { data } = useLoaderData();
  const { id } = useParams();
  //   console.log(data);

  const filterID = data.find((eachData) => String(eachData.id) === id);
  const {
    companyName,
    description,
    image,
    size,
    ratingAvg,
    ratings,
    reviews,
    title,
    downloads,
  } = filterID;

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 items-center md:px-20 text-[20px]">
        <div className="mt-6 md:mt-20">
          <img className="w-50 md:w-80 rounded-2xl" src={image} alt="" />
        </div>
        <div className="md:mt-20">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mb-3 opacity-70">
            Developed by{" "}
            <span className="text-purple-600 opacity-100">{companyName}</span>
          </p>
          <div className="border-t-2 border-gray-400 "></div>

          <div className="flex flex-col md:flex-row items-center mt-6 gap-10 md:gap-20 justify-center">
            <div className=" space-y-4">
              <img src={downnloadImg} alt="" />
              <p>Downlaods</p>
              <h1 className="text-4xl font-bold">{downloads / 100000}M</h1>
            </div>
            <div className=" space-y-4">
              <img src={ratingImg} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-4xl font-bold">{ratingAvg}</h1>
            </div>
            <div className=" space-y-4">
              <img src={reviewImg} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-4xl font-bold">{reviews / 1000}K</h1>
            </div>
          </div>
          <button className="bg-green-400 text-white px-4 rounded-2xl p-3 mt-2">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <div className="border-t-2 mt-10 w-10/11 mx-auto border-gray-300 "></div>
      <div className="px-15 mt-10 font-bold text-2xl">
        <h1>Ratings</h1>
      </div>
      <div>
        <Charts ratings={ratings}></Charts>
      </div>
      <div className="border-t-2 mt-10 md:w-10/11 mx-auto border-gray-300 "></div>

      <div className="mt-10 px-2 md:px-10">
        <h1 className="text-2xl font-bold">Description</h1>
        <p className="mt-7">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
