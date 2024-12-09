import React from "react";

const SkillsPage = () => {
  const design = [
    {
      skill: "Web Design",
      efficiency: 89,
    },
    {
      skill: "UI/UX Design",
      efficiency: 85,
    },
    {
      skill: "Responsive Design",
      efficiency: 90,
    },
    {
      skill: "Prototyping (Figma/Adobe XD)",
      efficiency: 80,
    },
    {
      skill: "Interaction Design",
      efficiency: 75,
    },
    {
      skill: "Wireframing",
      efficiency: 88,
    },
    {
      skill: "Logo and Branding",
      efficiency: 80,
    },
    {
      skill: "Illustration & Graphics",
      efficiency: 70,
    },
    {
      skill: "Typography & Color Theory",
      efficiency: 85,
    },
    {
      skill: "Iconography",
      efficiency: 80,
    },
  ];
  const development = [
    {
      skill: "HTML5",
      efficiency: 95,
    },
    {
      skill: "CSS3",
      efficiency: 90,
    },
    {
      skill: "JavaScript (ES6+)",
      efficiency: 90,
    },
    {
      skill: "React.js",
      efficiency: 85,
    },
    {
      skill: "Next.js",
      efficiency: 85,
    },
    {
      skill: "Node.js",
      efficiency: 80,
    },
    {
      skill: "Express.js",
      efficiency: 80,
    },
    {
      skill: "MongoDB",
      efficiency: 75,
    },
    {
      skill: "RESTful APIs",
      efficiency: 85,
    },
    {
      skill: "GraphQL",
      efficiency: 70,
    },
    {
      skill: "TypeScript",
      efficiency: 75,
    },
    {
      skill: "Git/GitHub",
      efficiency: 90,
    },
    {
      skill: "Docker",
      efficiency: 65,
    },
    {
      skill: "AWS (EC2, S3, Lambda)",
      efficiency: 70,
    },
    {
      skill: "Firebase",
      efficiency: 75,
    },
    {
      skill: "WebSockets",
      efficiency: 80,
    },
    {
      skill: "OAuth 2.0",
      efficiency: 70,
    },
  ];
  return (
    <div>
      <section className="py-20 px-3 md:px-24 bg-base-200">
        <h1 className="text-center text-2xl md:text-4xl font-semibold mb-6">
          My Skills
        </h1>
        <p>
          I specialize in building dynamic, scalable web applications using the
          MERN stack (MongoDB, Express, React, Node.js). With expertise in React
          and Next.js, I create responsive, SEO-friendly UIs, while utilizing
          Node.js and MongoDB for powerful backend solutions.
        </p>

        <div className="mt-6 md:flex justify-center gap-4">
          <div className="w-full">
            <h1 className="text-center md:text-right font-semibold my-2 text-xl">
              Design
            </h1>
            {design.map((item, idx) => (
              <div key={idx}>
                <label className="md:text-right block">{item.skill}</label>
                <progress
                  className="progress progress-accent w-full md:rotate-180"
                  value={item.efficiency}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
          <div className="w-full">
            <h1 className="text-center md:text-left font-semibold my-2 text-xl">
              Development
            </h1>

            <div>
              {development.map((item, idx) => (
                <div key={idx}>
                  <label className="">{item.skill}</label>
                  <progress
                    className="progress progress-primary w-full"
                    value={item.efficiency}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
