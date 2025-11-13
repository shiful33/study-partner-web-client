import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGraduationCap } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import AuthContext from "../Context/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logout successful!", {
          position: "top-right",
          autoClose: 3000,
        });

        navigate("/");
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message);
      });
  };

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
            `text-shadow-light hover:text-base-100 font-semibold text-[17px] nav-link-underline ${
              isActive ? "text-white active" : "text-yellow-400"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/findPartners"
          className={({ isActive }) =>
            `text-shadow-light hover:text-base-100 font-semibold text-[17px] nav-link-underline ${
              isActive ? "text-white active" : "text-yellow-400"
            }`
          }
        >
          Find Partners
        </NavLink>
      </li>

      {/* Private Routs */}
      {user && (
        <>
          <li>
            <NavLink
              to="/createPartnerProfile"
              className={({ isActive }) =>
                `text-shadow-light hover:text-base-100 font-semibold text-[17px] nav-link-underline ${
                  isActive ? "text-white active" : "text-yellow-400"
                }`
              }
            >
              Create Partner Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/myConnection"
              className={({ isActive }) =>
                `text-shadow-light hover:text-base-100 font-semibold text-[17px] nav-link-underline ${
                  isActive ? "text-white active" : "text-yellow-400"
                }`
              }
            >
              My Connection
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const defaultBgColor = "bg-[#001F46]";

  const navbarClasses = `
    navbar
    transition-all duration-300 ease-in-out
    ${scrolled ? "bg-transparent shadow" : `${defaultBgColor} `}
    `;

  return (
    <div className="sticky top-0 z-50">
      <div className={navbarClasses}>
        <div className="navbar-start lg:pl-[40px]">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="mr-4 bg-gray-800 btn lg:hidden"
            ></div>
            <ul
              tabIndex="-1"
              className="p-2 mt-3 bg-white shadow menu menu-sm dropdown-content rounded-box z-1 w-52"
            >
              {links}
            </ul>
          </div>
          <span className="flex logo-text items-center gap-2 text-yellow-400 text-[22px] lg:text-[30px]  text-shadow-light">
            <FaGraduationCap className="text-[45px] lg:text-[70px] light:text dark:text text-shadow-light" />
            STUDYmate
          </span>
          <FaPenClip className="text-yellow-400 text-[20px] ml-2 mt-[-25px]" />
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{links}</ul>
        </div>
        {/* User Image show with login */}
        <div className="flex gap-4 navbar-end lg:pr-[40px]">
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt={user.displayName || "User Profile"}
                      src={
                        user.photoURL ||
                        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="p-2 mt-3 text-left shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <p className="font-bold">{user.displayName || "User"}</p>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="text-[15px] font-semibold text-[#001F46] tracking-[.05em]"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="px-5 py-2 font-semibold text-[#001F46] hover:text-yellow-400 text-[15px] text-left bg-transparent rounded cursor-pointer btn bg-outline text-shadow-light"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 font-semibold text-white bg-yellow-400 rounded cursor-pointer btn-outline text-shadow-light"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
