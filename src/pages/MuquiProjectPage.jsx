import React, { useEffect, useContext, useState, useRef } from "react";
import { NavContext } from "../context/nav.context";
import CenteredContainer from "../components/CenteredContainer";
import muquiStart from "../assets/images/muqui-start.png";
import muquiOnboarding from "../assets/images/muqui-onboarding.png";
import muquiLogo from "../assets/images/muqui-logo.png";
import obsImage from "../assets/images/obs.png";
import userPersona from "../assets/images/user-persona.png";
import divergenceImage from "../assets/images/divergence.png";
import convergenceImage from "../assets/images/convergence.png";

export default function MuquiProjectPage() {
  const { setBackgroundColor } = useContext(NavContext);
  const [isConverged, setIsConverged] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setBackgroundColor("bg-[#ECC5FC]");

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
      <div className="bg-[#ECC5FC] min-h-[85vh]">
        <CenteredContainer>
          <div className="md:grid md:grid-cols-5 md:items-center md:gap-16">
            <div className="md:col-span-3">
              <h1 className="text-4xl font-bold text-[#48376C] leading-snug pb-40">
                Revolutionizing University <br />
                Collaboration Through Gamification.
              </h1>

              <div className="flex items-start ">
                <h2 className="text-2xl font-bold text-[#48376C] w-48">
                  Timeline
                </h2>
                <p className="text-lg text-black pt-1">Nov 2022 - May 2023</p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#48376C] w-48">
                  Scope
                </h2>
                <p className="text-lg text-black pt-1">
                  User Research ✧ UX Design ✧ UI Design ✧Design thinking
                </p>
              </div>

              <div className="flex items-start mt-8">
                <h2 className="text-2xl font-bold text-[#48376C] w-48">
                  Tools
                </h2>
                <p className="text-lg text-black pt-1">
                  Figma ✧ FigJam ✧ Notion ✧ Miro
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
                src={muquiStart}
                className="max-h-[700px]"
                alt="Muqui Onboarding Screen"
              />
            </div>
          </div>
        </CenteredContainer>
      </div>
      <div className="bg-[#F4F2F7]">
        <CenteredContainer>
          <img
            src={muquiLogo}
            className="md:h-[155px] md:-mt-16"
            alt="Muqui Logo"
          />
          <img
            src={muquiOnboarding}
            className="md:h-[700px] md:mt-10 md:mb-20"
            alt="Muqui Onboarding Screens"
          />
        </CenteredContainer>
      </div>

      <div className="bg-white py-20">
        <CenteredContainer>
          <h1 className="text-3xl font-semibold text-[#48376C] mb-12">
            How can we support university students in maintaining good mental
            health?
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#48376C] mb-6">
              Context
            </h2>
            <p className="text-gray-800 leading-relaxed">
              The literature on academic stress highlights that social
              interactions among college students are one of the most important
              contributors to stress in an academic environment. Access to
              university involves several periods of transition that may require
              significant adaptation, cause distress, and affect the mental
              health and well-being of young people.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#48376C] mb-6">
              Understanding the problem space
            </h2>
            <p className="text-gray-800 leading-relaxed">
              To begin addressing the research question, we focused on young
              students in their first years of university. We conducted
              interviews with the objective of understanding their context, the
              experiences they are living through, and the challenges they face
              in managing their emotions during this period of transition and
              changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#48376C] mb-6">
              What did the students tell us?
            </h2>
            <p className="text-gray-800 leading-relaxed">
              We have found a series of patterns and frustrations related to
              collaborative work. The lack of clear responsibilities, lack of
              coordination, and ineffective communication are some of the
              factors that trigger stress in students when facing group work.
            </p>
          </section>
        </CenteredContainer>
      </div>

      <div className="bg-[#F4F2F7]">
        <CenteredContainer className={"px-10 py-20"}>
          <img src={obsImage} className="md:max-h-[700px]" alt="observations" />
          <p className="pt-10">
            <b>✧</b> During our interview stage, we noticed that our questions
            were not adequately addressing the difficulties that students
            mentioned. Therefore, we decided to adjust some questions and modify
            others. This change allowed us to much better understand the context
            and needs of the students we were seeking to help.
          </p>
        </CenteredContainer>
      </div>

      <div className="bg-white py-20">
        <CenteredContainer>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#48376C] mb-6">
              Final Insights
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              {/* Translation of the first paragraph */}
              When working in teams, students face high levels of{" "}
              <span className="text-[#48376C] font-semibold">
                stress and anxiety
              </span>
              . Students have
              <span className="text-[#48376C] font-semibold">
                {" "}
                difficulties managing their collaborative activities, handling
                their delivery times, and creating a sense of collective
                responsibility
              </span>
              . Students want to achieve quality work, collaborate efficiently
              and reduce their stress.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-[#48376C] mb-8">
              The problem
            </h2>
            <div className="bg-[#EECFFF] rounded-xl p-8 text-center">
              <h3 className="text-2xl text-[#48376C] leading-relaxed font-semibold">
                How can we help university students to have better collaborative
                work?
              </h3>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#48376C] mb-6">
              Our User
            </h2>
            <p className="text-gray-800 leading-relaxed">
              Before starting to ideate our solution we created{" "}
              <span className="text-[#48376C] font-semibold">Jose Maria</span>{" "}
              to understand how our audience sees themselves, empathizing with
              their context, problems, needs and motivations.
            </p>
          </section>

          <img src={userPersona} />
        </CenteredContainer>
      </div>

      <div className="bg-[#F4F2F7] py-20">
        <CenteredContainer>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#48376C] mb-6">
              Ideation
            </h2>
            <div className="relative md:h-[800px]" ref={containerRef}>
              <div
                className={`
                absolute inset-0
                transition-all duration-1000 ease-in-out
                ${isConverged ? "scale-0 opacity-0" : "scale-100 opacity-100"}
                transform origin-center
              `}
              >
                <img src={divergenceImage} alt="divergence image" />
              </div>
              <div
                className={`
                absolute inset-0
                transition-all duration-1000
                ${isConverged ? "scale-100 opacity-100" : "scale-0 opacity-0"}
              `}
              >
                <img src={convergenceImage} alt="convergence image" />
              </div>
            </div>
          </section>
        </CenteredContainer>
      </div>
    </div>
  );
}
