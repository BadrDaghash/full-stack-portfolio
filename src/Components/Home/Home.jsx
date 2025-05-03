import React, { useEffect, useRef, useState } from "react";
import front3 from "./../../assets/front3.png";
import video from "./../../assets/Lines Digital Abstract Background(2K_HD).webm";
import "./home.css";
import Loader from "./../../Components/Loader/Loader"; // Import your Loader component

import { FaArrowUp } from "react-icons/fa"; // Import arrow icon

export default function Home() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showScroll]);

  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });

      // Preload more aggressively after initial render
      setTimeout(() => {
        video.load();
      }, 1000);
    }

    const handleVisibilityChange = () => {
      if (video && document.visibilityState === "visible") {
        video.play().catch(console.error);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <>
      <div className="home-container relative w-full min-h-screen overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0 transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-50" : "opacity-0"
          }`}
        />

{!isVideoLoaded && (
          <div className="absolute inset-0 bg-black z-50 flex items-center justify-center">
            <Loader  className="scale-150"/> {/* Scale up if needed */}
          </div>
        )}
        {/* Rest of your content */}
        <div className="relative z-10 w-full min-h-screen pt-20 pb-44 sm:pb-0 grid grid-cols-1 sm:grid-cols-3 justify-between items-center px-8 font-body sm:pt-10">
          <h2 className="text-white text-4xl sm:text-5xl xl:text-6xl text-center font-extrabold">
            You've{" "}
            <span className="text-indigo-800 text-4xl sm:text-5xl xl:text-6xl font-thin animate-pulse duration-200">
              connected
            </span>{" "}
            to <br /> a localhost
          </h2>

          <div className="relative sm:px-6">
            <img
              src={front3}
              className="w-full h-full sm:w-[32vw] sm:h-[80%] pt-6 object-contain tracking-in-contract-bck-bottom 
            shadow-md shadow-[#312e8124] rounded-full"
              alt=""
            />
            <div className="loader2 absolute top-[35%] left-[37%] text-base tracking-in-contract-bck-bottom">
              <span className="char">5/$</span>
              <span className="char">#7f</span>
              <span className="char">6^4</span>
              <span className="char">*11</span>
              <span className="char">K`0</span>
              <span className="char">?qe</span>
            </div>
          </div>

          <div className="relative flex pt-32 sm:pt-0 justify-center items-center">
            <div className="absolute z-0">
              <div className="loader"></div>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl xl:text-6xl sm:pb-[8px] sm:ps-[3px] text-center font-extrabold z-40 relative">
              where curiosity never sleeps
            </h2>
          </div>
        </div>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 text-indigo-900 hover:text-white border-[2px] border-gray-300  rounded-full shadow-lg
             hover:bg-indigo-950 transition-all duration-300 animate-bounce"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-xs" />
          </button>
        )}
      </div>
    </>
  );
}
