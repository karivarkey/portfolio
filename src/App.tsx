import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./pages/Card";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      {!isMobile && <Header />}
      <Routes>
        <Route path="/" element={isMobile ? <Card /> : <Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
