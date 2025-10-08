import { Github } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm mt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/home"}>Home</Link>
              </li>

              <li>
                <Link to={"/apps"}>Apps</Link>
              </li>

              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            <img className="h-10 w-10" src={logoImg} alt="" />{" "}
            <span className="hidden md:flex">HERO.IO</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[20px]">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>

            <li>
              <Link to={"/apps"}>Apps</Link>
            </li>

            <li>
              <Link to={"https://github.com/TusharChow20"}>Installation</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link
            to={"https://github.com/TusharChow20"}
            className="btn  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-5 rounded-xl text-[20px]"
          >
            <FaGithub /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
