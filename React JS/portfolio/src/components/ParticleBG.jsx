import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../assets/particlesjs-config.json";
// const particlesConfig = require("../assets/particlesjs-config.json");

export const ParticleBG = () => {
  return (
    <Particles
      id="tsparticles"
      options={particlesConfig} // Use your JSON configuration
    />
  );
};
