import React from "react";
import { Link } from "react-router-dom";
// import { ClimbingBoxLoader } from "react-spinners";
import appnotfoundImg from "../../assets/App-Error.png";

const SearchHandle = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img
        // className=" w-10 md:w-30 lg:w-40"
        src={appnotfoundImg}
        alt="App Not Found"
      />
      <h1 className="md:text-4xl font-bold text-gray-500">No Apps Found</h1>
      <Link to="/apps" reloadDocument>
        <button className="md:mt-20 btn border-0 rounded-2xl bg-blue-400 text-white">
          Show All Apps
        </button>
      </Link>
    </div>
  );
};

export default SearchHandle;
