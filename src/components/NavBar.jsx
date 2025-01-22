import React from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavContext } from "../context/nav.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";

library.add(faLinkedinIn);

export default function NavBar() {
  const { backgroundColor, textColor, logo, borderColor } =
    useContext(NavContext);
  const location = useLocation();

  const getStyleIfOnPage = (page) => {
    return location.pathname == page ? "font-bold" : "";
  };

  return (
    <header>
      {/* Navigation */}
      <nav className={`p-4 ${backgroundColor}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center py-[2.125rem]">
          <Link to="/">
            <span className="sr-only">Sofi</span>
            <img alt="" src={logo} className="h-8 xl:h-11 w-auto" />
          </Link>
          <div className="flex flex-row justify-between gap-8 text-xl">
            <Link
              to="/about"
              className={`${getStyleIfOnPage(
                "/about"
              )} text-slate-700 hover:text-slate-900 hover:font-bold`}
            >
              About me
            </Link>
            <HashLink
              smooth
              to="/#projects"
              className={`${getStyleIfOnPage(
                "/#projects"
              )} text-slate-700 hover:text-slate-900 hover:font-bold`}
            >
              Projects
            </HashLink>
            <Link to="https://www.linkedin.com/in/sofimorales/" target="_blank">
              <FontAwesomeIcon
                className="text-slate-600 hover:text-slate-900 hover:font-bold"
                icon="fa-brands fa-linkedin-in"
                size="lg"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
