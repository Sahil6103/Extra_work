import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Feedback } from "./Feedback";
import { Gallery } from "./Gallery";
import { Footer } from "./Footer";
import { ScrollContainer } from "./ScrollContainer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollContainer>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Feedback />
      <Footer />
    </ScrollContainer>
  </StrictMode>
);
