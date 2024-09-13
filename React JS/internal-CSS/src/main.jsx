import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Internal } from "./Internal";
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Internal />
  </StrictMode>
);
