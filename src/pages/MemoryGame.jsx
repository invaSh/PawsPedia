import React, { useState, useEffect } from "react";
import MemoryMatchingGame from "../pixi/MemoryMatchingGame";

const MemoryGame = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (!rendered) {
      MemoryMatchingGame();
      setRendered(true);
    }
  }, [rendered]);

  return <div id="canvasCont" style={{ width: "100%", height: "100%" }}></div>;
};

export default MemoryGame;
