import React from "react";
import NavBar from "../Component/NavBar/NavBar";
// import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayOut = () => {
  return (
    <div>
      <NavBar></NavBar>

      <main className="min-h-[calc(100vh-275px)] bg-[#6273821A]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayOut;
