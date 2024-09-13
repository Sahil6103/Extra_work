import React from "react";
import { Header } from "./components/User/Header";
import { Slider } from "./components/User/Slider";
import { Navbar } from "./components/User/Navbar";
import { Content } from "./components/User/Content";
import { Footer } from "./components/User/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <Content />
      <Footer />
    </>
  );
};
