import React from "react";
import logoFooter from "../assets/imagenes/logo-footer.png"
import linkedinLogo from "../assets/imagenes/in.png"
import mailLogo from "../assets/imagenes/mail.png"

export default function Footer() {
  return (
    <footer className="bg-[#063231] text-center text-white py-16 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="w-72 h-72 flex items-center justify-center mb-6">
          <img src={logoFooter} alt="Sofia Morales" className="rounded-lg w-auto h-auto" />
        </div>
      </div>
      <h3 className="text-3xl font-semibold mb-6 text-[#F9F5E3]">Thanks for stopping by!</h3>
      <div className="flex gap-4 items-center">
        <img src={mailLogo} className="flex items-center justify-center w-auto h-[50px]" />
        <img src={linkedinLogo} className="flex items-center justify-center w-auto h-[40px]" />
      </div>
    </footer>
  );
}
