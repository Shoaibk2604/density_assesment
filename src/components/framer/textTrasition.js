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
}) => {
  return (
    <>
      <Box
        component={motion.div}
        sx={{ position: "relative" }}
        initial={{ x: x, y: y, scale: scale }}
        whileInView={{ x: initialPosX, y: initialPosY, scale: initialScale }}
        transition={{ duration: 0.8 }}
      >
        {name}
      </Box>
    </>
  );
};

export default TextTrasition;
