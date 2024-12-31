import React, { useEffect, useContext } from "react";
import { NavContext } from "../context/nav.context";
import CenteredContainer from "../components/CenteredContainer";
import muquiStart from "../assets/images/muqui-start.png";
import muquiOnboarding from "../assets/images/muqui-onboarding.png";
import muquiLogo from "../assets/images/muqui-logo.png";
import obsImage from "../assets/images/obs.png";

export default function MuquiProjectPage() {
  const { setBackgroundColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#ECC5FC]");
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
    </div>
  );
}
