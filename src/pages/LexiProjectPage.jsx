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
                <h2 className="text-2xl font-bold text-[#4D3E7F] w-48">
                  Timeline
                </h2>
                <p className="text-lg text-black pt-1">Two weeks</p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#4D3E7F] w-48">
                  Scope
                </h2>
                <p className="text-lg text-black pt-1">
                  Front-End Developer ✧ Back-End Developer ✧ UI Design
                </p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#4D3E7F] w-48">
                  Tools
                </h2>
                <p className="text-lg text-black pt-1">
                  HTML5 ✧ React ✧ JavaScript ✧ Tailwind ✧ Figma ✧ GitHub
                </p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#4D3E7F] w-48">
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
      <div className="bg-white py-20">
        <CenteredContainer>
          <section className="mb-12">
            <h2 className="text-xl font-bold  text-[#48376C] mb-6">
              Lexi is an app designed to enhance your language learning in an
              intuitive and personalized way. Whether you're starting from
              scratch or looking to expand your vocabulary, Lexi transforms the
              process into a dynamic, and engaging experience. More than just a
              dictionary, Lexi allows you to contribute and develop your own
              vocabulary, which will help you:
            </h2>
            <h2 className="text-gray-800 text-xl  leading-relaxed mb-4">
              ✔ Communicate fluently. <br /> ✔ Improve comprehension. <br />✔
              Speak with confidence. <br />✔ Think in the language.
            </h2>
            <h2 className="text-gray-800 text-xl  leading-relaxed">
              With Lexi, you're not just learning words{" "}
              <span className=" text-[#48376C] font-bold ">
                {" "}
                you’re building a vocabulary tailored to your communication
                style,
              </span>{" "}
              making language learning more effective and personalized.
            </h2>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#48376C] mb-6">
              Key challenges included:
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              ✧ Design a clear interface without overwhelming users with too
              many visible options at once. <br /> ✧ Implement a modular
              architecture that displays only essential functions in each
              context, avoiding an overloaded interface. <br /> ✧ Ensure that
              users can navigate intuitively between different sections
              (dictionary, saved words, exercises, etc.). <br /> ✧ Prevent long
              loading times that could negatively impact the user experience.{" "}
              <br /> ✧ Optimize performance using techniques like caching.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#48376C] mb-6">
              Key Features:
            </h2>
            <p className="text-gray-800 text-xl  leading-relaxed">
              ✧ Save new words along with their meaning, translation, and
              example sentences to remember them better. <br /> ✧ Listen to the
              pronunciation of each word to perfect your accent. <br /> ✧ Create
              your own personalized dictionary and access it whenever you need.
            </p>
          </section>
        </CenteredContainer>
      </div>

      <div className="relative bg-[#ECE9F6]">
        <CenteredContainer className="md:h-[940px]">
          <div className="absolute inset-0 flex items-center justify-center py-16 px-28">
            <p className="text-3xl font-semibold text-[#4D3E7F]">
              I developed this project to integrate my knowledge of UX/UI and
              web development, recognizing how both fields complement each other
              to enhance the user experience. UX/UI guided the creation of an
              intuitive interface, while web development ensured fast and
              efficient performance. By combining both, I optimized usability
              and functionality, resulting in an app that is both visually
              appealing and smooth to use.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center py-16 px-28">
            <a
              href="https://lexi-words.netlify.app/"
              target="_blank"
              className="bg-[#4D3E7F] text-white text-sm font-medium rounded-3xl py-3 px-32  hover:bg-[#C8B8FB] hover:text-[#48376C] text-center mb-4"
            >
              View project
            </a>
            <a
              href="https://github.com/somorales/words-frontend"
              target="_blank"
              className="bg-[#ECE9F6] text-[#4D3E7F] text-sm font-medium rounded-3xl py-3 px-32   hover:bg-[#C8B8FB] hover:text-[#48376C] text-center"
            >
              Source code
            </a>
          </div>
        </CenteredContainer>
      </div>
    </div>
  );
}
