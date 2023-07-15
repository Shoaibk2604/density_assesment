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
          <Card sx={{ backgroundColor: "#ffe4fd", py:10,px:5 }}>
            <CardContent>
              <Box>
                <Typography variant="h6" color="grey">Built out of frustration</Typography>
                <Typography variant="h2">Meet the ahead app</Typography>
              </Box>
              <Grid container spacing={2} alignItems="center" >
                <Grid item lg={6}>
                  <Box component="img" src="/assets/red.png" alt="emote" width={60} m="auto" py={12}/>
                </Grid>
                <Grid item lg={5}>
                  <Stack spacing={2} color="grey">
                    <Typography variant="h6" fontWeight={600} >
                      A personalized pocket coach that provides bite-sized,
                      science-driven tools to boost emotional intelligence.
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>
                     Think of it as a pocket cheerleader towards a better, more fulfilling.
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
