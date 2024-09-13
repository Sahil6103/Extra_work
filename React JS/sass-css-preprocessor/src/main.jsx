import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import "sass";
import { Sass } from "./Sass";
import "./assets/scss/style.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sass />
  </StrictMode>
);
