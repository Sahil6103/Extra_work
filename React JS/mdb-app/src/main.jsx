import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "mdb-react-ui-kit/dist/css/mdb.rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Container } from "./components/Container";
import { Card } from "./components/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Card />
  </StrictMode>
);
