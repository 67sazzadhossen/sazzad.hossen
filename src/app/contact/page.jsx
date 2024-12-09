"use client";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle form submission (e.g., sending it to a server)
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Contact Header */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 ">
          {/* Contact Form */}
          {/* <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Me
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Send Message
              </button>
            </form>
            {isSubmitted && (
              <div className="mt-4 text-green-500 text-center">
                Thank you for reaching out! I'll get back to you soon.
              </div>
            )}
          </div> */}

          {/* Contact Details */}
          <div className=" p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Details
            </h3>

            <div className="mb-4 flex items-center gap-4">
              <FaEnvelope size={20} className="text-gray-700" />
              <span className="text-lg text-gray-700">
                sazzadhossen@example.com
              </span>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <FaPhone size={20} className="text-gray-700" />
              <span className="text-lg text-gray-700">+8801 714 371 059</span>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/67sazzadhossen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-all"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/67sazzadhossen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-all"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.facebook.com/67sazzadhossen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-all"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com/67sazzadhossen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-all"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.instagram.com/67sazzadhossen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-all"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
