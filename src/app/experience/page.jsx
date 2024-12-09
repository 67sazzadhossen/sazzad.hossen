"use client";
import React from "react";
import { FaReact, FaNodeJs, FaCss3, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";

const experiences = [
  {
    title: "Front-end Developer",
    company: "Navieasoft Limited",
    location: "Dhaka, Bangladesh",
    dates: "Aug 2022 – Jan 2023",
    description:
      "Worked on web application development, design, and code optimization. Delivered several components for web applications, enhancing user experiences and reducing load times.",
    technologies: [
      <SiJavascript key="js" />,
      <FaHtml5 key="html" />,
      <FaCss3 key="css" />,
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
    ],
  },
];

const ExperiencePage = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
          My Experience
        </h2>

        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              {experience.title}
            </h3>
            <p className="text-gray-600 text-lg">{experience.company}</p>
            <p className="text-gray-500 text-sm">
              {experience.location} | {experience.dates}
            </p>

            <p className="mt-4 text-gray-700">{experience.description}</p>

            <div className="flex gap-3 mt-6">
              {experience.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="text-gray-500 text-2xl hover:text-blue-500"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
