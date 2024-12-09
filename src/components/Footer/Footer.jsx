"use client";
import React from "react";
import Image from "next/image"; // Importing Next.js Image for optimized images
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="https://i.ibb.co/3cv9XYG/logo.png" // Logo Image URL
            alt="Logo"
            width={60} // Define width for responsive scaling
            height={50} // Define height for responsive scaling
            className="mx-auto"
          />
          <div className="divider divider-neutral"></div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mb-6 space-x-4">
          <a
            href="https://github.com/67sazzadhossen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/67sazzadhossen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/67sazzadhossen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com/67sazzadhossen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            <SiInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/67sazzadhossen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            <FaFacebook size={30} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600 mb-4">
          <p>&copy; 2024 Sazzad Hossen. All Rights Reserved.</p>
        </div>

        {/* Resume Link (optional) */}
        <div className="mt-4">
          <a
            href="https://drive.google.com/file/d/1sNrU8tzpT8kdMUlwZHmZd0lbTPnB4zmR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            View My Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
