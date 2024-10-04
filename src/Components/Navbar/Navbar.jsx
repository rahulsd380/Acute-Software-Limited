import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../public/logo.png";
import Ripples from "react-ripples";
import HamburgerMenu from "./HamburgerMenu";
import Feedback from "../Feedback/Feedback";

const Navbar = () => {
  const navigate = useNavigate();
  const navlinks = [
    {
      label: "Home",
      path: "",
    },
    {
      label: "Services",
      action: () => {
        navigate("/");
        const aboutMe = document.getElementById("services");
        aboutMe?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Portfolio",
      action: () => {
        navigate("/");
        const aboutMe = document.getElementById("portfolio");
        aboutMe?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Contact Us",
      path: "contact-us",
    },
    {
      label: "FAQ",
      path: "faq",
    },
  ];

  return (
    <div className="font-Roboto flex justify-between items-center pt-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-8" src={logo} alt="" />
        <h1 className="font-bold text-bodytext text-xl sm:text-2xl">
          <span className="bg-gradient-to-r from-indigo-300 to-blue-500  text-transparent bg-clip-text">
            Acute
          </span>{" "}
          Software Solution
        </h1>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-8">
          {navlinks.map((link, id) => (
            <NavLink
              key={id}
              onClick={link.action}
              className="text-gray-200 hover:text-textHover transition duration-400 group flex flex-col"
            >
              {link.label}{" "}
              <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full"></span>
            </NavLink>
          ))}

          <Feedback />
        </div>

        <Ripples className="" during={1500}>
          <Link className="bg-btn-bg px-4 py-3 text-white rounded">
            Contact Now
          </Link>
        </Ripples>
      </div>

      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
