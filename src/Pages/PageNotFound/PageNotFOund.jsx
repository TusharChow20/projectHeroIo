import React from "react";
import error from "../../assets/error-404.png";
import { Link } from "react-router-dom";
const PageNotFOund = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-3/4 md:mt-40" src={error} alt="" />
      <h1 className="text-5xl font-bold mt-10">Oops, page not found!</h1>
      <p className="text-3xl opacity-70 mt-6">
        The page you are looking for is not available.
      </p>
      <Link to={"/"}>
        <button className="btn border-0 text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-5 rounded-xl p-6 ">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default PageNotFOund;
