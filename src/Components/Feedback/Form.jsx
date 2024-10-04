import { useState } from "react";
import Ripples from "react-ripples";
import happyDark from "../../../src/assets/icons/happy-svgrepo-com.svg";
import veryHappyDark from "../../../src/assets/icons/veryHappy.svg";
import sadDark from "../../../src/assets/icons/sad.svg";

import happyLight from "../../../src/assets/icons/happy-light.svg";
import veryHappyLight from "../../../src/assets/icons/very-happy-light.svg";
import sadLight from "../../../src/assets/icons/sad-light.svg";
import { Toaster, toast } from "sonner";
import useAxiosBaseUrl from "./../../hooks/axiosBaseUrl";


const Form = () => {
  const [satisfaction, setSatisfaction] = useState("");

  const handleSad = () => {
    setSatisfaction("Sad");
  };

  const handleHappy = () => {
    setSatisfaction("Happy");
  };

  const handleVeryHappy = () => {
    setSatisfaction("Very Happy");
  };

  const axiosBaseUrl = useAxiosBaseUrl();


  const handleSubmitFeedback = (e) => {
    e.preventDefault();

    const reviewDetails = {
      name: e.target.name.value,
      profession: e.target.profession.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    axiosBaseUrl
      .post("/feedback", reviewDetails)
      .then((response) => {
        if (response.data) {
          const promise = new Promise((resolve) =>
            setTimeout(() => resolve({}), 2000)
          );
          toast.promise(promise, {
            loading: "Loading...",
            success: () => {
              return "Thanks for your valuable feedback!";
            },
            error: "Error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(reviewDetails );
  };

  return (
    <form onSubmit={handleSubmitFeedback} className="mt-6">
      {/* Satisfaction level emoji */}
      <div className="flex items-center justify-center gap-7">
        {/* Sad */}
        <div className="group relative flex h-10 w-max cursor-pointer justify-center">
          <img
            onClick={handleSad}
            className="cursor-pointer w-10"
            src={satisfaction === "Sad" ? sadLight : sadDark}
            alt="Sad"
          />
          <div className="rounded absolute -top-12 cursor-pointer opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100 bg-gradient-to-br from-blue-500 to-indigo-600">
            <p className="text-xs px-3 py-2 text-white text-nowrap">
              Not Happy
            </p>
            <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-blue-600"></span>
          </div>
        </div>

        {/* Happy */}
        <div className="group relative flex h-10 w-max cursor-pointer justify-center">
          <img
            onClick={handleHappy}
            className="cursor-pointer w-[37px]"
            src={satisfaction === "Happy" ? happyLight : happyDark}
            alt="Happy"
          />
          <div className="rounded absolute -top-12 cursor-pointer opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100 bg-gradient-to-br from-blue-500 to-indigo-600">
            <p className="text-xs px-3 py-2 text-white">Happy</p>
            <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-blue-600"></span>
          </div>
        </div>

        {/* Very Happy */}
        <div className="group relative flex h-10 w-max cursor-pointer justify-center">
          <img
            onClick={handleVeryHappy}
            className="cursor-pointer w-10"
            src={satisfaction === "Very Happy" ? veryHappyLight : veryHappyDark}
            alt="Very Happy"
          />
          <div className="rounded absolute -top-12 cursor-pointer opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100 bg-gradient-to-br from-blue-500 to-indigo-600">
            <p className="text-xs px-3 py-2 text-white text-nowrap">
              Very Happy
            </p>
            <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-blue-600"></span>
          </div>
        </div>
      </div>

      {/* Form (input fields) */}
      <div className="flex flex-col md:flex-row gap-5 mt-6">
        <input
          name="name"
          placeholder="Name"
          type="text"
          className="outline-none bg-[#282D45] border border-[#282D45] rounded-md py-[10px] px-5 w-full text-white focus:border-[0.2px] focus:border-blue-500 transition duration-300"
        />
        <input
          name="profession"
          placeholder="Profession"
          type="text"
          className="outline-none bg-[#282D45] border border-[#282D45] rounded-md py-[10px] px-5 w-full text-white focus:border-[0.2px] focus:border-blue-500 transition duration-300"
        />
      </div>

      <input
        name="email"
        placeholder="Email"
        type="text"
        className="outline-none bg-[#282D45] border border-[#282D45] rounded-md py-[10px] px-5 w-full text-white focus:border-[0.2px] focus:border-blue-500 transition duration-300 mt-4"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Feedback"
        className="outline-none bg-[#282D45] border border-[#282D45] rounded-md py-[10px] px-5 w-full text-white focus:border-[0.2px] focus:border-blue-500 transition duration-300 mt-4"
      ></textarea>

      <Ripples className="w-[250px] mt-2" during={1500}>
        <button className="bg-btn-bg px-4 py-3 text-bodytext rounded font-medium w-[250px]">
          Submit Now
        </button>
      </Ripples>

      <Toaster position="top-center" />
    </form>
  );
};

export default Form;
