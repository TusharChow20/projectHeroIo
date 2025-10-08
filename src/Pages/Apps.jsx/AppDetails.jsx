import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import downnloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
const AppDetails = () => {
  const { data } = useLoaderData();
  const { id } = useParams();
  const filterID = data.find((eachData) => String(eachData.id) === id);
  const {
    companyName,
    description,
    image,
    ratingAvg,
    ratings,
    review,
    title,
    downloads,
  } = filterID;

  return (
    <div className="flex">
      <div>
        <img className="w-50 rounded-2xl" src={image} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <p className="mb-3">Developed by {companyName}</p>
        <div className="border-t-2 border-gray-400 "></div>
      </div>
      <div>
        <div>
          <img src={downnloadImg} alt="" />
          <p>Downlaods</p>
          <h1>{downloads / 100000}M</h1>
        </div>
        <div>
          <img src={ratingImg} alt="" />
          <p>Average Ratings</p>
          <h1>{downloads / 100000}M</h1>
        </div>
        <div>
          <img src={reviewImg} alt="" />
          <p>Total Reviews</p>
          <h1>{downloads / 100000}M</h1>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
