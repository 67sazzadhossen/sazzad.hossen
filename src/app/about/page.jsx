"use client";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";
import { motion } from "framer-motion"; // For animation
import Image from "next/image"; // To add an image (profile photo)
import Link from "next/link";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300"
    >
      <div className="container mx-auto px-6">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hello! I`m Md Sazzad Hossen, a passionate front-end developer with a
            love for creating beautiful and user-friendly websites. I specialize
            in React, JavaScript, and the MERN stack, and I am always eager to
            learn and grow in this fast-paced tech world.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mb-10"
        >
          <Image
            src="https://i.ibb.co/0MbYwsv/profile-transparent.png" // Add your image link here
            alt="Your profile picture"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* Background & Experience */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
            My Journey
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I started my career as a self-taught developer, diving deep into web
            technologies like JavaScript, React, and Node.js. After honing my
            skills, I worked with amazing teams at Navieasoft Limited as a
            front-end developer, where I contributed to building and optimizing
            web applications.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
            I’m passionate about improving the user experience and creating
            efficient, scalable solutions. I’m constantly exploring new
            technologies and tools to stay ahead in the tech world.
          </p>
        </motion.div>

        {/* Personal Touch & Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
            What I Love
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            When I’m not coding, you can find me exploring new tech trends,
            reading books, or working on creative projects. I’m also passionate
            about learning new languages, exploring new cultures, and sharing
            knowledge with others.
          </p>
        </motion.div>

        {/* Let’s Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-extrabold text-gray-800 mb-6">
            Let’s Connect
          </h3>
          <div className="flex justify-center gap-6 mb-6">
            {/* Social Media Links */}
            <Link
              href="https://github.com/67sazzadhossen"
              target="_blank"
              className="text-gray-700 hover:text-blue-500 transition-all"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/67sazzadhossen/"
              target="_blank"
              className="text-gray-700 hover:text-blue-500 transition-all"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              href="https://www.facebook.com/sazzad.hossen19/"
              target="_blank"
              className="text-gray-700 hover:text-blue-500 transition-all"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href="mailto:sazzadhossen010@gmail.com" // Replace with your actual email address
              className="text-gray-700 hover:text-blue-500 transition-all"
            >
              <FaEnvelope size={30} />
            </Link>
          </div>

          {/* Download Resume Button */}
          <div>
            <a
              href="https://your-website.com/resume.pdf" // Replace with your actual resume URL
              download
              className="inline-block text-white bg-green-500 py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
            >
              <FaDownload className="inline-block mr-2" size={20} />
              Download My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
