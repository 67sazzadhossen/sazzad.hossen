import AboutMeSection from "@/components/HomeComponents/AboutMeSection/AboutMeSection";
import Banner from "@/components/HomeComponents/Banner/Banner";
import ExperienceSection from "@/components/HomeComponents/Experience/ExperienceSection";
import ProjectSection from "@/components/HomeComponents/ProjectSection/ProjectSection";
import SkillSection from "@/components/HomeComponents/SkillSection/SkillSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutMeSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
    </div>
  );
};

export default HomePage;
