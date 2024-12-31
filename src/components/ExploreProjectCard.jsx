import React from "react";

export default function ExploreProjectCard({
  image,
  title,
  description,
  tags,
  link,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
      <div className="bg-gray-200 w-[300px] h-[250px] rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 min-h-[80px]">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-[#48376C] text-xs font-medium px-4 py-1 rounded-3xl border border-[#6C53A2]"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        className="bg-[#48376C] text-white text-sm font-medium rounded-3xl py-3 px-6 hover:bg-[#C7BDDD] hover:text-[#48376C] text-center"
      >
        View project
      </a>
    </div>
  );
}
