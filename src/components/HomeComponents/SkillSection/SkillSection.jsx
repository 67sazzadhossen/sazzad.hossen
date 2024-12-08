import React from "react";

const SkillSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="skill-item">
            <img src="/icons/react.svg" alt="React" className="h-16 mx-auto" />
            <h3 className="mt-4 text-lg">React</h3>
          </div>
          <div className="skill-item">
            <img
              src="/icons/nodejs.svg"
              alt="Node.js"
              className="h-16 mx-auto"
            />
            <h3 className="mt-4 text-lg">Node.js</h3>
          </div>
          <div className="skill-item">
            <img
              src="/icons/mongodb.svg"
              alt="MongoDB"
              className="h-16 mx-auto"
            />
            <h3 className="mt-4 text-lg">MongoDB</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
