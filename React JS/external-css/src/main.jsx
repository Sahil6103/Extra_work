import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import { External } from "./External";
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <External />
  </StrictMode>
);
