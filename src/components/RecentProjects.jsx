import React from "react";
import ProjectCard from "./ProjectCard";
import coverMuqui from "../assets/images/muqui-high-fidelity.png";
import coverProgif from "../assets/images/progif.png";

export default function RecentProjects() {
  const projects = [
    {
      image: coverMuqui,
      title:
        "How can we help university students to have better collaborative work?",
      description:
        "Muqui is a dynamic and collaborative project management platform that leverages virtual pets and worlds to create a fun and friendly experience. The solution aims to foster collective responsibility and reduce collaboration-related stress.",
      link: "/projects/muqui",
    },
    {
      image: coverProgif ,
      title: "How to make it easier to find the ideal gift?",
      description:
        "ProGift effectively and meaningfully connects gifts with personal interests, transforming the art of gift-giving into a thoughtful, personalized experience.",
      link: "#",
    },
    {
      image: "https://placehold.co/400x400?text=Image",
      title:
        "How can we help university students to have better collaborative work?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra porttitor sapien eget magna arcu egestas pretium vitae in.",
      link: "#",
    },
  ];
  return (
    <div id="projects" className="bg-[#F4F2F7]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#48376C] mb-12">
          Recent projects
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
