import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section
        id="about-section"
        className="min-h-auto bg-[#1A1A2E] flex flex-col items-center text-white py-16"
      >
        <h1 className="poppins mb-12 font-bold text-xl">ABOUT ME</h1>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex justify-center md:justify-start"
          >
            <img
              className="w-[300px] md:w-[380px] lg:w-[400px]"
              src="./about.svg"
              alt="About Me Illustation"
            />
          </motion.div>

          <div className="w-full md:1/2 flex flex-col space-y-4 text-left ">
            <p className="text-lg leading-relaxed text-white poppins">
              Hi there!
              <br />
              I'm a passionate frontend designer with a love for clean, modern,
              and user-friendly interfaces. Based in Kathmandu, Nepal, I focus
              on crafting digital experiences that are both visually appealing
              and functional.
              <br />
              <br />
              I find joy in the details — from typography to layout, every
              element plays a part in the bigger picture. I'm constantly
              learning, experimenting, and pushing myself to create designs that
              not only look good but feel intuitive.
              <br />
              <br />
              Whether it’s a portfolio site, a landing page, or a full-blown app
              interface, I strive to bring ideas to life through thoughtful
              design. Let’s create something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="min-h-auto bg-[#1A1A2E] py-16 px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 px-16">
            {/* Work Experience */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 poppins">
                <span className="text-lg">💼</span> Work Experience
              </h2>
              <div className="border-l border-gray-600 pl-6 space-y-8">
                <div className="poppins">
                  <a
                    href="https://goodwish.com.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transform hover:translate-x-2 transition-transform duration-200"
                  >
                    <img
                      src="/elara.png"
                      alt="Goodwish"
                      className="w-24 mb-2"
                    />
                    <h3 className="font-bold">Goodwish Engineering</h3>
                    <p className="text-sm">
                      Frontend Developer Intern (Apr 2025 – Present)
                    </p>
                    <p className="text-sm">📍 Kupondole, Lalitpur</p>
                    <p className="text-sm mt-2 italic">
                      Key Focus: React, Tailwind CSS{" "}
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="w-full md:w-1/2 poppins">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-lg">🎓</span> Education
              </h2>
              <div className="border-l border-gray-600 pl-6 space-y-8">
                <div>
                  <a
                    href="https://www.oic.edu.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transform hover:translate-x-2 transition-transform duration-200"
                  >
                    <img src="/orchid.png" alt="DSCE" className="w-20 mb-2" />
                    <h3 className="font-bold">Orchid International College</h3>
                    <p className="text-sm">
                      Bachelor's Degree, BSc CSIT (2021 – 2025)
                    </p>
                    <p className="text-sm">📍 Kathmandu, Nepal</p>
                  </a>
                </div>
                <div>
                  <a
                    href="https://kws.edu.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transform hover:translate-x-2 transition-transform duration-200"
                  >
                    <img src="/kws.png" alt="KWS" className="w-20 mb-2" />
                    <h3 className="font-bold">Kathmandu World School</h3>
                    <p className="text-sm">+2, Science (2019 – 2021)</p>
                    <p className="text-sm">📍 Bhaktapur, Nepal</p>
                  </a>
                </div>
                <div>
                  <a
                    href="https://gems.edu.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transform hover:translate-x-2 transition-transform duration-200"
                  >
                    <img src="/gems.png" alt="GEMS" className="w-20 mb-2" />
                    <h3 className="font-bold">GEMS School</h3>
                    <p className="text-sm">High School, SEE (2012 – 2019)</p>
                    <p className="text-sm">📍 Lalitpur, Nepal</p>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.matribhumischool.edu.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transform hover:translate-x-2 transition-transform duration-200"
                  >
                    <img
                      src="/matribhumi.png"
                      alt="Matribhumi"
                      className="w-20 mb-2"
                    />
                    <h3 className="font-bold">Matribhumi School</h3>
                    <p className="text-sm">
                      Elementary & Primary (2006 – 2011)
                    </p>
                    <p className="text-sm">📍 Bhaktapur, Nepal</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <hr className="w-full border-gray-600 mx-auto" />
    </>
  );
};

export default About;
