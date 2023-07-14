import { Box, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SectionOne from "./sectionOne";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[200],
          color: (theme) => theme.palette.common.white,
        }}
      >
        <CardContent>
          <Container>
            <Grid
              container
              spacing={{ lg: 8, md: 8, sm: 3, xs: 3 }}
              justifyContent="center"
            >
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <SectionOne />
              </Grid>
            </Grid>
          </Container>
        </CardContent>
        <Box
          sx={{
            color: (theme) => theme.palette.common.black,
          }}
        >
          <CardContent sx={{ py: 0.5, pb: 0.5 }}>
            <Typography
              color="grey"
              component="p"
              variant="subtitle1"
              textAlign="center"
              mt={2}
              fontSize="13px"
            >
              @2022 Ahead app, All right reserved
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
