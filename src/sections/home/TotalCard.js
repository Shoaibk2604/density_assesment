import TextTrasition from "@/components/framer/textTrasition";
import SliderCard from "@/components/slider/slider";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import {motion} from "framer-motion"
const TotalCard = () => {
  return (
    <React.Fragment>
      <Box py={10}>
        <Container>
          <Stack direction="row" spacing={2} pb={6}>
            <Typography variant="h2" component="div">
              <TextTrasition
                name="Does This Sound familiar..."
                x="-10rem"
                y="0em"
                initialPosX="0rem"
                initialPosY="0em"
                initialScale={1}
                scale={0}
              />
            </Typography>
            <Box component={motion.div}
            initial={{scale:0,rotate:0}}
            whileInView={{scale:1,rotate:360}}
            transition={{ duration: 0.8 }}
            >

            <Box
              component="img"
              src="/assets/redd.png"
              alt="emoji"
              width={80}
              />
              </Box>
          </Stack>
        </Container>
        <SliderCard />
      </Box>
    </React.Fragment>
  );
};

export default TotalCard;
