import React from "react";
import ProjectCard from "./ProjectCard";
import coverMuqui from "../assets/images/cover-muqui.png";
import coverLexi from "../assets/images/cover-lexi.png";

export default function RecentProjects() {
  const projects = [
    {
      image: coverLexi,
      title:
        "Optimize your language learning in an intuitive and personalized way",
      description:
        "Lexi is an innovative language learning app that offers personalized, intuitive tools and an interactive dictionary experience, designed to optimize your learning process and adapt to your  needs.",
      link: "/projects/lexi",
    },
    {
      image: coverMuqui,
      title:
        "How can we help university students to have better collaborative work?",
      description:
        "Muqui is a dynamic and collaborative project management platform that leverages virtual pets and worlds to create a fun and friendly experience. The solution aims to foster collective responsibility and reduce collaboration-related stress.",
      link: "/projects/muqui",
    },
  ];
  return (
    <div id="projects" className="bg-[#F4F2F7]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl xl:text-4xl font-bold text-[#48376C] mb-12">
          Projects
        </h1>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
