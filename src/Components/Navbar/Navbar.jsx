import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isExpanded, setisExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  const closeNavbar = () => {
    setisExpanded(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      const offset = window.innerHeight *0; // 10% of the screen height

      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${sectionId}`);
      setActiveLink(sectionId); // <-- Set the active link here
      closeNavbar(); // Close navbar after scrolling
    }
  };

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 60);

      if (currentScroll > lastScroll) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full lg:w-[50%] mx-auto">
      <nav
        className={`bg-[rgb(5,2,9)] bg-opacity-40 fixed z-50 w-full sm:w-[50%] mx-auto  transition-transform duration-300 sm:mt-2 rounded-md ${
          isVisible ? "translate-y-0" : "-translate-y-20"
        } ${isScrolled ? "bg-opacity-70" : "bg-opacity-0"}`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span
              className="self-center text-2xl font-bold whitespace-nowrap uppercase 
             text-[#F1F6F9]"
            >
              Badr Daghash
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-indigo-900 rounded-lg md:hidden
             hover:text-indigo-800"
            onClick={() => setisExpanded(!isExpanded)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isExpanded ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-1 md:mt-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`block py-1 px-2 transition-all duration-300 text-[14px] font-heading 
                             ${
                               activeLink === link.id
                                 ? "text-indigo-700"
                                 : "text-[#F1F6F9]"
                             } 
                             hover:text-indigo-950`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
