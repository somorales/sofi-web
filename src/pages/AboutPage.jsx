import React from "react";
import sofiAbout from "../assets/images/sofi-about.png";
import sofiPic from "../assets/images/sofi-pic.png";

export default function AboutPage() {
  const skills = [
    {
      category: "Design",
      items: [
        "UX Research",
        "UI Design",
        "Wireframing",
        "User Centered Design",
        "Design Thinking",
        "Figma",
        "Photoshop",
      ],
    },
    {
      category: "Development",
      items: [
        "Web design",
        "Figjam",
        "Miro",
        "Slack",
        "webflow",
        "React",
        "Node.js",
        "JavaScript",
      ],
    },
    {
      category: "Tools",
      items: [
        "Tailwind",
        "Express",
        "MongoDB",
        "HTML",
        "CSS",
        "REST API",
        "GitHub",
      ],
    },
  ];

  const educationData = [
    {
      school: "Ironhack",
      period: "Aug 2024 - Nov 2024",
      degree: "Full-stack JavaScript Web Development",
      description:
        "Intense and immersive bootcamp where we master the technical and project-management skills needed for a successful career in tech, learning how to develop great products in teams using modern workflows. Technologies learnt include: JavaScript(ES6), HTML, CSS, React, Git, GitHub, Node.js, Mongodb, Express.js.",
    },
    {
      school: "Escola Superior de Disseny ESDI",
      period: "Oct 2022 - Jul 2023",
      degree: "Master's Degree User Experience and Interface Design (UX/UI)",
      description:
        "The Master provided comprehensive training in the latest methodologies for designing and developing user-centered digital products and services. This program covered everything from conducting user research to creating, testing, and refining interactive designs based on real user feedback. The curriculum included UX research, interaction and interface design, agile methodologies, usability testing, UX writing, and immersive projects in design thinking and Lean UX.",
    },
  ];

  const experienceData = [
    {
      title: "UX Designer (Freelance)",
      period: "Nov 2023 - May 2024",
      bulletPoints: [
        "Lead the user experience design for a individualized gift recommendation engine.",
        "Create UX research strategies and design proposal.",
        "Conducted 12 ethnographic interviews to uncover gift-selection patterns, gain insights, and define the core problem.",
        "Involved in interactions design, wireframe development, usability testing",
      ],
    },
    {
      title: "Architect (Freelance)",
      period: "Mar 2019 - Jun 2021",
      bulletPoints: [
        "Lead several projects ranging from developing single-family units to designing and implementing the check-in area furniture for Paraguay's main airport.",
        "Worked with stakeholders, providers, and on-site personnel to ensure projects were on-track and met user needs.",
        "Participated in the creative process of design.",
      ],
    },
    {
      title: "Jr. Architect and Interior Designer (LL Design)",
      period: "Mar 2017 - Dec 2018",
      bulletPoints: [
        "Lead several projects ranging from developing single-family units to designing and implementing the check-in area furniture for Paraguay's main airport.",
        "Worked with stakeholders, providers, and on-site personnel to ensure projects were on-track and met user needs.",
        "Participated in the creative process of design.",
      ],
    },
    {
      title: "Jr. Architect (Architect Norma Martinez)",
      period: "Jan 2016 - Feb 2017",
      description:
        "Contributed to four projects where I performed one or more of the following activities:",
      bulletPoints: [
        "technical drawing and 3D modeling",
        "construction supervisor assistance",
        "municipality procedures",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#C7D9A6] min-h-[85vh]">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-20 relative">
          <img
            src={sofiAbout}
            className="h-[150px] mt-40"
            alt="Sofia Morales. Keep It Simple."
          />
          <img
            src={sofiPic}
            className="absolute md:top-[400px]"
            alt="Sofia Morales"
          />
        </div>
      </div>

      {/* Bio Section */}

      <div className="max-w-6xl mx-auto p-8 space-y-8 bg-[#F4F2F7] pt-28 pb-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-[#48376C]">
            Hello there! I am Sofi
          </h1>

          <p className="text-gray-800 leading-relaxed">
            Passionate{" "}
            <span className="font-semibold">
              Web developer and UX/UI designer
            </span>{" "}
            with a unique background in architecture and five years of
            experience crafting user-centered spaces. Recently graduated from
            Ironhack's full-stack web development bootcamp. My goal is to create
            intuitive, efficient, and responsive front-end solutions that
            simplify and enhance everyday life.
          </p>

          <p className="text-gray-800 leading-relaxed">
            I believe great user experience emerges at the intersection of
            functionality, simplicity, and style. My experience as an architect
            in Paraguay taught me to think big-picture first, collaborating with
            clients, teams, and suppliers to harmonize diverse needs and
            perspectives—skills that seamlessly translate to UX/UI and web
            development. Equipped with a Master's in UX/UI from ESDI (Barcelona)
            and a deep desire to solve problems, I'm ready to design and
            implement digital solutions that are not only beautiful but also
            functional and user-centered.
          </p>

          <p className="text-gray-800 leading-relaxed">
            I am now looking for opportunities to utilize and develop my current
            knowledge and experiences, whilst providing customers with
            beautifully functional, simple & stylish online solutions.
          </p>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#48376C]">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((category) =>
              category.items.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-2 bg-[#C7D9A6] text-gray-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 space-y-8 bg-white py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Web Developer & UX/UI Designer
        </h1>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          {educationData.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">{edu.school}</h3>
                <span className="text-gray-600">{edu.period}</span>
              </div>
              {edu.degree && (
                <h4 className="font-bold text-gray-800 mb-2">{edu.degree}</h4>
              )}
              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">{exp.title}</h3>
                <span className="text-gray-600">{exp.period}</span>
              </div>
              {exp.description && (
                <p className="text-gray-700 mb-2">{exp.description}</p>
              )}
              <ul className="list-disc pl-5 space-y-1">
                {exp.bulletPoints.map((point, idx) => (
                  <li key={idx} className="text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Resume Button */}
        <div className="my-10 flex flex-col justify-center gap-2">
          <a
            href="#"
            target="_blank"
            className="bg-[#1a2e35] rounded-3xl transition-colors border hover:bg-[#C7D9A6] hover:border-[#1a2e35]  hover:text-[#1a2e35] px-3.5 py-2.5 shadow-sm w-60 text-white text-center"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
}
