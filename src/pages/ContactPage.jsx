import React, { useContext, useEffect } from "react";
import { NavContext } from "../context/nav.context";

export default function ContactPage() {
  const { setBackgroundColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#C7D9A6]");
  });
  return <div>Contact page</div>;
}
