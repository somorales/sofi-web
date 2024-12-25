import React from "react";
import { useEffect, useContext } from "react";
import { NavContext } from "../context/nav.context";

export default function AboutPage() {
  const { setBackgroundColor, setTextColor, setLogo, setBorderColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#392F5A]");
    setTextColor("text-white");
    setBorderColor("border-white")
  });

  return (
    <div>
      About Page
    </div>
  );
}
