import React, { useEffect, useContext, useState, useRef } from "react";
import { NavContext } from "../context/nav.context";
import CenteredContainer from "../components/CenteredContainer";
import muquiStartImage from "../assets/images/muqui-start.png";
import muquiOnboardingImage from "../assets/images/muqui-onboarding.png";
import muquiLogoImage from "../assets/images/muqui-logo.png";
import obsImage from "../assets/images/obs.png";
import userPersonaImage from "../assets/images/user-persona.png";
import divergenceImage from "../assets/images/divergence.png";
import convergenceImage from "../assets/images/convergence.png";
import solutionValidationImage from "../assets/images/solution-validation.png";
import muquiFinalSolutionImage from "../assets/images/muqui-final-solution.png";
import muquiWatermarkImage from "../assets/images/muqui-watermark.png";
import muquiLowFidelityImage from "../assets/images/muqui-low-fidelity.png";
import muquiHighFidelityImage from "../assets/images/muqui-high-fidelity.png";
import muquiUIToolkitImage from "../assets/images/ui-toolkit.png";
import muquiResult1Image from "../assets/images/muqui-result-1.png";
import muquiResult2Image from "../assets/images/muqui-result-2.png";
import muquiResult3Image from "../assets/images/muqui-result-3.png";

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
                src={muquiStartImage}
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
            src={muquiLogoImage}
            className="md:h-[155px] md:-mt-16"
            alt="Muqui Logo"
          />
          <img
            src={muquiOnboardingImage}
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

          <img src={userPersonaImage} />
        </CenteredContainer>
      </div>

      <div className="bg-white py-20">
        <CenteredContainer>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#48376C] mb-6">
              Ideation
            </h2>
            <div className="relative md:h-[660px]" ref={containerRef}>
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
            <p className="mt-5">
              <b>✧</b> We conducted a{" "}
              <span className="text-[#48376C] font-semibold">divergence</span>{" "}
              exercise for idea generation, and a{" "}
              <span className="text-[#48376C] font-semibold">convergence</span>{" "}
              exercise for decision-making.
            </p>
            <p className="mt-5">
              <b>✧</b> With this exercise, we chose the most innovative and
              feasible ideas and arrived at our initial solution.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#48376C] mb-6">
              Initial Solution
            </h2>
            <p className="text-[#48376C] text-lg font-semibold mb-6">
              Collaborative management platform that uses a virtual pet to
              promote teamwork. The team unites efforts to maintain the pet's
              well-being, which promotes shared responsibility and reduces
              collaboration-related stress.
            </p>

            <p className="text-black">
              With this proposal, our objective was for students to establish a
              special bond with their virtual pet while benefiting from a task
              manager designed to alleviate the team's workload. Ensure the
              virtual pet's well-being through students' commitment to its care.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#48376C] mb-6">
              Validation
            </h2>
            <p className="text-black mb-6">
              In this stage we conducted 3 exercises, asking ourselves{" "}
              <span className="italic font-extralight">
                is this what students need?
              </span>
            </p>

            <img src={solutionValidationImage} alt="solution validation" />

            <p className="text-xl text-black mt-6">
              This is how we arrived at our final solution, giving a twist to
              our primary idea:
            </p>
          </section>
        </CenteredContainer>
      </div>

      <div className="bg-[#F4F2F7] py-20">
        <CenteredContainer>
          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-[#48376C] mb-6">
              Final solution
            </h2>
            <div className="md:grid md:grid-cols-2">
              <p className="text-2xl text-[#48376C] mt-5 leading-loose">
                Muqui is a dynamic and collaborative project management platform
                that uses virtual pets and worlds to create a fun and friendly
                experience. This solution aims to promote collective
                responsibility and reduce the stress associated with
                collaboration.
              </p>
              <img
                src={muquiFinalSolutionImage}
                className="px-5 -mt-20"
                alt="Muqui Concept."
              />
            </div>
          </section>
        </CenteredContainer>
      </div>

      <div className="relative bg-[#EECFFF]">
        <CenteredContainer className="md:h-[940px]">
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <img
              src={muquiWatermarkImage}
              className="md:h-96"
              alt="Muqui logo"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-start py-16 px-28">
            <h1 className="text-6xl font-bold text-purple-900">Prototype</h1>
          </div>
        </CenteredContainer>
      </div>

      <div className="bg-white py-20">
        <CenteredContainer>
          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-[#48376C] mb-6">
              Low fidelity
            </h2>
            <p className="mb-5">
              We conducted two low-fidelity prototype iterations with 5
              participants in each iteration, after defining the user flow in
              our application. The objective was to perform usability and
              concept testing.
            </p>
            <p className="mb-10">
              We created interactive prototypes for each user flow. During the
              tests, participants performed various activities and exercises in
              our prototype, providing us with initial feedback, identifying
              blockers and improvement ideas that we implemented in the next
              prototype phase.
            </p>
            <img
              src={muquiLowFidelityImage}
              className="mb-5"
              alt="Muqui Low Fidelity"
            />
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-[#48376C] mb-6">
              High fidelity
            </h2>
            <p className="mb-5">
              After completing the low-fidelity prototype, we moved on to
              building the high-fidelity solution. The objective of this model
              is to show the solution as close to reality as possible. We
              started using pre-built UI elements and organically began creating
              and adapting our own UI Kit in the prototype, which we will see
              later.
            </p>

            <p className="mb-10">
              The iterations consisted of a guerrilla-style test and a UX
              writing design critique where in both cases we captured the
              reactions, comments, and suggestions from the interviewees to
              apply to our next prototyping stage, the final product.
            </p>

            <img
              src={muquiHighFidelityImage}
              className="mb-5"
              alt="Muqui High Fidelity"
            />
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-[#48376C] mb-6">
              UI Toolkit
            </h2>
            <p className="mb-5">
              In our project, we developed a style guide to ensure visual
              consistency. We opted for organic shapes that convey adaptability,
              unity, movement, globality, and reliability, avoiding the coldness
              of rectangular forms. Regarding colors, we chose purple for its
              association with fantasy and creativity, complemented by soft
              tones that evoke sensitivity and empathy.
            </p>
            <p className="mb-10">
              Following the atomic design methodology, we identified,
              prioritized, and created atoms, molecules, and organisms elements.
              This way, we created a guide of +50 scalable and reusable
              component symbols.
            </p>
            <img src={muquiUIToolkitImage} alt="Muqui UI Toolkit" />
          </section>
        </CenteredContainer>
      </div>

      <div className="bg-[#F4F2F7] py-20">
        <CenteredContainer>
          <section className="mb-16">
            <h2 className="text-4xl font-semibold text-[#48376C] mb-6">
              Result
            </h2>
            <div className="text-2xl text-[#48376C] mb-10 flex gap-4">
              <div>✧</div>
              <p>
                Muqui is a team project management tool that encourages
                collaboration in a virtual environment. It facilitates task
                management and promotes assertive communication between team
                members.
              </p>
            </div>
            <img src={muquiResult1Image} alt="Muqui Results" />
            <img src={muquiResult2Image} alt="Muqui Results" />
            <img src={muquiResult3Image} alt="Muqui Results" />
          </section>
        </CenteredContainer>
      </div>
    </div>
  );
}
