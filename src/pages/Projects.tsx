import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Movie Library",
    description:
      "A  responsive movie library application using React and Vite, providing users with a seamless interface to browse and manage movie collections.",
    tags: ["#webdev", "#frontend", "#react", "#css", "#reactjs", "#css"],
    image: "./movielib.png",
    github: "https://github.com/prashiddhii/movie-library",
  },
  {
    title: "Restaurant Web App",
    description:
      "A full-stack restaurant reservation platform with a React-based frontend and a Node.js/Express backend to enable seamless table browsing and booking.",
    tags: [
      "#fullstack",
      "#restaurantapp",
      "#webdev",
      "#mongodb",
      "#nodejs",
      "#react",
    ],
    image: "./restaurant.png",
    github: "https://github.com/prashiddhii/restaurant-app",
  },
];

const Projects = () => {
  return (
    <div>
      <section
        id="project-section"
        className="h-auto bg-[#1A1A2E] flex flex-col items-center text-white py-16"
      >
        <h2 className="text-2xl font-bold mb-10 text-left poppins">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-8 px-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-md relative group hover:transform hover:opacity-50 transition-all duration-300"
            >
              <div className="relative w-full h-96 hover:opacity-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-all duration-300 "
                />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <img src="./icon.jpg" alt="Overlay Icon" className="h-24 w-24"/> */}
                    <svg className="text-black"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      font-size="64"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                      <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                  <div className="mt-2 text-sm text-blue-300 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
