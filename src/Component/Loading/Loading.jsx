import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-275px)]">
      <h1 className="text-5xl flex">
        L
        <span className="animate-spin">
          <img className="w-10" src="/logo.png" alt="" />
        </span>
        oading
      </h1>
    </div>
  );
};

export default Loading;
