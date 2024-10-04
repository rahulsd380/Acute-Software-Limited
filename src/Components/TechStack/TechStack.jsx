import Marquee from "react-fast-marquee";
import react from "../../../src/assets/images/Tech Stack/react.png";
import css from "../../../src/assets/images/Tech Stack/css.png";
import github from "../../../src/assets/images/Tech Stack/github.png";
import js from "../../../src/assets/images/Tech Stack/js.png";
import mongodb from "../../../src/assets/images/Tech Stack/mongodb.png";
import nodejs from "../../../src/assets/images/Tech Stack/nodejs.png";
import tailwind from "../../../src/assets/images/Tech Stack/tailwind.png";
import ts from "../../../src/assets/images/Tech Stack/ts.png";
import nextjs from "../../../src/assets/images/Tech Stack/nextjs.png";
import express from "../../../src/assets/images/Tech Stack/express.png";

const TechStack = () => {
    const techStacks = [react, nextjs, ts, js, express, nodejs, css, tailwind, mongodb, github]
    return (
        <div className="font-Outfit mt-20 bg-slate-600 bg-opacity-30 rounded-md px-4 py-8">
            <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-[450px]">
            <h1 className="text-bodytext text-2xl font-bold text-center md:text-start">Our Tech Toolbox</h1>
            <p className="text-gray-400 font-normal text-sm mt-2 text-center md:text-start">Utilizing React, Next.js, Node, Express, and MongoDB to create innovative and robust solutions.</p>
            </div>

            <Marquee autoFill={true} pauseOnHover={true} speed={30}>
   {
    techStacks.map((techStack, id) => 
        <img className="w-20 mr-24" key={id} src={techStack} alt="" />
    )
   }
  </Marquee>
            </div>
        </div>
    );
};

export default TechStack;