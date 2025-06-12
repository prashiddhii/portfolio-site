"use client";

import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen bg-[#1A1A2E] text-white relative overflow-hidden pt-20">
        {/* Mobile Layout (sm and below) */}
        <div className="flex flex-col items-center px-4 sm:px-8 md:hidden h-full min-h-screen justify-center space-y-8">
          {/* Name - Top */}
          <div className="text-center space-y-4">
            <h1 className="poppins text-3xl sm:text-4xl font-semibold leading-tight">
              Prashiddhi
              <br />
              Budhathoki.
            </h1>
            <div className="font-extrabold text-gray-400">──────────</div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-xl sm:text-2xl justify-center">
              <a
                href="https://github.com/prashiddhii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/prashiddhib/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/prashiddhii"
                target="_blank"
                rel="noopener noreferrer"

                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaSquareInstagram />
              </a>
            </div>
          </div>

          {/* Profile Image - Middle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-shrink-0"
          >
            <img
              src="/profile.png"
              alt="Prashiddhi Budhathoki"
              className="w-[280px] sm:w-[320px] h-auto object-cover"
            />
          </motion.div>

          {/* Introduction - Bottom */}
          <div className="text-center space-y-4 px-4">
            <p className="text-sm sm:text-base poppins uppercase tracking-widest text-gray-400">
              — Introduction
            </p>
            <h2 className="text-xl sm:text-2xl poppins font-bold leading-snug">
              👋🏻 Hi, I'm a Frontend Developer, <br />
              based in Nepal.
            </h2>
            <p className="text-gray-400 poppins text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
              Trying to create something beautiful — and workable!
            </p>
          </div>
        </div>

        {/* Desktop Layout (md and above) */}
        <div className="hidden md:flex items-center justify-between px-8 md:px-16 lg:px-20 xl:px-32 h-auto min-h-screen">
          {/* Left Side - Name and Icons */}
          <div className="w-full md:w-2/5 lg:w-1/3 z-10 flex flex-col justify-center space-y-6">
            <h1 className="poppins text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
              Prashiddhi
              <br />
              Budhathoki.
            </h1>

            <div className="font-extrabold text-gray-400">──────────</div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-xl md:text-2xl">
              <a
                href="https://github.com/prashiddhii"
                aria-label="Github"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/prashiddhib/"
                aria-label="LinkedIn"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/prashiddhii"
                aria-label="Instagram"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaSquareInstagram />
              </a>
            </div>
          </div>

          {/* Middle - Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/3 lg:w-1/3 z-10 flex justify-center"
          >
            <img
              src="/profile.png"
              alt="Prashiddhi Budhathoki"
              className="w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto object-cover"
            />
          </motion.div>

          {/* Right Side - Introduction */}
          <div className="w-full md:w-2/5 lg:w-1/3 z-10 flex flex-col justify-center space-y-6">
            <p className="text-sm md:text-base poppins uppercase tracking-widest text-gray-400">
              — Introduction
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl poppins font-bold leading-snug">
              👋🏻 Hi, I'm a Frontend Developer, <br />
              based in Nepal.
            </h2>
            <p className="text-gray-400 poppins text-sm md:text-base leading-relaxed max-w-md">
              Trying to create something beautiful — and workable!
            </p>
          </div>
        </div>
        <hr className="w-full border-gray-600 mx-auto" />
      </section>

      <About />
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
};

export default Hero;
