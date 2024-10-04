import { Link } from "react-router-dom";
import star from "../../../src/assets/icons/star.svg";
import star2 from "../../../src/assets/icons/star2.svg";
import Ripples from "react-ripples";

const Hero = () => {
  return (
    <div className="font-Outfit text-white font-bold mt-28 relative">
      <div className="relative">
        <div className="w-[300px] h-[303px] sm:w-[400px] sm:h-[304px] rounded-full bg-btn-bg bg-opacity-30 blur-[150px] absolute top-0 right-0 bottom-0 left-0 md:left-[200px] lg:left-[330px] xl:left-[490px]"></div>

        <div className="relative">
          <h1 className="text-center text-balance capitalize font-extrabold text-5xl lg:text-8xl leading-[60px] lg:leading-[103px] z-50">
            Bringing your dream into{" "}
            <span className="text-blue-500">online</span>
          </h1>
          <img
            className="w-16 sm:w-[110px] absolute -right-2 md:right-6 xl:right-32 top-0 opacity-45 animate-pulse"
            src={star}
            alt=""
          />
        </div>

        <p className="text-bodytext text-center font-normal text-xl max-w-[600px] mx-auto mt-7 lg:mt-12">
          We increase revenue and ensure sustainable long-term growth for your
          business through powerful Webflow websites.
        </p>

        <div className="flex gap-5 justify-center mt-12 relative">
          <Ripples className="" during={1500}>
            <Link className="bg-btn-bg px-8 py-3 text-bodytext rounded-md font-medium">
              Get Started
            </Link>
          </Ripples>

          {/* <Ripples className="" during={1500}>
            <Link className="border border-blue-500 px-4 py-3 text-bodytext rounded-md font-medium">
              Contact Us
            </Link>
          </Ripples> */}

          <img
            className="w-5 absolute right-0 md:right-40 lg:right-72 xl:right-[400px] bottom-0 opacity-30"
            src={star2}
            alt=""
          />
          <img
            className="w-5 absolute left-0 md:left-40 lg:left-64 xl:left-[300px] bottom-10 opacity-30"
            src={star2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
