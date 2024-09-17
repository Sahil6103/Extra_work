import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import { Home } from "./components/Home";
import { Layout } from "./Layout";
import { AboutPage } from "./components/Pages/AboutPage";
import { ContactPage } from "./components/Pages/ContactPage";
import { ProjectPage } from "./components/Pages/ProjectPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/contact-me" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
