import React from "react";
import { useEffect, useContext } from "react";
import { NavContext } from "../context/nav.context";

export default function ContactPage() {
  const { setBackgroundColor, setTextColor, setLogo, setBorderColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#392F5A]");
    setTextColor("text-white");
    setBorderColor("border-white");
  });
  return (
    <div>Contact page</div>
  );
}
