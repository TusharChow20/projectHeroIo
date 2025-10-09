import React from "react";
import NavBar from "../Component/NavBar/NavBar";
// import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../Component/Loading/Loading";

const RootLayOut = () => {
  const navigation = useNavigation();
  console.log(navigation.state);

  return (
    <div>
      <NavBar></NavBar>

      {navigation?.state === "loading" ? (
        <Loading></Loading>
      ) : (
        <main className="min-h-[calc(100vh-275px)] bg-[#6273821A]">
          <Outlet></Outlet>
        </main>
      )}
      <Footer></Footer>
    </div>
  );
};

export default RootLayOut;
