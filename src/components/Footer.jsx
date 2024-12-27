import React from "react";
import logoFooter from "../assets/images/logo-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faEnvelope);

export default function Footer() {
  return (
    <footer className="bg-[#063231] text-center text-white py-16 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="w-72 h-72 flex items-center justify-center mb-6">
          <img
            src={logoFooter}
            alt="Sofia Morales"
            className="rounded-lg w-auto h-auto"
          />
        </div>
      </div>
      <h3 className="text-3xl font-semibold mb-6 text-[#F9F5E3]">
        Thanks for stopping by!
      </h3>
      <div className="flex gap-5 items-center">
        <a href="mailto:sofimoralesroa92@gmail.com" target="_blank">
          <FontAwesomeIcon
            className="h-[42px] text-[#F9F5E3]"
            icon="fa-solid fa-envelope"
          />
        </a>

        <a href="https://www.linkedin.com/in/sofimorales/" target="_blank">
          <FontAwesomeIcon
            className="h-[40px] text-[#F9F5E3]"
            icon="fa-brands fa-linkedin"
          />
        </a>
        <a href="https://github.com/somorales" target="_blank">
          <FontAwesomeIcon
            className="h-[40px] text-[#F9F5E3]"
            icon="fa-brands fa-github"
          />
        </a>
      </div>
    </footer>
  );
}
