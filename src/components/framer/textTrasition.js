"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const TextTrasition = ({
  name,
  x,
  y,
  scale,
  initialScale,
  initialPosX,
  initialPosY,
  duration = "0.8"
}) => {
  return (
    <>
      <Box
        component={motion.div}
        sx={{ position: "relative" }}
        initial={{ x: x, y: y, scale: scale }}
        whileInView={{ x: initialPosX, y: initialPosY, scale: initialScale }}
        transition={{ duration: duration}}
      >
        {name}
      </Box>
    </>
  );
};

export default TextTrasition;
