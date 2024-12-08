import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const AboutMeSection = () => {
  return (
    <section className="py-20 lg:flex items-center">
      <div className="lg:w-2/3">
        <Image
          className=""
          src={
            "https://github.com/67sazzadhossen/sazzad.hossen/blob/main/src/assets/profile_transparent.png?raw=true"
          }
          alt="image"
          width={900}
          height={600}
        ></Image>
      </div>

      <div className="px-3 md:px-24 text-center md:text-left relative md:w-full">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          Hi, I`m Md Sazzad Hossen – a passionate Full Stack Web Developer with
          a focus on building dynamic and user-centric web applications. With
          expertise in the MERN stack, I strive to craft intuitive and scalable
          solutions that deliver results.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Whether it`s front-end with React, back-end with Node.js, or managing
          databases with MongoDB, I’m always excited to tackle new challenges
          and help clients bring their ideas to life.
        </p>

        <Link href={"/about"}>
          <button className="btn btn-outline">About Me</button>
        </Link>
        <div className=" absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
          <Image
            className="opacity-15"
            src={logo}
            alt="logo"
            width={200}
            height={400}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
