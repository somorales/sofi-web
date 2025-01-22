import React from "react";
import ExploreProjectCard from "./ExploreProjectCard";
import travelStories from "../assets/images/travel-store.png";
import oscarWeb from "../assets/images/oscar-web.png";
import lex from "../assets/images/lex.png";

export default function ExploreProjects() {
  const projects = [
    {
      title: "TravelStories",
      image: travelStories,
      description:
        "TravelStories is an application that allows users to share their travel experiences through stories and narratives. ",
      tags: [
        "#UIDesign",
        "#HTML5",
        "#GitHub",
        "#CSS3",
        "#React",
        "#JavaScript",
      ],
      link: "https://travelstories-as.netlify.app/",
    },
    {
      title: "Oscar's Website",
      image: oscarWeb,
      description:
        "Personal website to dive into the work and creative process of a UX/UI designer.",
      tags: [
        "#UIDesign",
        "#Figma",
        "#HTML5",
        "#Tailwind",
        "#React",
        "#JavaScript",
      ],
      link: "https://oscar-web.netlify.app/",
    },
    {
      title: "Lex",
      image: lex,
      description:
        "LEX is an application designed to help you create connections, feel part of the city, and enjoy places and events that match your interests.",
      tags: ["#UserFlow", "#Wiframes", "#Figma", "#Prototipy", "#User Persona"],
      link: "https://www.figma.com/proto/uueyZqvBLime7g6Yj93FPm/Lex?page-id=0%3A1&node-id=292-7595&viewport=78%2C835%2C0.02&t=3ECUOK7kg4NEkAx9-1&scaling=contain&content-scaling=fixed&starting-point-node-id=292%3A7595&show-proto-sidebar=1",
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
