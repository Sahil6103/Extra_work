import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { Services } from "./Services";
import { AboutUs } from "./AboutUs";
import { Contact } from "./Contact";
import { Modals } from "./Modals";
import { Tables } from "./Tables";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Slider />
    <Services />
    <AboutUs />
    <Contact />
    <Tables />
    <Modals />
  </StrictMode>
);
