import React from "react";
import { useEffect, useContext } from "react";
import { NavContext } from "../context/nav.context";

export default function HomePage() {
  const { setBackgroundColor, setTextColor, setLogo, setBorderColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#392F5A]");
    setTextColor("text-white");
    setBorderColor("border-white")
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#e2e7d8] py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-[#1a2e35] text-5xl font-bold mb-6 leading-tight">
            Hi, My name is Sofia, I'm a Web Developer and UX/UI Designer based in Barcelona.
          </h1>
          <h2 className="text-[#1a2e35] text-4xl font-bold mb-12">
            Welcome to my portfolio!
          </h2>
          <button className="bg-[#1a2e35] text-white px-8 py-3 rounded-full hover:bg-[#2c444d] transition-colors">
            Download CV
          </button>
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
