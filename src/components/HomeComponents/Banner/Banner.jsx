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
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Banner = () => {
  const bannerData = [
    {
      title: "Laser Skin Resurfacing",
      image:
        "https://www.datocms-assets.com/101452/1688062686-laser-skin-resurfacing-banner.jpg?auto=format,compress&w=2200",
    },
    {
      title: "Botox & Fillers",
      image:
        "https://www.schmidtplasticsurgery.com/wp-content/uploads/2021/04/shutterstock_233707033-1920x1029.jpg",
    },
    {
      title: "Coolsculpting",
      image:
        "https://revivalaestheticsandwellness.com/wp-content/uploads/2022/10/coolsculpting_1920.jpg",
    },
    {
      title: "Hair Restoration",
      image:
        "https://irp.cdn-website.com/bc408738/dms3rep/multi/shutterstock_1612411981.jpg",
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
          <SwiperSlide key={idx}>
            <div className="hero min-h-60 md:min-h-96 lg:min-h-[600px]"></div>
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
