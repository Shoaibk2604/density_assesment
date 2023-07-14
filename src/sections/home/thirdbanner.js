import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledBoxBall, StyledBoxDiv } from "./homeStyled";

const ThirdBanner = () => {
  return (
    <React.Fragment>
      <Container sx={{ position: "relative" }}>
        <Card sx={{ backgroundColor: "#eff5ff" }}>
          <CardContent>
            <Box textAlign="center">
              <Typography variant="h6">
                Let Your Friends, family, and co-workers (anonymously) rate your
                social skills.
              </Typography>
              <Typography variant="h2">
                Ever wondered what others think of you?
              </Typography>
            </Box>
            <Box>
              <Grid container textAlign="center" py={5}>
                <Grid item lg={4}>
                  <Box
                    m="auto"
                    component="img"
                    src="/assets/badgeOne.png"
                    alt="badge"
                    width={60}
                  />
                  <Typography>
                    Answer Questions on your social skills
                  </Typography>
                </Grid>
                <Grid item lg={4}>
                  <Box
                    m="auto"
                    component="img"
                    src="/assets/badgetwo.png"
                    alt="badge"
                    width={60}
                  />
                  <Typography>
                    Let others anonymously answer the same quetions about you
                  </Typography>
                </Grid>
                <Grid item lg={4}>
                  <Box
                    m="auto"
                    component="img"
                    src="/assets/badgethree.png"
                    alt="badge"
                    width={60}
                  />
                  <Typography>
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
