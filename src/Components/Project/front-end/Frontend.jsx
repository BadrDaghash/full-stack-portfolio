import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./frontend.css";
import "./../project.css";
import abstract from "./../../../assets/projects/front-end/abstract.png";
import lines from "./../../../assets/projects/front-end/lines.png";
import face from "./../../../assets/projects/front-end/WhatsApp Image 2025-04-29 at 01.20.30_b0e89d7b.jpg";
import newEra from "./../../../assets/projects/front-end/NewEra.png";
import noteApp from "./../../../assets/projects/front-end/NoteApp.png";
import ecommerce from "./../../../assets/projects/front-end/Ecommerce.png";
import customerDash from "./../../../assets/projects/front-end/route.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

export default function FrontEnd() {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/#project");
  };
  useEffect(() => {
    window.scrollTo(0, 0);


    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);


    return ()=> clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <Loader className="scale-150" />
      </div>
    );
  }

  const reactProjects = [
    {
      name: "NewEra Envolved Agents",
      material:
        "ReactJs - Tailwindcss - Flowbite - react-type-animation - react-scroll - react-router-hash-link - react-phone-number-input - react-hot-toast",
      src: newEra,
      label: "NewEra",
      desc: "A modern, responsive agency website featuring smooth scrolling, animated text, and interactive contact forms. Built with React and Tailwind CSS.",
      githubUrl: "https://github.com/BadrDaghash/Neeagents",
      webUrl: "https://badrdaghash.github.io/Neeagents/",
    },
    {
      name: "Fresh Cart E-commerce",
      material:
        "ReactJs - Axios - Yup - Formik - react-hot-toast - Tailwindcss - Flowbite",
      src: ecommerce,
      label: "e-commerce",
      desc: "Fresh Cart is a responsive e-commerce app built with React.js, featuring product browsing, cart management, authentication, and clean UI using Tailwind CSS, Formik, and Axios.",
      githubUrl: "https://github.com/BadrDaghash/Fresh-Cart-",
      webUrl: "https://badrdaghash.github.io/Fresh-Cart-/",
    },
    {
      name: "NoteApp",
      material:
        "ReactJs - Axios - Yup - Formik - Recoil - Tailwindcss - Flowbite",
      src: noteApp,
      label: "NoteApp",
      desc: "A simple and responsive note-taking app with form validation, global state management, and real-time updates. Built with React, Recoil, and Tailwind CSS.",
      githubUrl: "https://github.com/BadrDaghash/Note-App",
      webUrl: "https://badrdaghash.github.io/Note-App/",
    },
    {
      name: "Dashboard",
      material: "ReactJs - Mui - React-google-charts",
      src: customerDash,
      label: "dashboardImg",
      githubUrl: "https://github.com/BadrDaghash/Task",
      webUrl: "https://badrdaghash.github.io/Task/",
    },
  ];

  return (
    <>
      <div
        className="w-full   relative inset-0 mx-auto  z-0  "
        style={{ backgroundImage: `url(${lines})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80  z-10"></div>
        <div className="flex text-white relative z-20 py-8 sm:py-20 justify-center items-center text-center mx-auto gap-4">
          <div className="w-1/3 sm:w-1/3  flex justify-start ps-8">
            <button onClick={handleGoBack} class="arrow ">
              <div class="arrow-box">
                <span class="arrow-elem">
                  <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
                <span class="arrow-elem">
                  <svg viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
              </div>
            </button>
          </div>

          <div className="w-1/3 sm:w-1/3  ">
            <span className="text-gray-100 animate-pulse-soft font-bold text-md sm:text-2xl ">
              Front-End Projects
            </span>
          </div>

          <div className="w-1/3 sm:w-1/3 ">
            <Link
              to={"/projects/backend"}
              className="text-white hover:text-white  border border-white hover:bg-[#312e8171] shadow-md shadow-[#312e81d0]
                      hover:shadow-sm hover:shadow-[#312e81d0] hover:text-idigo-900  duration-300
                     focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-3xl text-xs sm:text-sm  
                     px-5 py-2 sm:px-3 sm:py-2 text-center me-2 mb-2 "
            >
              Back-End
            </Link>
          </div>
        </div>

        <div className="flex  justify-center items-center z-20">
          <div
            className="grid grid-cols-1 sm::grid-cols-2 xl:grid-cols-2 gap-20 sm:gap-8 md:gap-10 xl:gap-24
           mx-8 sm:mx-0 xl:mx-20  z-20"
          >
            {reactProjects.map((project, index) => (
              <div
                key={index}
                class="max-w-xl bg-[#0000009e] shadow-sm shadow-[#312e8152] hover:shadow-md hover:shadow-[#312e8152] duration-500  rounded-lg "
              >
                <a href="#" className="relative">
                  <img
                    class="rounded-t-lg h-64 w-full object-cover"
                    src={project.src}
                    alt={project.label}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-10 duration-300"></div>
                </a>
                <div class="p-5 ">
                  <div className="relative  sm:h-48">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-800 animate-pulse ">
                      {project.name}
                    </h5>

                    <p class="mb-3 font-normal text-white  text- ">
                      {project.desc}
                    </p>
                    <p class="mb-3 font-normal text-gray-300  text-[13px] ">
                      {project.material}
                    </p>
                  </div>
                  {/* btn */}
                  <div className="flex justify-center items-center gap-8 ">
                    <button class="btn-github mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span class="ml-2">View</span>
                    </button>

                    <button class="btn-github mt-4 ">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                      <span>Github</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
