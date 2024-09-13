import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skill } from "./components/Skill";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollContainer } from "./components/ScrollContainer";

export const Home = () => {
  return (
    <>
      <ScrollContainer>
        <Header />
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </ScrollContainer>
    </>
  );
};
