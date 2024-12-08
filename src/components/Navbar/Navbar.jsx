"use client";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Change this to import from next/navigation
import { MdEmail, MdFacebook } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Blog", path: "/blog", optional: true },
    { name: "Testimonials", path: "/testimonials", optional: true },
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
  console.log(pathname);

  return (
    <nav className=" px-6 py-4 flex justify-between items-center backdrop-blur-md ">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          width={28}
          height={28}
          className="transition-transform transform hover:scale-110" // Logo hover effect
        />
        <div className="divider divider-neutral lg:divider-horizontal"></div>
        <div className="uppercase text-3xl font-extrabold tracking-wide">
          Sazzad
        </div>
      </div>

      {/* Navigation Links */}
      <ul className={`md:flex space-x-16  ${menuOpen ? "block" : "hidden"}`}>
        {navLinks.map((link, idx) => {
          // Check if the current link matches the active route
          const isActive = pathname === link.path;
          return (
            <li key={idx}>
              <Link
                href={link.path}
                className={`  hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-800" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="flex gap-4 text-2xl">
        {social.map((item, idx) => (
          <li key={idx}>
            <Link href={item.link}>{item.icon}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {/* Mobile icon (can replace with an icon component like Hamburger icon) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
