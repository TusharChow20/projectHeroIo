import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1e1e2f] via-[#2a1a40] to-[#1e1e2f] text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <svg
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-purple-400"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>
            <h2 className="text-xl font-semibold text-white tracking-wide">
              HERO.IO
            </h2>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            Providing next-gen app solutions since{" "}
            <span className="text-purple-400 font-semibold">2002</span>. We turn
            ideas into digital experiences that inspire.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-purple-500 after:mt-1">
            Services
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Advertisement
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-purple-500 after:mt-1">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Press Kit
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-purple-500 after:mt-1">
            Legal
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm opacity-75">
        © {new Date().getFullYear()} HERO.IO — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
