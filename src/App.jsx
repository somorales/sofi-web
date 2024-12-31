import "./App.css";
import { Routes, Route } from "react-router";

//pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MuquiProjectPage from "./pages/MuquiProjectPage";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/muqui" element={<MuquiProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}
