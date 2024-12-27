import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../context/nav.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn);

export default function NavBar() {
  const { backgroundColor, textColor, logo, borderColor } =
    useContext(NavContext);

  return (
    <header>
      {/* Navigation */}
      <nav className={`p-4 ${backgroundColor}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center py-[2.125rem]">
          <Link to="/">
            <span className="sr-only">Sofi</span>
            <img alt="" src={logo} className="h-11 w-auto" />
          </Link>
          <div className="space-x-8 text-xl">
            <a href="/about" className="text-slate-700 hover:text-slate-900">
              About me
            </a>
            <a href="/projects" className="text-slate-700 hover:text-slate-900">
              Projects
            </a>
            <a href="https://www.linkedin.com/in/sofimorales/" target="_blank">
              <FontAwesomeIcon
                className="text-slate-700"
                icon="fa-brands fa-linkedin-in"
                size="lg"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
