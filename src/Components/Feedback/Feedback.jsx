
import { useState } from "react";
import feedback from "../../../src/assets/icons/feedback.svg";
import cross from "../../../src/assets/icons/cross.svg";

import Form from "./Form";

export const Feedback = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="font-Outfit">
      <button
        onClick={() => setOpenModal(true)}
        className="text-gray-200 hover:text-textHover transition duration-400 group flex flex-col"
      >
        Feedback
        <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full"></span>
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-[95%] md:w-[80%] xl:w-2/5 2xl:w-1/3 rounded-lg bg-blue-900 p-6 text-center drop-shadow-2xl overflow-y-auto ${
            openModal
              ? "opacity-1 translate-y-0 duration-300 overflow-y-auto"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex justify-between items-center border-b border-gray-400 pb-3">
            <h1 className="text-bodytext font-medium text-center text-balance capitalize flex items-center gap-3">
              {" "}
              <img className="w-5" src={feedback} alt="" /> Feedback
            </h1>

            <img
              onClick={() => setOpenModal(false)}
              className="w-5 cursor-pointer"
              src={cross}
              alt=""
            />
          </div>

          {/* <img className='cursor-pointer w-10' src={happy} alt="" />
            <img className='cursor-pointer w-10' src={veryHappy} alt="" />
            <img className='cursor-pointer w-10' src={sad} alt="" /> */}

          <div className="mt-6">
            <h1 className="text-bodytext font-bold text-2xl text-center text-balance">
              How is your experience?
            </h1>
            <p className="text-bodytext text-center font-normal text-sm mt-2">
              Your input is valuable in helping us better understand your needs
              and tailor our service accordingly.
            </p>

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

