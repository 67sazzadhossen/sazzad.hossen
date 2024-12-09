"use client";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Change this to import from next/navigation
import { MdClose, MdEmail, MdFacebook, MdMenu } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume", optional: true },
  ];

  const social = [
    {
      icon: <MdEmail />,
      name: "Email",
      link: "mailto:sazzadhossen010@gmail.com",
    },
    {
      icon: <AiFillGithub />,
      name: "Github",
      link: "https://github.com/67sazzadhossen",
    },
    {
      icon: <AiFillLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/67sazzadhossen/",
    },
    {
      icon: <MdFacebook />,
      name: "Facebook",
      link: "https://www.facebook.com/sazzad.hossen19/",
    },
  ];

  const pathname = usePathname(); // Hook to track the active route

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <nav className="md:px-24 px-2 py-4 flex justify-between items-center backdrop-blur-md relative z-30">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          width={28}
          height={28}
          className="transition-transform transform hover:scale-110" // Logo hover effect
        />
        <div className="divider divider-neutral divider-horizontal mx-2"></div>
        <div className="uppercase text-xl md:text-3xl font-extrabold tracking-wide">
          Sazzad
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="gap-16 hidden lg:flex">
        {navLinks.map((link, idx) => {
          // Check if the current link matches the active route
          const isActive = pathname === link.path;
          return (
            <li key={idx}>
              <Link
                href={link.path}
                className={`hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-800" : ""
                }`}
                onClick={handleLinkClick} // Close the menu on click
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <div className="gap-4 text-2xl hidden md:flex">
          {social.map((item, idx) => (
            <li key={idx}>
              <Link href={item.link}>{item.icon}</Link>
            </li>
          ))}
        </div>
      </ul>

      {/* ========= Toggle Button ======= */}
      <div className="lg:hidden flex gap-6">
        <ul className="gap-4 text-2xl hidden md:flex">
          {social.map((item, idx) => (
            <li key={idx}>
              <Link href={item.link}>{item.icon}</Link>
            </li>
          ))}
        </ul>
        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* ============ Toggle Menu with Transition ======== */}
      <ul
        className={`lg:hidden absolute top-[100%] left-0 w-full bg-white z-50 h-screen py-6 px-8 space-y-8 transform transition-transform duration-300 ease-in-out text-center shadow-lg rounded-b-lg ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.path}
              className={`text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 ease-in-out py-2 px-4 rounded-md w-full block ${
                pathname === link.path
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-blue-50"
              }`}
              onClick={handleLinkClick} // Close the menu on click
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* Social Media Icons */}
        <div className="text-3xl flex justify-center gap-6 mt-8">
          {social.map((item, idx) => (
            <li key={idx} className="inline-block">
              <Link
                href={item.link}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200 ease-in-out"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
