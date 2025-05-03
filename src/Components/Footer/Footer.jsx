import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer class="bg-[#000] dark:bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-white">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <span className="self-center text-[#F1F6F9] text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Badr Daghash
                </span>
              </a>
              <p className="mt-2 text-sm text-gray-400">
                Full Stack Web Developer based in Alexandria, Egypt.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-indigo-800 hover:text-indigo-700 duration-300 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-200 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://react.dev/"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React.js
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nodejs.org/"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Node.js
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-indigo-800 hover:text-indigo-700 duration-300 uppercase dark:text-white">
                  Connect
                </h2>
                <ul className="text-gray-200 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.linkedin.com/in/badr-daghash-63971520a/"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/badr-daghash-63971520a/"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-indigo-800 hover:text-indigo-700 duration-300 uppercase dark:text-white">
                  Info
                </h2>
                <ul className="text-gray-200 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://wa.me/201092267497"
                      className="hover:underline"
                    >
                      Contact Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cv.pdf"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download CV
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr class="my-6 border-[#0f131b] sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="flex justify-center py-6">
            <span class="text-sm text-gray-200 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a
                href="http://animora.retronic-llc.com/"
                class="hover:underline"
              >
                BKD
              </a>
              . All Rights Reserved.
            </span>
            {/* <div class="flex mt-4 sm:justify-center sm:mt-0">
              <div class="card2">
                <a
                  class="socialContainer containerTwo"
                  href="https://github.com/BadrDaghash"
                  target="_blank"
                >
                  <svg viewBox="0 0 16 16" class="socialSvg githubSvg">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>

                <a
                  class="socialContainer containerThree"
                  href="https://www.linkedin.com/in/badr-daghash-63971520a/"
                  target="_blank"
                >
                  <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>

                <a
                  class="socialContainer containerFour"
                  href="https://wa.me/201092267497"
                  target="_blank"
                >
                  <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
