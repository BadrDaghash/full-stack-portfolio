import React from "react";
import home2 from "./../../assets/mobile.png";
import pc from "./../../assets/robotPc.png";
import laptop from "./../../assets/robotLaptop.png"; // will be CV 
import certificate from "./../../assets/about/certificate.png";
import { motion, useInView } from "framer-motion";
import "./about.css";
import html from "./../../assets/icons/icons8-html5.svg";
import css3 from "./../../assets/icons/icons8-css3.svg";
import js from "./../../assets/icons/icons8-javascript.svg";
import ts from "./../../assets/icons/icons8-typescript.svg";
import bootstrap from "./../../assets/icons/icons8-bootstrap.svg";
import tailwind from "./../../assets/icons/icons8-tailwindcss.svg";
import react from "./../../assets/icons/react-stroke-rounded.svg";
import nest from "./../../assets/icons8-nestjs (1).svg";
import aws from "./../../assets/icons/icons8-aws.svg";
import express from "./../../assets/icons/icons8-express-js (1).svg";
import redux from "./../../assets/icons/icons8-redux.svg";
import git from "./../../assets/icons/icons8-git.svg";
import graphql from "./../../assets/icons/icons8-graphql.svg";
import reactStroke from "./../../assets/icons/react-stroke-rounded.svg";
import sql from "./../../assets/icons/icons8-sql-50.png";
import noSql from "./../../assets/icons/icons8-nosql-32.png";
import mongodb from "./../../assets/icons/icons8-mongodb-24.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const ref3 = React.useRef(null);
  const isInView3 = useInView(ref3, { once: false, amount: 0.3 });

  const skillsData = [
    { type: "src", src: git, label: "Git" },
    { type: "src", src: aws, label: "AWS" },
    { type: "src", src: nest, label: "NestJS" },
    { type: "src", src: graphql, label: "GraphQL" },
    { type: "src", src: express, label: "Express.js" },
    { type: "src", src: mongodb, label: "MongoDB" },
    { type: "src", src: noSql, label: "NoSQL" },
    { type: "src", src: sql, label: "SQL" },
    { type: "src", src: reactStroke, label: "ReactJs" },
    { type: "src", src: redux, label: "Redux" },
    { type: "src", src: tailwind, label: "Tailwind CSS" },
    { type: "src", src: bootstrap, label: "Bootstrap" },
    { type: "src", src: ts, label: "TypeScript" },
    { type: "src", src: js, label: "JavaScript" },
    { type: "src", src: css3, label: "CSS3" },
    { type: "src", src: html, label: "HTML5" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 sm:py-0 relative">
      <motion.div
        ref={ref}
        className="w-[88%] grid grid-cols-6 px-8 pb-16 justify-center items-center text-center gap-20"
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 30,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        style={{ background: "var(--background-color)" }}
      >
        {/* Left Section */}
        <div className="col-span-6 xl:col-span-3 px-8 sm:px-12 sm:py-6 text-white relative text-start z-20">
          <h2 className="font-semibold uppercase text-2xl sm:text-[36px] 2xl:pb-2 sm:pb-1">
            Hey there,
            <br /> I'm Badr Daghash!
          </h2>
          <div className="mb-6">
            <h4 className="font-semibold text-xl md:text-2xl 2xl:text-3xl mb-2 text-indigo-800 animate-pulse duration-300">
              Full Stack Web Developer
            </h4>
            <p className="text-base md:text-xl 2xl:text-2xl font-medium block font-body ">
              I specialize in building dynamic, responsive, and scalable web
              applications using the{" "}
              <span className="text-indigo-800 animate-pulse font-bold">
                MERN
              </span>{" "}
              stack
            </p>
            <p className="text-base md:text-xl 2xl:text-2xl font-medium block font-body mt-4">
              Passionate about writing clean, maintainable code and solving
              complex challenges.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          className="col-span-6 xl:col-span-3 md:p-6 relative font-semibold text-4xl "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={home2}
            alt="Background"
            className="relative z-10 object-cover w-[80%] h-full rounded-lg mx-auto py-10"
          />
          <div
            className="absolute inset-0 flex flex-col items-center gap-1 z-20 w-40
           top-[29%] sm:top-[30.8%] md:top-[33%] xl:top-[30%] 2xl:top-[31%] 
           left-[39.2%] sm:left-[43.5%] md:left-[46%] lg:left-[41%] xl:left-[42.9%] 2xl:left-[45.5%]  
           h-40"
          >
            {/* LinkedIn Button */}
            <Link
              to="https://www.linkedin.com/in/badr-daghash-63971520a/"
              target="_blank"
              class="text-white bg-[#0A66C2] hover:bg-[#0A66C2]/80 focus:ring-1 focus:outline-none
               focus:ring-[#0A66C2]/50 font-medium rounded-lg  text-xs px-[14px] py-[8px] sm:text-xs  md:px-9 lg:px-[20px] sm:py-[9px] text-center 
               inline-flex items-center  me-2 mb-2"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.225.792 24 1.77 24h20.46C23.208 24 24 23.225 24 22.273V1.727C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.578a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.452 20.452h-3.556v-5.605c0-1.337-.026-3.061-1.865-3.061-1.867 0-2.152 1.46-2.152 2.963v5.703h-3.556V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.27 2.37 4.27 5.456v6.285z" />
              </svg>
              LinkedIn
            </Link>
            {/* Download CV Button */}
            <a
            download='Badr Daghash CV' href={laptop}
              class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-1 focus:outline-none
               focus:ring-[#24292F]/50 font-medium rounded-lg text-xs px-[10px] py-[8px] md:px-[32px] lg:px-[16px] sm:text-xs sm:px-5
                sm:py-2 text-center inline-flex items-center  me-2 mb-2"
            >
              Download CV
            </a>

            {/* Hire Me Button */}
            <Link to={'/#contact'}
              class="text-white bg-indigo-800 hover:bg-indigo-800/90 focus:ring-1 focus:outline-none
               focus:ring-[#009688]/50 font-medium rounded-lg text-xs px-[18px] py-1 md:px-[40px] lg:text-xs lg:px-[23px] sm:py-1.5 
               text-center inline-flex items-center  me-2 mb-2 "
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.003 5.884l3.664-1.197a1 1 0 011.215.45l1.516 2.733a1 1 0 01-.153 1.212l-2.1 2.1a11.037 11.037 0 005.292 5.292l2.1-2.1a1 1 0 011.212-.153l2.733 1.516a1 1 0 01.45 1.215l-1.197 3.664a1 1 0 01-.95.69C6.76 20 0 13.24 0 4.934a1 1 0 01.69-.95z"
                  clip-rule="evenodd"
                />
              </svg>
              Hire me
            </Link>
            {/* Github */}
            <Link
              to="https://github.com/BadrDaghash"
              target="_blank"
              class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-1 focus:outline-none focus:ring-[#24292F]/50
               font-medium rounded-lg text-xs px-[19px] py-[5px] sm:text-xs md:px-[41px] lg:px-[23px] sm:py-2 text-center inline-flex items-center  me-2 mb-2"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              Github
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative overflow-hidden w-[100%] h-40 mx-auto py-20 sm:py-0">
        <div className="absolute flex gap-6 animate-scroll">
          {skillsData.map((skill, index) => (
            <div
              key={`original-${index}`}
              className="flex flex-col items-center bg-[rgba(0,0,0,0.2)] bg-opacity-10 w-24 sm:w-36 md:w-36 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36"
            >
              {skill.type === "src" && (
                <img
                  src={skill.src}
                  className="w-10 sm:w-10 md:w-[40px] mt-2 sm:mt-3 md:mt-5"
                  alt={skill.label}
                />
              )}
              <span className="text-indigo-800 animate-pulse text-sm sm:text-lg font-heading  mt-2 sm:mt-3 md:mt-2  duration-200">
                {skill.label}
              </span>
            </div>
          ))}
          {skillsData.map((skill, index) => (
            <div
              key={`original-${index}`}
              className="flex flex-col items-center bg-[rgba(0,0,0,0.2)] bg-opacity-10 w-24 sm:w-36 md:w-36 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36"
            >
              {skill.type === "src" && (
                <img
                  src={skill.src}
                  className="w-10 sm:w-10 md:w-[40px] mt-2 sm:mt-3 md:mt-5"
                  alt={skill.label}
                />
              )}
              <span className="text-indigo-800 animate-pulse text-sm sm:text-lg font-heading  mt-2 sm:mt-3 md:mt-2  duration-200">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        ref={ref3}
        animate={{
          opacity: isInView3 ? 1 : 0,
          y: isInView3 ? 0 : 30,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="w-full grid grid-cols-12 px-8  justify-center items-center text-center  py-20"
      >
        {/* Left Section */}
        <div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 p-6 relative font-semibold text-4xl "
        >
          <div className="relative">
            <img
              src={pc}
              alt="Background"
              className="relative z-10 object-cover w-full min-h-[260px]  sm:w-full sm:h-full sm:rounded-[45px] mx-auto  "
            />
            <div className="absolute bg-black inset-0 opacity-45 w-full sm:w-full sm:h-full rounded-[45px] mx-auto z-10 "></div>
          </div>
          <div className="w-100 absolute top-16 left-[17%] sm:top-28 sm:left-[25%] md:top-[17.5%] md:left-[22%] lg:left-[25%] lg:top-28 2xl:left-[29%] z-20 text-white text-base justify-center items-center mx-auto">
            <span className="relative font-heading text-indigo-800 text-2xl sm:text-4xl md:text-2xl lg:text-4xl  mx-auto animate-pulse duration-500">
              I am a full-stack <br />
              web developer{" "}
            </span>
            <br />
            <div className=" w-[90%] mx-auto pt-1 text-sm ">
              <TypeAnimation
                sequence={[
                  "specializing in React",
                  1500,
                  "specializing in MERN stack",
                  1500,
                  "specializing in Node.js",
                  1500,
                  "specializing in MongoDB",
                  1500,
                  "specializing in Express",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block", fontSize: "16px" }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 w-full p-6 relative font-semibold text-4xl"
          id="experience"
        >
          <h1>Hello world</h1>
          <div className="route">
            <div class="card2-container text-base rounded-[10px] pt-10 lg:py-14 xl:pb-20">
              <div class="card2">
                <div class="front-content text-white ">
                  <p className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl ">
                    Graduated from Route IT Training Center <br />
                    <span className="text-sm sm:text-xl lg:text- ">
                      {" "}
                      Skilled in Building Scalable Web Applications
                    </span>{" "}
                  </p>{" "}
                </div>
                <div class="content">
                  {/* <p class="heading">Card Hover</p>
                  <p className="text-sm">
                    With a strong foundation in the MERN stack, I focus on
                    creating <br />
                    seamless user experiences and efficient back-end systems.{" "}
                    <br />
                    Recently completed a diploma in Full-Stack Development from
                    Router IT Center.
                  </p> */}
                  <img src={certificate} className="w-[80%] h-[80%]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/*   */}
    </div>
  );
}
