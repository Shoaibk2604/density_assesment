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
          <Grid container spacing={2}>
            <Grid item sm={6} md={6} lg={6}>
              <Box>
                <Typography color="grey" fontWeight={600}>
                  Ahead app
                </Typography>
                <Typography variant="h1">
                  Master Your Life by mastering emotions
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
            <Grid item sm={6} md={6} lg={6}>
              <Box component="img" src="/assets/mobile.png" />
            </Grid>
          </Grid>
      </StyledBox>
        </Container>
    </React.Fragment>
  );
};

export default Banner;
