"use client";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiReact } from "react-icons/si";
import Image from "next/image";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built using React and Next.js, showcasing my projects, skills, and experience.",
    image: "https://i.ibb.co/Yhh1wJZ/image.png", // Replace with actual project image
    technologies: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <FaCss3 key="css" />,
    ],

    liveLink: "https://sazzadhossen.vercel.app/", // Add live link
    githubLink: "https://github.com/67sazzadhossen/sazzad.hossen", // GitHub repo link
  },
  {
    title: "E-Commerce Web App",
    description:
      "An e-commerce website built with MERN stack for an online store, including user authentication of buyer, seller and admin.",
    image: "https://i.ibb.co/DgycTSW/image.png", // Replace with actual project image
    technologies: [
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <SiMongodb key="mongodb" />,
      <FaCss3 key="css" />,
    ],

    liveLink: "https://gadgetbd-client.vercel.app/", // Add live link
    githubLink: "https://github.com/67sazzadhossen/gadgetbd_client", // GitHub repo link
  },
  {
    title: "Volunteer Management",
    description:
      "A full-stack blog platform where people can add volunteer and can find volunteer opportunities. Built with React.js, Node.js, and MongoDB.",
    image: "https://i.ibb.co/KNSRFLq/image.png", // Replace with actual project image
    technologies: [
      <SiReact key="reactjs" />,
      <FaNodeJs key="node" />,
      <SiMongodb key="mongodb" />,
      <FaHtml5 key="html" />,
      <FaCss3 key="css" />,
    ],

    liveLink: "https://volunteer-avenue.web.app/", // Add live link
    githubLink: "https://github.com/67sazzadhossen/Volunteer-Avenue-Client", // GitHub repo link
  },
  {
    title: "Micro Tasking",
    description:
      "A full-stack blog platform where people can add volunteer and find volunteer opportunities. Built with React.js, Node.js, and MongoDB.",
    image: "https://i.ibb.co/F0Dd6Y3/image.png", // Replace with actual project image
    technologies: [
      <SiReact key="reactjs" />,
      <FaNodeJs key="node" />,
      <SiMongodb key="mongodb" />,
      <FaHtml5 key="html" />,
      <FaCss3 key="css" />,
    ],

    liveLink: "https://gigzoom.web.app/", // Add live link
    githubLink: "https://github.com/67sazzadhossen/gigzoom", // GitHub repo link
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="text-gray-500 text-lg hover:text-blue-500"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* View Project Button */}
                {/* <button className="text-white bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mr-4">
                  View Detail
                </button> */}

                {/* Live Link Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-500 py-2 px-4 rounded-lg hover:bg-green-600 transition-colors mr-4"
                >
                  Live Demo
                </a>

                {/* GitHub Repo Button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub Repo
                </a>
              </div>

              {/* Overlay on hover */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
