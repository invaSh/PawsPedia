import React from "react";
import Lottie from "lottie-react";
import Pre from "../assets/animations/Preloader.json";

const Preloader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={Pre}
        style={{
          width: "200px",
        }}
      />
    </div>
  );
};

export default Preloader;
