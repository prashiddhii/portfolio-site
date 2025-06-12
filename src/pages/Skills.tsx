import { motion } from "framer-motion";
import { useState } from "react";

import { IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import {
  SiTailwindcss,
  SiJavascript,
  SiAdobeaftereffects,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

const skillInfo = [
  {
    title: "HTML",
    icon: <IoLogoHtml5 className="text-white text-xl" />,
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-white text-xl" />,
  },
  {
    title: "Javascript",
    icon: <SiJavascript className="text-white text-xl" />,
  },
  {
    title: "React",
    icon: <IoLogoReact className="text-white text-xl" />,
  },
  {
    title: "Figma",
    icon: <CgFigma className="text-white text-xl" />,
  },
  {
    title: "Adobe After Effects",
    icon: <SiAdobeaftereffects className="text-white text-xl" />,
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleCardClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div>
      <section
        id="skill-section"
        className="h-auto bg-[#1A1A2E] flex flex-col items-center text-white py-16"
      >
        <h1 className="poppins mb-12 font-bold text-xl">SKILLS</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillInfo.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(skill)}
              className="bg-zinc-900 p-16 md:p-12 rounded-md shadow-md flex items-start gap-4 hover:bg-gray-600 transition-all duration-200 cursor-default px-4"
            >
              <div className="p-2 bg-zinc-800 rounded-full">{skill.icon}</div>
              <div>
                <h3 className="font-semibold poppins">{skill.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-zinc-800 text-white p-6 rounded-md w-80 relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-xl"
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-zinc-700 rounded-full mb-4">
                  {selectedSkill.icon}
                </div>
                <h2 className="text-lg font-semibold mb-2">
                  {selectedSkill.title}
                </h2>
                <p className="text-sm text-center">
                  {selectedSkill.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <hr className="w-full border-gray-600 mx-auto" />
    </div>
  );
};

export default Skills;
