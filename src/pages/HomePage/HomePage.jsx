import AboutMeSection from "@/components/HomeComponents/AboutMeSection/AboutMeSection";
import Banner from "@/components/HomeComponents/Banner/Banner";
import SkillSection from "@/components/HomeComponents/SkillSection/SkillSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutMeSection />
      <SkillSection />
    </div>
  );
};

export default HomePage;
