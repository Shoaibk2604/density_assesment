import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { StyledBlackBtn } from "./homeStyled";
import { motion } from "framer-motion";
import TextTrasition from "@/components/framer/textTrasition";
const Certificate = () => {
  return (
    <React.Fragment>
      <Box py={15}>
        <Container>
          <Stack textAlign="center" direction="column" spacing={2} px={26}>
            <Box>
              <Typography variant="h6">
                <TextTrasition
                  name="We Take privacy seriously"
                  x="0rem"
                  y="2em"
                  initialPosX="0rem"
                  initialPosY="0em"
                  initialScale={1}
                  scale={0}
                  duration="0.8"
                />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3">
                <TextTrasition
                  name="Before you get started"
                  x="0rem"
                  y="2em"
                  initialPosX="0rem"
                  initialPosY="0em"
                  initialScale={1}
                  scale={0}
                  duration="0.8"
                />
              </Typography>
            </Box>
            <Box color="grey">
              <Typography variant="h5">
                <TextTrasition
                  name="'We Won't share your answers with anyone and won't ever tell you which friends said what about you'"
                  x="0rem"
                  y="2em"
                  initialPosX="0rem"
                  initialPosY="0em"
                  initialScale={1}
                  scale={0}
                  duration="0.8"
                />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">with love,</Typography>
            </Box>
            <Box
              component={motion.div}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <StyledBlackBtn>Start a Test</StyledBlackBtn>
            </Box>
            <Box>
              <Typography fontWeight={600} color="grey" fontSize="14px">
                Take only 5 minutes
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Certificate;
