"use client";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion"; // For smooth animations

const experiences = [
  {
    company: "Navieasoft Limited",
    position: "Front-end Developer",
    location: "Dhaka, Bangladesh",
    duration: "Aug 2022 – Jan 2023",
    responsibilities: [
      "Worked on Web application development, design, and code optimization.",
    ],
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "React",
      "Tailwind CSS",
    ],
  },
  // You can add more job experiences here in the same structure
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            My Experience
          </h2>
          <p className="text-lg text-gray-700">
            Here’s a glimpse into my professional journey. Check out the roles
            I’ve held and the skills I’ve honed.
          </p>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * index }}
              className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ease-in-out"
            >
              {/* Timeline */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                  <FaLaptopCode />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {experience.position}
                  </h3>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">{experience.company}</span>,{" "}
                    {experience.location}
                  </p>
                  <p className="text-sm text-gray-500">{experience.duration}</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Responsibilities:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 py-1 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
