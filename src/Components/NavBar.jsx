import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import NavLogo from "../assets/NavLogo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => 
                    `hover:text-base-100 font-semibold text-[17px] nav-link-underline 
                     ${isActive ? 'text-white active' : 'text-yellow-400'}`
                }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/findPartners"
          className={({ isActive }) => 
                    `hover:text-base-100 font-semibold text-[17px] nav-link-underline 
                     ${isActive ? 'text-white active' : 'text-yellow-400'}`
                }
        >
          Find Partner
        </NavLink>
      </li>
    </>
  );

  const defaultBgColor = "bg-[#001F46]";

  const navbarClasses = `
    navbar
    transition-all duration-300 ease-in-out
    ${scrolled ? "bg-transparent shadow-none" : `${defaultBgColor} `}
`;

  return (
    <div className="sticky top-0 z-50">
      <div className={navbarClasses}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              tabIndex="-1"
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost logo">
            <img
              src={NavLogo}
              alt="Study Partner Logo"
              className="w-auto h-10"
            />
            <span className="text-yellow-400">partners</span>
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="px-5 py-2 font-semibold text-white bg-yellow-400 rounded cursor-pointer btn-outline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
