import React from "react";
import ProjectCard from "./ProjectCard";

export default function RecentProjects() {
  const projects = [
    {
      image: "https://placehold.co/400x400?text=Image",
      title:
        "How can we help university students to have better collaborative work?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra porttitor sapien eget magna arcu egestas pretium vitae in.",
    },
    {
      image: "https://placehold.co/400x400?text=Image",
      title: "How to make it easier to find the ideal gift?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra porttitor sapien eget magna arcu egestas pretium vitae in.",
    },
    {
      image: "https://placehold.co/400x400?text=Image",
      title:
        "How can we help university students to have better collaborative work?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra porttitor sapien eget magna arcu egestas pretium vitae in.",
    },
  ];
  return (
    <div className="bg-[#F4F2F7]">
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
