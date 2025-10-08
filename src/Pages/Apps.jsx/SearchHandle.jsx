import React from "react";
import { Link } from "react-router-dom";
// import { ClimbingBoxLoader } from "react-spinners";

const SearchHandle = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <h1 className="text-6xl font-bold text-gray-500">No Apps Found</h1>
      <Link to="/apps" reloadDocument>
        <button className="mt-30 btn border-0 rounded-2xl bg-blue-400 text-white">
          Show All Apps
        </button>
      </Link>
    </div>
  );
};

export default SearchHandle;
