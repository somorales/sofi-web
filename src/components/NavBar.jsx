import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavContext } from "../context/nav.context";

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
            <a href="#projects" className="text-slate-700 hover:text-slate-900">
              Projects
            </a>
            <a
              href="#experience"
              className="text-slate-700 hover:text-slate-900"
            >
              Experience
            </a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
