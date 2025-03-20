import React, { useEffect, useContext, useState, useRef } from "react";
import { NavContext } from "../context/nav.context";
import CenteredContainer from "../components/CenteredContainer";
import lexiStartImage from "../assets/images/lexi-portada.png";
import lexiLogo from "../assets/images/lexi-logo.png";
import lexiScreens from "../assets/images/lexi-screens.png";

export default function LexiProjectPage() {
  const { setBackgroundColor } = useContext(NavContext);
  const [isConverged, setIsConverged] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setBackgroundColor("bg-[#C8B8FB]");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when element is 100% visible
        if (entry.isIntersecting) {
          setIsConverged(true);
        } else {
          setIsConverged(false);
        }
      },
      {
        root: null, // use viewport as root
        threshold: 1, // trigger at 100% visibility
        rootMargin: "0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  });
  return (
    <div className="flex flex-col">
      <div className="bg-[#C8B8FB] min-h-[85vh]">
        <CenteredContainer>
          <div className="md:grid md:grid-cols-5 md:items-center md:gap-14">
            <div className="md:col-span-3">
              <h1 className="text-4xl font-bold text-[#4D3E7F] leading-snug pb-40">
                Create Your Own Interactive <br />
                Dictionary of Words and Phrases.
              </h1>

              <div className="flex items-start ">
                <h2 className="text-2xl font-bold text-[#48376C] w-48">
                  Timeline
                </h2>
                <p className="text-lg text-black pt-1">Two weeks</p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#48376C] w-48">
                  Scope
                </h2>
                <p className="text-lg text-black pt-1">
                  Front-End Developer ✧ Back-End Developer ✧ UI Design
                </p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#48376C] w-48">
                  Tools
                </h2>
                <p className="text-lg text-black pt-1">
                  HTML5 ✧ React ✧ JavaScript ✧ Tailwind ✧ Figma ✧ GitHub
                </p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#48376C] w-48">
                  Device
                </h2>
                <p className="text-lg text-black pt-1">Mobile</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <img
                src={lexiStartImage}
                className="max-h-[700px]"
                alt="Lexi Onboarding Screen"
              />
            </div>
          </div>
        </CenteredContainer>
      </div>
      <div className="bg-[#ECE9F6]">
        <CenteredContainer>
          <img
            src={lexiLogo}
            className="md:h-[155px] md:-mt-16"
            alt="Lexi Logo"
          />
          <img
            src={lexiScreens}
            className="md:h-[700px] md:mt-10 md:mb-20"
            alt="Lexi Screens"
          />
        </CenteredContainer>
      </div>
    </div>
  );
}
