import React from "react";
import image from "../../assets/App-Error.png";
import { Link } from "react-router-dom";
const AppNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-408px)]">
      <img src={image} alt="" />
      <Link to={"/"}>
        <button className="btn bg-purple-500 border-0 mt-4 text-white p-4 text-xl">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default AppNotFound;
