import React, { useEffect, useContext } from "react";
import { NavContext } from "../context/nav.context";
import RecentProjects from "../components/RecentProjects";
import ExploreProjects from "../components/ExploreProjects";

export default function HomePage() {
  const { setBackgroundColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#C7D9A6]");
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#C7D9A6] flex items-center flex-1 min-h-screen p-6 xl:p-0">
        <div className="max-w-6xl mx-auto text-left">
          <div>
            <h1 className="text-[#1a2e35] text-4xl md:text-5xl font-semibold mb-6 leading-tight ">
              Hi, I'm Sofia Morales,{" "}
              <span className="font-extrabold">
                Web developer & UX/UI designer{" "}
              </span>
              ✧ Crafting simple and innovative user experiences. ✧ Making
              people's lives a little simpler through design ✧₊˚
            </h1>

            <div className="my-10 flex flex-col justify-center gap-2 items-center sm:items-start">
              <a
                href="/sofia-cv.pdf"
                target="_blank"
                className="w-full md:w-60 bg-[#1a2e35] rounded-3xl transition-colors border border-[#C7D9A6] hover:bg-[#C7D9A6] hover:border-[#1a2e35]  hover:text-[#1a2e35] px-3.5 py-2.5 shadow-sm font-bold text-white text-center"
              >
                My resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <RecentProjects />
      <ExploreProjects />
    </div>
  );
}
