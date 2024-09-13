import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Inline } from "./Inline";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Inline />
  </StrictMode>
);
