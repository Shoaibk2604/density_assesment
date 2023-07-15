import { Box } from '@mui/material'
import React from 'react'
import {motion} from "framer-motion";
const Ball = ({color,height,width,x,y}) => {
  return (
    <>
      <Box
      component={motion.div}
    style={{
        position:"absolute",
      height: height,
      width: width,
      borderRadius:"50%",      
      background: color,
    }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x:x , y:y, scale: [1, 1.2, 1.4, 1, 1] }}
    animate={{
      transition: {
        duration: 6,
        ease:"easeInOut"
      },
    }}
  ></Box>
    </>
  )
}

export default Ball
