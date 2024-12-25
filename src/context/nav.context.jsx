import { createContext, useState } from "react";
import logoSM from "../assets/imagenes/sm.png"

const NavContext = createContext();

function NavWrapper(props) {
  const [backgroundColor, setBackgroundColor] = useState("bg-[#392F5A]");
  const [textColor, setTextColor] = useState("text-white");
  const [logo, setLogo] = useState(logoSM);
  const [borderColor, setBorderColor] = useState("border-white");

  const ctx = {
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    logo,
    setLogo,
    borderColor,
    setBorderColor
  };

  return (
    <NavContext.Provider value={ctx}>{props.children}</NavContext.Provider>
  );
}

export { NavContext, NavWrapper };
