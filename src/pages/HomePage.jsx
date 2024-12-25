import React from "react";
import { useEffect, useContext } from "react";
import { NavContext } from "../context/nav.context";

export default function HomePage() {
  const { setBackgroundColor, setTextColor, setLogo, setBorderColor } =
    useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#C7D9A6]");
    setTextColor("text-white");
    setBorderColor("border-white");
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#C7D9A6] flex items-center flex-1 min-h-screen">
        <div className="max-w-6xl mx-auto text-left">
          <div>
            <h1 className="text-[#1a2e35] text-5xl font-semibold mb-6 leading-tight ">
              Hi, I'm Sofia Morales, <span className="font-extrabold">UX/UI designer & Web developer </span>
              ✧ Crafting simple and innovative user experiences. 
              ✧ Making people's lives a little simpler through design ✧₊˚
            </h1>
            
            <div className="my-10 flex flex-col justify-center gap-2">
              <a href="#"  target="_blank" className="bg-[#1a2e35] rounded-3xl transition-colors hover:bg-[white] hover:text-[#1a2e35] px-3.5 py-2.5 shadow-sm w-60 font-bold text-white text-center">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-[#1a2e35] mb-12">
          Recent projects
        </h2>
      </div>
    </div>
  );
}
