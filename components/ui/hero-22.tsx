import React from "react";
import { FaDownload } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";

const commonStyles = {
  header: "relative py-4 md:py-6 bg-black text-white",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  logo: "flex items-center text-3xl font-bold text-white",
  menuIcon: "w-7 h-7",
  navLink:
    "text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
  button:
    "inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 font-pj",
  primaryButton: "bg-white hover:bg-gray-200",
  secondaryButton:
    "bg-transparent border-white text-white hover:bg-white hover:text-black",
  sectionTitle:
    "text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3a8fd3] via-[#9b59b6] to-[#8e44ad] sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj",
  textAccent: "relative inline-flex sm:inline",
  textHighlight:
    "bg-gradient-to-r from-[#3a8fd3] via-[#9b59b6] to-[#8e44ad] blur-lg filter opacity-30 w-full h-full absolute inset-0",
  profilePic: "inline-block rounded-full w-14 h-14 ring-2 ring-white",
  gridImg: "w-full mx-auto scale-110",
};

function Hero22() {
  return (
    <div className="relative bg-black">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img
          className="w-auto h-full"
          src="https://www.auraui.com/memeimage/background-pattern.png"
          alt="Background Pattern"
        />
      </div>

      <header className={commonStyles.header}>
        <div className={commonStyles.container}>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" title="CreatoUI Home" className={commonStyles.logo}>
                <span>CreatoUI</span>
              </a>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-white">
                <HiOutlineBars3 className={commonStyles.menuIcon} />
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
              <div className="flex items-center space-x-12">
                <a href="#" title="Features" className={commonStyles.navLink}>
                  Features
                </a>
                <a href="#" title="Pricing" className={commonStyles.navLink}>
                  Pricing
                </a>
                <a href="#" title="Components" className={commonStyles.navLink}>
                  Components
                </a>
              </div>

              <div className="w-px h-5 bg-gray-300"></div>

              <a href="#" title="Login" className={commonStyles.navLink}>
                Login
              </a>

              <a
                href="#"
                title="Create Free Account"
                className={`${commonStyles.button} ${commonStyles.primaryButton}`}
                role="button"
              >
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
        <div className={commonStyles.container}>
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <h1 className={commonStyles.sectionTitle}>
                  Unleash Your Creativity with CreatoUI
                </h1>

                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                  <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                    <img
                      className={commonStyles.profilePic}
                      src="https://www.auraui.com/memeimage/woman1.jpg"
                      alt="Profile"
                    />
                    <img
                      className={commonStyles.profilePic}
                      src="https://www.auraui.com/memeimage/man2.jpg"
                      alt="Profile"
                    />
                    <img
                      className={commonStyles.profilePic}
                      src="https://www.auraui.com/memeimage/woman3.jpg"
                      alt="Profile"
                    />
                  </div>

                  <p className="mt-4 text-lg text-white lg:mt-0 lg:ml-4 font-pj">
                    Join{" "}
                    <span className="font-bold">1000+ Developers</span> using
                    CreatoUI to build stunning UIs
                  </p>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-5 lg:justify-start lg:mt-12">
                <a
                  href="#"
                  title="Get Started"
                  className={`${commonStyles.button} ${commonStyles.primaryButton}`}
                  role="button"
                >
                  Get Started
                </a>

                <a
                  href="#"
                  title="Download for Free"
                  className={`${commonStyles.button} ${commonStyles.secondaryButton}`}
                  role="button"
                >
                  <FaDownload className="w-5 h-5 mr-2 transition-colors duration-300 ease-in-out" />
                  Download for Free
                </a>
              </div>
            </div>

            <div className="xl:col-span-3">
              <img
                className={commonStyles.gridImg}
                src="https://www.auraui.com/memeimage/hero22.png"
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero22;
