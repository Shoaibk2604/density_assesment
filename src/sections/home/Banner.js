import Ball from "@/components/framer/ball";
import TextTrasition from "@/components/framer/textTrasition";
import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledBox } from "./homeStyled";
const Banner = () => {
  return (
    <React.Fragment>
      <Container>
        <StyledBox>
          <Ball
            color="blue"
            x={[500, 200, -80, -160]}
            y={[100, 250, 350, 450]}
            height="200px"
            width="200px"
          />
          <Grid container spacing={2}>
            <Grid item sm={6} md={6} md={6}>
              <Box>
                <Typography component="div" color="grey" fontWeight={600}>
                  <TextTrasition
                    name="Ahead app"
                    x="-20em"
                    initialPosX="0"
                    scale={0.02}
                    initialScale="1"
                  />
                </Typography>
                <Typography variant="h1" component="div">
                  <TextTrasition
                    name="Master Your Life by mastering emotions"
                    x="-5em"
                    initialPosX="0"
                    scale="0.2"
                    initialScale="1"
                  />
                </Typography>
                <Stack direction="row" pt={3}>
                  <Box
                    component="img"
                    src="/assets/appstore.png"
                    width="11em"
                    alt="appstore"
                  />
                  <Box>
                    <Rating value={5} readOnly />
                    <Typography>100+ AppStore reviews</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid item sm={6} md={6} md={6}>
              <Box component="img" src="/assets/mobile.png" />
            </Grid>
          </Grid>
        </StyledBox>
      </Container>
    </React.Fragment>
  );
};

export default Banner;
