import React from "react";
import { motion, useInView } from "framer-motion";

import "./project.css";
import sideRobot from "./../../assets/side.png";
import newEra from "./../../assets/projects/NewEra.png";
import asbtrackWaves from "./../../assets/projects/abstract.png";
import projectIntro from "./../../assets/projects/projectIntro.png";
import { Link, useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();
  
    const FrontEnd = () => {
      navigate("/projects/frontend"); // Navigate with hash
    };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const projects = [
    {
      title: "LinkedIn Application",
      material: "NodeJs Express NodeMailer Cloudinary",
      description: "LinkedIn application ......",
      src: newEra,
    },
    {
      title: "Another Project",
      material: "React Tailwind Vite",
      description: "Another cool project description ......",
      src: sideRobot,
    },
    {
      title: "Another Project",
      material: "React Tailwind Vite",
      description: "Another cool project description ......",
      src: sideRobot,
    },
  ];

  return (
    <motion.div
      className="w-full text-2xl text-blue-200 flex flex-col items-center justify-center gap-8  pb-72 lg:py-0"
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className=" w-full h-screen justify-center items-center relative grid  grid-cols-3 ">
        <div className="col-span-3 lg:col-span-1 flex justify-center items-center relative z-0">
          <Link to={'/projects/frontend'} className="button1">front-end Projects</Link>
        </div>

        <div className="col-span-3  lg:col-span-1 relative z-30">
          {" "}
          {/* 👈 z-30 to ensure it’s on top */}
          <div className="absolute bg-black inset-0 opacity-10 rounded-full z-50"></div>
          <img
            src={projectIntro}
            className="h-[80%] w-70 md:w-[60%] lg:w-full mx-auto rounded-full shadow-lg  animate-pulse-soft shadow-[#3830a34b] relative z-40"
            alt=""
          />
        </div>

        <div className="col-span-3 lg:col-span-1 flex justify-center items-center relative z-0">
          <Link to={'/projects/backend'} className="button1">Back-end Projects</Link>
        </div>
      </div>
    </motion.div>
  );
}
function Card({ children }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      className="card w-[80%]"
      animate={{
        width: isInView ? "70%" : "40%",
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
