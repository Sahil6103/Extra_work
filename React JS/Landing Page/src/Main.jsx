import React from "react";
import ReactDOM from "react-dom/client";
import { Haeder } from "./Haeder";
import { Hero } from "./Hero";
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Haeder />
    <Hero />
  </>
);
