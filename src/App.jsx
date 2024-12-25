import "./App.css";
import { Routes, Route } from "react-router";

//pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}
