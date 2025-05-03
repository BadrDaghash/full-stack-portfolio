import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../project.css";
import lines from "./../../../assets/projects/front-end/lines.png";
import linkedin from "./../../../assets/projects/backend/download.png";
import Ecommerce from "./../../../assets/projects/backend/e-commerce.jpg";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

export default function Backend() {
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
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <Loader className="scale-150" />
      </div>
    );
  }

  const nodeProjects = [
    {
      name: "LinkedIn-Style Job Platform",
      material:
        "Express - Express Rate Limit - Bcrypt - Cloudinary - GraphQL - Helmet - Joi - JWT - Mongoose - Multer - Nanoid - Nodemailer - Randomstring - Socket.IO",
      src: linkedin,
      label: "linkedin",
      desc: "A full-stack job application platform where admins/recruiters can post jobs and manage applicants, while users can apply securely. Features include:",
      features: [
        "🦾 Role-based access control -  (Admin, Recruiter, User) ",
        "🦾 Secure authentication -  (JWT, Bcrypt, rate-limited endpoints)",
        "🦾 Job postings & applications - with file uploads  (CVs via Multer/Cloudinary)",
        "🦾 Real-time notifications -  (Socket.IO for application updates)",
        "🦾 Email integration -  (Nodemailer for confirmations/alerts)",
        "🦾 Data validation -  (Joi) and  -API security - (Helmet, CORS)",
      ],
      githubUrl: "https://github.com/BadrDaghash/Linkedin-application",
    },
    {
      name: "E-Commerce Platform (NestJS)",
      material:
        "NestJS - MongoDB - GraphQL - JWT - Stripe - Socket.IO - Redis - Cloudinary - Nodemailer",
      src: Ecommerce, // Make sure to import your image
      label: "Ecommerce",
      desc: "A full-stack e-commerce platform with admin/seller dashboards, product management, and secure online payments. Features include:",
      features: [
        "🦾 Multi-role system (Admin, Seller, Customer)",
        "🦾 Product hierarchy (Category → Brand → Sub-Brand)",
        "🦾 Shopping cart & order management",
        "🦾 Online payments (Stripe integration)",
        "🦾 Real-time updates (Socket.IO for order tracking)",
        "🦾 Image uploads (Cloudinary for product media)",
        "🦾 Email notifications (Nodemailer for order confirmations)",
        "🦾 Caching (Redis for performance optimization)",
      ],
      githubUrl: "https://github.com/BadrDaghash/E-commerce-nest-",
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
          <div className="w-1/3 sm:w-1/3 flex justify-start ps-8 ">
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
              Back-End Projects
            </span>
          </div>

          <div className="w-1/3 sm:w-1/3  ">
            <Link
              to={"/projects/frontend"}
              className="text-white hover:text-white  border border-white hover:bg-[#312e8171] shadow-md shadow-[#312e81d0]
               hover:shadow-sm hover:shadow-[#312e81d0] hover:text-idigo-900  duration-300
              focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-3xl text-xs sm:text-sm  
              px-5 py-2 sm:px-3 sm:py-2 text-center me-2 mb-2 w-4"
            >
              Front-End
            </Link>
          </div>
        </div>

        <div className="flex  justify-center items-center z-20 pb-20">
          <div className="grid grid-cols-1 sm::grid-cols-2 xl:grid-cols-2 gap-20 sm:gap-8 md:gap-10 xl:gap-24 mx-8 sm:mx-0 xl:mx-20  z-20  ">
            {nodeProjects.map((project, index) => (
              <div
                key={index}
                class="max-w-xl bg-[#0000009e] shadow-sm shadow-[#312e8152] hover:shadow-md hover:shadow-[#312e8152] 
                duration-500  rounded-lg "
              >
                <a href="#" className="relative">
                  <img
                    class="rounded-t-lg w-full h-60"
                    src={project.src}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 duration-300"></div>
                </a>
                <div class="p-5 ">
                  <div className="relative  md:h-[400px] lg:h-[440px]">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 animate-pulse-soft ">
                      {project.name}
                    </h5>

                    <p class="mb-3 font-normal text-gray-400  text-[13px] ">
                      {project.material}
                    </p>
                    <p class="mb-3 font-normal text-indigo-400  text- ">
                      {project.desc}
                    </p>
                    <p class="mb-3 font- text-zinc-300  text-sm  ">
                      {project.features.map((feature, index) => (
                        <span key={index} className="block py-1">
                          {feature}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                  {/* btn */}
                  <div className="flex justify-center items-center gap-8 ">
                    <button class="btn-github w-full ">
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
