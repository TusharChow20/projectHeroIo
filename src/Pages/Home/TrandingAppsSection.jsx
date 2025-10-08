import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { Link } from "react-router-dom";
const TrandingAppsSection = ({ data }) => {
  //   console.log(data);

  const { id, image, title, downloads, ratingAvg } = data;

  return (
    <Link to={`/apps/${id}`}>
      <div className="card bg-base-100 shadow-2xl rounded-xl">
        <figure>
          <img className="p-4 rounded-3xl" src={image} alt="Brand Photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-action flex justify-between">
            <button className="btn border-0 rounded-xl ">
              <img className="w-3 h-3" src={downloadImg} alt="" />{" "}
              {downloads / 100000}M
            </button>
            <button className="btn border-0 rounded-xl">
              <img className="w-3 h-3" src={ratingImg} alt="" />
              {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrandingAppsSection;
