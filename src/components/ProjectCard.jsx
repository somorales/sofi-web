import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ image, title, description, link, wip }) {
  return (
    <div className="bg-white rounded-lg p-6 mb-6 flex flex-col md:flex-row gap-12 items-center border border-opacity-40 border-[#2B2B2B]">
      <div className="w-full md:w-1/3 p-4 sm:p-6">
        <div className="relative w-full pb-[100%]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <div className="md:w-4/5 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
          <Link
            to={link}
            className="flex justify-center w-full rounded-3xl  bg-[#48376C] text-white py-3 px-6 hover:bg-[#C7BDDD] hover:text-[#48376C] transition-colors"
          >
            {wip ? "Coming soon" : "View project"}
          </Link>
        </div>
      </div>
    </div>
  );
}
