import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const MouseBall = () => {
  const [mousePos, setMousePos] = useState({});
  const x = mousePos.x ;
  const y = mousePos.y ;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX -180, y: event.clientY-120 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <Box
        component={motion.div}
        sx={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "lightskyblue",
          position: "absolute",
          zIndex: -5,
        }}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
    </>
  );
};

export default MouseBall;
