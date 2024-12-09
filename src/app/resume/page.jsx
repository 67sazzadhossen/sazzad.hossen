"use client";
import React from "react";
import Image from "next/image"; // Import Image component for optimized image loading

const ResumePage = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Title Section */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          My Resume
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          You can view and download my resume from the link below. Feel free to
          reach out if you have any questions or would like to discuss
          opportunities.
        </p>

        {/* Resume Image Section */}
        <div className="mb-12">
          <Image
            src="https://i.ibb.co/3MS7KNL/resume-image.jpg" // Resume image URL
            alt="My Resume"
            width={800}
            height={1100} // You can adjust the height and width as needed
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Resume View and Download Options */}
        <div className="space-y-6">
          {/* Link to Google Drive */}
          <div>
            <a
              href="https://drive.google.com/file/d/1sNrU8tzpT8kdMUlwZHmZd0lbTPnB4zmR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View My Resume
            </a>
          </div>

          {/* Download Button (Link to the direct download URL) */}
          <div>
            <a
              href="https://drive.google.com/uc?id=1sNrU8tzpT8kdMUlwZHmZd0lbTPnB4zmR&export=download"
              download
              className="inline-block text-white bg-green-500 py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
