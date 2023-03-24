import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Projets from "./pages/Projets";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <About />
      <Projets />
      <Contact />
      <Footer />

      {/* <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
