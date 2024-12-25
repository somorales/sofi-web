import React from "react";
import ExploreProjectCard from "./ExploreProjectCard";

export default function ExploreProjects() {
  const projects = [
    {
      title:
        "How can we help university students to have better collaborative work?",
      image: "https://placehold.co/300x250?text=Image",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra porttitor sapien eget magna arcu egestas pretium vitae in.",
      tags: [
        "#DesignThinking",
        "#UXResearch",
        "#UIDesign",
        "#Figma",
        "#Prototype",
      ],
    },
    {
      title: "How to make it easier to find the ideal gift?",
      image: "https://placehold.co/300x250?text=Image",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra porttitor sapien eget magna arcu egestas pretium vitae in.",
      tags: [
        "#DesignThinking",
        "#UXResearch",
        "#UIDesign",
        "#Figma",
        "#Prototype",
      ],
    },
    {
      title:
        "How can we help university students to have better collaborative work?",
      image: "https://placehold.co/300x250?text=Image",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra porttitor sapien eget magna arcu egestas pretium vitae in.",
      tags: [
        "#DesignThinking",
        "#UXResearch",
        "#UIDesign",
        "#Figma",
        "#Prototype",
      ],
    },
  ];

  return (
    <div className="bg-[#F4F2F7]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#48376C] mb-12">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
