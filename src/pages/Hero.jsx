import React, { useEffect } from "react";
import pixi from "../pixi/Hero";
const Hero = () => {

    useEffect( () => {
        pixi();
    })

  return <div id="canvasCont2" className="hero-canvas" style={{ width: "100%", height: "100%" }}>
  </div>;
};

export default Hero;
