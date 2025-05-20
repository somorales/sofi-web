import React, { useEffect, useContext, useState, useRef } from "react";
import { NavContext } from "../context/nav.context";
import CenteredContainer from "../components/CenteredContainer";
import quickbiteStartImage from "../assets/images/quickbite-portada.png";
import quickbiteLogo from "../assets/images/quickbite-logo.png";
import quickbiteScreens from "../assets/images/quickbite-screens.png";

export default function QuickbiteProjectPage() {
  const { setBackgroundColor } = useContext(NavContext);
  const [isConverged, setIsConverged] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setBackgroundColor("bg-[#FFFDD0]");

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
      <div className="bg-[#FFFDD0] min-h-[85vh]">
        <CenteredContainer>
          <div className="md:grid md:grid-cols-5 md:items-center md:gap-14">
            <div className="md:col-span-3">
              <h1 className="text-4xl font-bold text-[#1C4C0D] leading-snug pb-40">
                Build Interactive Shopping Lists Straight <br />
                from Your Favorite Recipes.
              </h1>

              <div className="flex items-start ">
                <h2 className="text-2xl font-bold text-[#1C4C0D] w-48">
                  Timeline
                </h2>
                <p className="text-lg text-black pt-1">Five weeks</p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#1C4C0D] w-48">
                  Scope
                </h2>
                <p className="text-lg text-black pt-1">
                  Front-End Developer ✧ Back-End Developer ✧ UI Design
                </p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#1C4C0D] w-48">
                  Tools
                </h2>
                <p className="text-lg text-black pt-1">
                  HTML5 ✧ React ✧ JavaScript ✧ Tailwind ✧ OpenAi ✧ GitHub
                </p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#1C4C0D] w-48">
                  Device
                </h2>
                <p className="text-lg text-black pt-1">Mobile</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <img
                src={quickbiteStartImage}
                className="max-h-[700px]"
                alt="Lexi Onboarding Screen"
              />
            </div>
          </div>
        </CenteredContainer>
      </div>
      <div className="bg-[#FFFEE3]">
        <CenteredContainer>
          <img
            src={quickbiteLogo}
            className="md:h-[155px] md:-mt-16"
            alt="Lexi Logo"
          />
          <img
            src={quickbiteScreens}
            className="md:h-[700px] md:mt-10 md:mb-20"
            alt="Lexi Screens"
          />
        </CenteredContainer>
      </div>
      <div className="bg-white py-20">
        <CenteredContainer>
          <section className="mb-12">
            <h2 className="text-xl font-bold  text-[#1C4C0D] mb-6">
              Quick Bite is an app designed to simplify your cooking experience
              in an organized, efficient, and enjoyable way. Whether you’re a
              beginner in the kitchen or a meal-planning expert, Quick Bite
              helps you turn recipes into action with just a few clicks. More
              than just a recipe app, Quick Bite allows you to explore,
              personalize, and plan your meals effortlessly. With features that
              go beyond browsing, you can:
            </h2>
            <h2 className="text-gray-800 text-xl  leading-relaxed mb-4">
              ✔ Discover a wide variety of delicious recipes. <br /> ✔ Filter
              meals by cuisine, dietary preferences, and cooking time <br />✔
              Build your personalized weekly meal plan. <br />✔ Instantly
              generate a single, organized grocery list with all the ingredients
              you need.
            </h2>
            <h2 className="text-gray-800 text-xl  leading-relaxed">
              With Quick Bite, you’re not just collecting recipes—{" "}
              <span className=" text-[#1C4C0D] font-bold ">
                {" "}
                you’re streamlining your entire cooking journey from planning to
                shopping to plating.
              </span>{" "}
              Cooking becomes faster, smarter, and stress-free.
            </h2>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#1C4C0D] mb-6">
              Key challenges included:
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              ✧ Follow the given design while being able to handle the necessary
              changes during development, always aiming for a balance between
              design fidelity and technical feasibility. <br /> ✧ Implement a
              modular architecture that displays only essential functions in
              each context, avoiding an overloaded interface. <br /> ✧ Ensure
              that users can navigate intuitively between different sections.{" "}
              <br /> ✧ Implement the use of new technologies, such as OpenAI’s
              gpt-4o-mini model, to automatically generate a consolidated
              shopping list from a selection of recipes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C4C0D] mb-6">
              Key Features:
            </h2>
            <p className="text-gray-800 text-xl  leading-relaxed">
              ✧ Explore a wide variety of delicious, detailed recipes organized
              by category. <br /> ✧ Easily filter recipes by cuisine type,
              dietary restrictions, and cooking time to find exactly what you
              need. <br /> ✧ Add your favorite recipes to a personalized weekly
              meal list with just one click.
              <br /> ✧ Automatically generate a unified shopping list with all
              the ingredients from your selected recipes.
            </p>
          </section>
        </CenteredContainer>
      </div>

      <div className="relative bg-[#FFFEE3]">
        <CenteredContainer className="md:h-[940px]">
          <div className="absolute inset-0 flex items-center justify-center py-16 px-28">
            <p className="text-3xl font-semibold text-[#1C4C0D]">
              I developed this project with a strong focus on aligning the
              proposed design with the appropriate technologies. Throughout the
              process, I made key technical decisions and adapted to necessary
              changes, always striving to maintain consistency between design
              and development. My goal was to ensure both visual coherence and
              functional efficiency. Additionally, I explored innovative
              solutions—such as integrating OpenAI's technology—to enhance the
              app's capabilities and provide a smarter, more seamless user
              experience.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center py-16 px-28">
            <a
              href="https://qbite.netlify.app/"
              target="_blank"
              className="bg-[#1C4C0D] text-white text-sm font-medium rounded-3xl py-3 px-32  hover:bg-[#6B8E23] hover:text-white text-center mb-4"
            >
              View project
            </a>
            <a
              href="https://github.com/somorales/quickbite-frontend"
              target="_blank"
              className="bg-[#FFFEE3] text-[#1C4C0D] text-sm font-medium rounded-3xl py-3 px-32   hover:bg-[#6B8E23] hover:text-white text-center"
            >
              Source code
            </a>
          </div>
        </CenteredContainer>
      </div>
    </div>
  );
}
