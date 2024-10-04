import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import rightArrow from "../../../src/assets/icons/right-arrow.svg";
import home from "../../../src/assets/icons/home.svg";
import faq from "../../../src/assets/icons/faq.svg";
import message from "../../../src/assets/icons/message.svg";
import portfolio from "../../../src/assets/icons/portfolio.svg";
import services from "../../../src/assets/icons/services.svg";

const HamburgerMenu = () => {
  const [user, setUser] = useState(false);
  const navlinks = [
    {
      label: "Home",
      path: "",
      icon: home,
    },
    {
      label: "Service",
      path: "service",
      icon: services,
    },
    {
      label: "Portfolio",
      path: "portfolio",
      icon: portfolio,
    },
    {
      label: "Contact Us",
      path: "contact-us",
      icon: message,
    },
    {
      label: "FAQ",
      path: "faq",
      icon: faq,
    },
  ];
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const closestDropdown = event.target.closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);
  
  return (
    <div className="relative hamburgerMenu block lg:hidden">
      <AiOutlineMenu
        onClick={toggleHamburgerMenu}
        className="cursor-pointer text-[26px] text-white hover:text-blue-500 transition duration-300"
      />

      <div
        className={`overflow-y-scroll fixed inset-y-0 right-0 z-50 bg-gray-800 w-72 md:w-80 h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isHamburgerOpen && (
          <div className="">
            <div className="flex justify-between items-center p-[9px]">
              {/* Logo */}
              <Link to={"/"} className="flex gap-1 items-center">
                <img className="w-8" src={logo} alt="" />
                <h1 className=" font-Roboto text-gray-100">
                  Acute Software Solution
                </h1>
              </Link>

              {/* Hamburger menu close button */}
              <img onClick={toggleHamburgerMenu} src={rightArrow} alt="" className="cursor-pointer w-5" />
             
            </div>

            <div className="w-full h-[1px] bg-gray-500"></div>

            {/* Theme toggle and logout */}
            <div className="flex flex-col items-start gap-9 p-4 mt-5">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  to={`${link?.path}`}
                  className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2"
                >
                  <img className="w-5" src={link?.icon} alt="" />
                  {link?.label}
                </Link>
              ))}

              {/* Logout button */}
              {user === false ? (
                <button className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2 transform hover:-translate-y-0.5">
                  <CiLogout />
                  Logout
                </button>
              ) : (
                <button className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2 transform hover:-translate-y-0.5">
                  <IoLogOutOutline />
                  Login
                </button>
              )}
            </div>

            {/* <div className="p-3">
              <ThemeToggleBtn />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
