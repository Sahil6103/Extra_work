import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import { Home } from "./Home";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { ScrollContainer } from "./components/ScrollContainer";
import { ProjectPage } from "./Pages/ProjectPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/contact-me" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
    </ScrollContainer>
  </StrictMode>
);
