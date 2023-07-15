import MouseBall from "@/components/framer/mouseball";
import TextTrasition from "@/components/framer/textTrasition";
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

const SecondBanner = () => {
  return (
    <React.Fragment>
      <Box py={4}>
        <Container>
          <Card
            sx={{
              backgroundColor: "#ffe4fd",
              py: 10,
              px: 5,
              position: "relative",
              overflow:"hidden"
            }}
          >
            <CardContent>
              <Box>
                <MouseBall />
                <Typography variant="h6" color="grey">
                  <TextTrasition
                    name="Built out of frustration"
                    x="-10rem"
                    y="0em"
                    initialPosX="0rem"
                    initialPosY="0em"
                    initialScale={1}
                    scale={0}
                  />
                </Typography>
                <Typography variant="h2">
                  <TextTrasition
                    name=" Meet the ahead app"
                    x="-10rem"
                    y="0em"
                    initialPosX="0rem"
                    initialPosY="0em"
                    initialScale={1}
                    scale={0}
                  />
                </Typography>
              </Box>
              <Grid container spacing={2} alignItems="center">
                <Grid item md={6}>
                  <Box
                    component="img"
                    src="/assets/Red.png"
                    alt="emote"
                    width={60}
                    m="auto"
                    py={12}
                  />
                </Grid>
                <Grid item md={5}>
                  <Stack spacing={2} color="grey">
                    <Typography variant="h6" fontWeight={600}>
                      <TextTrasition
                        name="A personalized pocket coach that provides bite-sized,
                      science-driven tools to boost emotional intelligence."
                        x="10rem"
                        y="0em"
                        initialPosX="0rem"
                        initialPosY="0em"
                        initialScale={1}
                        
                      />
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>
                      <TextTrasition
                        name=" Think of it as a pocket cheerleader towards a better, more
                      fulfilling."
                        x="-10rem"
                        y="0em"
                        initialPosX="0rem"
                        initialPosY="0em"
                        initialScale={1}
                        
                      />
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default SecondBanner;
