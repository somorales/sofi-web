import React from "react";
import ExploreProjectCard from "./ExploreProjectCard";
import travelStories from "../assets/images/travel-store.png";
import oscarWeb from "../assets/images/oscar-web.png";
import lex from "../assets/images/lex.png";
import quiz from "../assets/images/quiz.png";
import ao from "../assets/images/cover-AO.png";

export default function ExploreProjects() {
  const projects = [
    {
      title: "AOPY",
      image: ao,
      description:
        "Inventory management for the Paraguayan store AO. Admin users can manage products. Users can search for products and favorite them.",
      tags: [
        "#React",
        "#Tailwind",
        "#Responsive",
        "#Mongoose",
        "#MongoDB",
        "#Express",
      ],
      link: "https://ao-py.netlify.app/",
      git: "https://github.com/somorales/ao-frontend",
    },
    {
      title: "TravelStories",
      image: travelStories,
      description:
        "TravelStories is an application that allows users to share their travel experiences through stories and narratives. ",
      tags: [
        "#Bootstrap",
        "#HTML5",
        "#CSS3",
        "#React",
        "#JavaScript",
        "#Node.js",
      ],
      link: "https://travelstories-as.netlify.app/",
      git: "https://github.com/somorales/Viajes",
    },
    {
      title: "Oscar's Website",
      image: oscarWeb,
      description:
        "Personal website to dive into the work and creative process of a UX/UI designer.",
      tags: [
        "#UIDesign",
        "#Figma",
        "#Tailwind",
        "#HTML5",
        "#React",
        "#JavaScript",
      ],
      link: "https://oscar-web.netlify.app/",
      git: "https://github.com/somorales/oscar-web",
    },
    {
      title: " What would I choose?",
      image: quiz,
      description:
        "‘What Would I Choose’ is a question game that challenges you to discover how you would react in fun and surprising situations. Play and put your self-knowledge to the test!",
      tags: [
        "#HTML5",
        "#React",
        "#JavaScript",
        "#GitHub",
        "#Tailwind",
        "#Figma",
      ],
      link: "https://what-woud-i-choose.netlify.app/",
      git: "https://github.com/somorales/quiz",
    },

    {
      title: "Lex",
      image: lex,
      description:
        "LEX is an application designed to help you create connections, feel part of the city, and enjoy places and events that match your interests.",
      tags: ["#UserFlow", "#Wiframes", "#Figma", "#Prototipy", "#User Persona"],
      link: "https://www.figma.com/proto/uueyZqvBLime7g6Yj93FPm/Lex?page-id=0%3A1&node-id=101-4380&starting-point-node-id=98%3A4430&scaling=scale-down-width&content-scaling=fixed&t=Oxdz5EhkSkeFPgzU-1",
    },
  ];

  return (
    <div className="bg-[#F4F2F7]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl xl:text-4xl font-bold text-[#48376C] mb-12">
          More to explore
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ExploreProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.tags}
              link={project.link}
              git={project.git}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
