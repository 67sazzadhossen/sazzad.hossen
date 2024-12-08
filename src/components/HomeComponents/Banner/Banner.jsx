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

const Banner = () => {
  const bannerData = [
    {
      name: "Md Sazzad Hossen",
      title: "Full Stack Web Developer",
      description:
        "Hi, I'm Sazzad Hossen – a passionate Full Stack Web Developer with expertise in creating dynamic, responsive, and scalable web applications. From frontend frameworks like React to backend solutions with Node.js, I deliver high-quality, user-centric solutions. Let's build something amazing together!",
      image:
        "https://github.com/67sazzadhossen/sazzad.hossen/blob/main/src/assets/profile_transparent.png?raw=true",
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
        "As a full-stack web developer, I specialize in building powerful applications using the MERN stack (MongoDB, Express, React, Node.js). With React and Next.js, I create dynamic, SEO-friendly UIs, while leveraging the backend capabilities of Node.js and MongoDB for fast, scalable solutions",
      image:
        "https://github.com/67sazzadhossen/sazzad.hossen/blob/main/src/assets/technologies.png?raw=true",
    },
  ];

  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={{
          prevEl: ".custom-prev", // Use your custom buttons
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }} // Ensure pagination is clickable
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((data, idx) => (
          <SwiperSlide
            className="lg:bg-[url('https://github.com/67sazzadhossen/sazzad.hossen/blob/main/src/assets/background.jpg?raw=true')] bg-cover bg-opacity-50 relative px-3 lg:px-0"
            key={idx}
          >
            <div className="bg-white bg-opacity-60 backdrop-blur-sm">
              <div className=" min-h-screen md:min-h-96 lg:min-h-[600px] flex flex-col-reverse lg:flex-row items-center lg:max-w-[80%] mx-auto lg:gap-16">
                <div className="space-y-4 text-center md:text-start px-3 lg:px-0 md:w-2/3">
                  <h4 className="text-xl">{data.name}</h4>
                  <h1 className="md:text-5xl text-3xl font-bold">
                    {data.title}
                  </h1>
                  <h1>{data.description}</h1>
                  <div className="divider divider-neutral w-16"></div>
                  <div className="flex text-4xl gap-4">
                    {data?.contact?.map((item, idx) => (
                      <Link key={idx} href={item.link}>
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
                <Image
                  className={`${
                    data.title === "Technologies"
                      ? "lg:border lg:rounded-full border-gray-300"
                      : ""
                  } lg:w-1/3 `}
                  src={data.image}
                  alt="profile"
                  width={data.title === "Technologies" ? 1200 : 600}
                  height={300}
                ></Image>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute top-1/2 left-4 z-10 bg-transparent cursor-pointer transform -translate-y-1/2  btn btn-circle btn-sm ">
          <AiOutlineLeft size={20} />
        </div>
        <div className="custom-next absolute top-1/2 right-4 z-10 bg-transparent cursor-pointer transform -translate-y-1/2   btn btn-circle btn-sm ">
          <AiOutlineRight size={20} />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
