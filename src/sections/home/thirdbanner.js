import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledBoxBall, StyledBoxDiv } from "./homeStyled";
import { motion } from "framer-motion";
import TextTrasition from "@/components/framer/textTrasition";

const ThirdBanner = () => {
  return (
    <React.Fragment>
      <Container sx={{ position: "relative" }}>
        <Card sx={{ backgroundColor: "#eff5ff", py: 6, px: 6 }}>
          <CardContent>
            <Stack spacing={2} textAlign="center">
              <Typography variant="h6">
              <TextTrasition
                  name=" Let Your Friends, family, and co-workers (anonymously) rate your
                  social skills."
                  x="0rem"
                  y="0rem"
                  initialPosX="0rem"
                  initialPosY="0em"
                  initialScale={1}
                  scale={0}
                />
               
              </Typography>
              <Typography variant="h2">
                <TextTrasition
                  name="Ever wondered what others think of you?"
                  x="0rem"
                  y="5em"
                  initialPosX="0rem"
                  initialPosY="0em"
                  initialScale={1}
                  scale={0}
                />
              </Typography>
            </Stack>
            <Box>
              <Grid container textAlign="center" py={5}>
                <Grid item md={4}>
                  <Box
                    component={motion.div}
                    initial={{ scale: 0, rotate: -360 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Box
                      m="auto"
                      component="img"
                      src="/assets/badgeOne.png"
                      alt="badge"
                      width={60}
                    />
                  </Box>
                  <Typography
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 4,
                      stiffness: 50,
                      restDelta: 0.001,
                    }}
                  >
                    Answer Questions on your social skills
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Box
                      m="auto"
                      component="img"
                      src="/assets/Badgetwo.png"
                      alt="badge"
                      width={60}
                    />
                  </Box>
                  <Typography
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 4,
                      stiffness: 50,
                      restDelta: 0.001,
                    }}
                  >
                    Let others anonymously answer the same quetions about you
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Box
                    component={motion.div}
                    initial={{ scale: 0, rotate: 360 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Box
                      m="auto"
                      component="img"
                      src="/assets/badgethree.png"
                      alt="badge"
                      width={60}
                    />
                  </Box>
                  <Typography
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 4,
                      stiffness: 50,
                      restDelta: 0.001,
                    }}
                  >
                    Find out where you and others see things the same way- and
                    where not!
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Card sx={{ height: "12em" }}>
                <CardContent>
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 4,
                      stiffness: 30,
                      restDelta: 0.001,
                    }}
                    sx={{
                      backgroundColor: "#d228ff",
                      position: "absolute",
                      left: "17%",
                      borderRadius: "10px",
                      p: 2,
                    }}
                  >
                    <Typography sx={{ color: "#fff" }}>You</Typography>
                  </Box>
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 4,
                      stiffness: 30,
                      restDelta: 0.02,
                    }}
                    sx={{
                      backgroundColor: "#0bf",
                      position: "absolute",
                      left: "32%",
                      top: "60%",
                      borderRadius: "10px",
                      p: 2,
                    }}
                  >
                    <Typography sx={{ color: "#fff" }}>Anonymonos 1</Typography>
                  </Box>
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 4,
                      stiffness: 30,
                      restDelta: 0.001,
                    }}
                    sx={{
                      backgroundColor: "#ffe159",
                      position: "absolute",
                      left: "58%",
                      borderRadius: "10px",
                      p: 2,
                    }}
                  >
                    <Typography sx={{ color: "#fff" }}>Anonymonos 2</Typography>
                  </Box>
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 4,
                      stiffness: 30,
                      restDelta: 0.001,
                    }}
                    sx={{
                      backgroundColor: "#83ff0dba",
                      position: "absolute",
                      left: "78%",
                      top: "60%",
                      borderRadius: "10px",
                      p: 2,
                    }}
                  >
                    <Typography sx={{ color: "#fff" }}>Anonymonos 3</Typography>
                  </Box>
                  <StyledBoxDiv component="div" />
                  <StyledBoxBall
                    component="div"
                    sx={{ backgroundColor: "#d228ff", top: "42%", left: "20%" }}
                  />
                  <StyledBoxBall
                    component="div"
                    sx={{ backgroundColor: "#0bf", top: "42%", left: "40%" }}
                  />
                  <StyledBoxBall
                    component="div"
                    sx={{ backgroundColor: "#ffe159", top: "42%", left: "60%" }}
                  />
                  <StyledBoxBall
                    component="div"
                    sx={{
                      backgroundColor: "#83ff0dba",
                      top: "42%",
                      left: "80%",
                    }}
                  />
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default ThirdBanner;
