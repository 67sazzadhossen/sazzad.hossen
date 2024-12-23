"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Ensure pagination CSS is imported

// Import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

// Import React Icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import Image from "next/image";
import { MdEmail, MdFacebook } from "react-icons/md";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Banner = () => {
  const bannerData = [
    {
      name: "Md Sazzad Hossen",
      title: "Full Stack Web Developer",
      description:
        "Hi, I'm Sazzad Hossen – a passionate Full Stack Web Developer with expertise in creating dynamic, responsive, and scalable web applications. From frontend frameworks like React to backend solutions with Node.js, I deliver high-quality, user-centric solutions. Let's build something amazing together!",
      image: logo,
      contact: [
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
      ],
    },
    {
      title: "Technologies",
      description:
        "As a full-stack web developer, I specialize in building powerful applications using the MERN stack (MongoDB, Express, React, Node.js). With React and Next.js, I create dynamic, SEO-friendly UIs, while leveraging the backend capabilities of Node.js and MongoDB for fast, scalable solutions.",
      image:
        "https://github.com/67sazzadhossen/sazzad.hossen/blob/main/src/assets/technologies.png?raw=true",
    },
  ];

  return (
    <div className=" -mt-16 md:-mt-0">
      <Swiper
        cssMode={true}
        navigation={{
          prevEl: ".custom-prev", // Use your custom buttons
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }} // Ensure pagination is clickable
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((data, idx) => (
          <SwiperSlide
            className="lg:bg-[url('https://github.com/67sazzadhossen/sazzad.hossen/blob/main/src/assets/background.jpg?raw=true')] bg-cover bg-opacity-30 relative z-10 px-3 lg:px-0"
            key={idx}
          >
            <div className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-opacity-80 backdrop-blur-sm h-screen justify-center lg:h-[600px] px-12 md:px-24 flex flex-col lg:flex-row-reverse lg:justify-between items-center">
              <div className="mx-auto hidden md:flex h-72 w-72 md:h-96 md:w-96 justify-center items-center border-[8px] border-gray-300 rounded-full shadow-sm">
                <Image
                  className="w-36 md:w-[200px]"
                  src={data.image}
                  alt={data.title}
                  width={data.title === "Full Stack Web Developer" ? 200 : 600}
                  height={200}
                />
              </div>
              <div className="space-y-4 lg:w-2/3 md:mt-6 lg:mt-0 text-gray-800">
                <h4 className="text-xl text-gray-600">{data.name}</h4>
                <h1 className="text-3xl lg:text-6xl font-extrabold text-gray-900 drop-shadow-md">
                  {data.title}
                </h1>
                <p className="text-gray-700">{data.description}</p>
                <div className="divider divider-neutral w-16 bg-gray-300"></div>
                <div className="flex text-3xl gap-4">
                  {data?.contact?.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
                <Link
                  className="btn btn-outline bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300"
                  href={"/resume"}
                >
                  Resume
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute top-1/2 left-4 z-10 bg-transparent cursor-pointer transform -translate-y-1/2 btn btn-circle btn-sm bg-gray-200 text-gray-700 hover:bg-gray-300">
          <AiOutlineLeft size={20} />
        </div>
        <div className="custom-next absolute top-1/2 right-4 z-10 bg-transparent cursor-pointer transform -translate-y-1/2 btn btn-circle btn-sm bg-gray-200 text-gray-700 hover:bg-gray-300">
          <AiOutlineRight size={20} />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
