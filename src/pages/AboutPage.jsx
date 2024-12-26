import React from "react";
import sofiAbout from "../assets/imagenes/sofi-about.png";
import sofiPic from "../assets/imagenes/sofi-pic.png";

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
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#C7D9A6] min-h-[85vh] mb-28">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-20 relative">
          <img
            src={sofiAbout}
            className="h-[150px] mt-40"
            alt="Sofia Morales. Keep It Simple."
          />
          <img src={sofiPic} className="absolute md:top-[400px]" alt="Sofia Morales" />
        </div>
      </div>

      {/* Bio Section */}

      <div className="max-w-6xl mx-auto p-8 space-y-8">
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
    </div>
  );
}
