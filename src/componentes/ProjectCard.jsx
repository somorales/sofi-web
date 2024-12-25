import React from "react";

export default function ProjectCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg p-6 mb-6 flex flex-col md:flex-row gap-6 items-center border border-opacity-40 border-[#2B2B2B]">
      <div className="w-full md:w-1/3">
        <img src={image} alt={title} className="rounded-lg w-[400px] h-auto" />
      </div>
      <div className="w-full md:w-2/3">
        <div className="md:w-4/5 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <button className="w-full rounded-3xl  bg-[#48376C] text-white py-3 px-6 hover:bg-[#C7BDDD] hover:text-[#48376C] transition-colors">
            View project
          </button>
        </div>
      </div>
    </div>
  );
}
