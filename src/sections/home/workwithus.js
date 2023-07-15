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

const WorkWithUs = () => {
  return (
    <React.Fragment>
      <Box py={5}>
        <Container>
          <Card sx={{ backgroundColor: "#f2f3fd", py:2 }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" py={5}>
                <Box>
                  <Typography variant="h2">Work with us</Typography>
                </Box>
                <Box>
                  <Box
                    component="img"
                    src="/assets/images/logo/aheadlogo.png"
                    alt="logo"
                    width={160}
                  />
                </Box>
              </Stack>
              <Grid container spacing={30}>
                <Grid item lg={6}>
                  <Card>
                    <CardContent>
                      <Stack spacing={1}>
                        <Box
                          component="img"
                          src="/assets/Orange.png"
                          width={35}
                          alt="emote"
                        />
                        <Box>
                          <Typography variant="h4">About</Typography>
                        </Box>
                        <Box>
                          <Typography color="grey" fontWeight={600}>
                            At ahead our goal is to make self-improvment fun and
                            lasting.We know there is a wayhow to make it
                            work.And that{"'"} what aHead is all about!
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Card sx={{ backgroundColor: "#fff5fd" }}>
                    <CardContent>
                      <Stack spacing={1}>
                        <Box>
                          <Typography variant="h4">Product</Typography>
                        </Box>
                        <Box>
                          <Typography color="grey" fontWeight={600}>
                            At ahead our goal is to make self-improvment fun and
                            lasting.We know there is a wayhow..
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item lg={6}>
                  <Box height="30em" sx={{overflow:"hidden", overflowY:"scroll"}}>
                    <Card sx={{my:3}}>
                      <CardContent>
                        <Stack spacing={2}>

                        <Box>
                          <Typography variant="h6">
                            Power through, even when the going gets tough
                          </Typography>
                        </Box>
                        <Box>
                          <Typography fontWeight={600} color="grey">
                            We help you spot and work around whatever stands in
                            the way, be it bad habits, fear, etc.
                          </Typography>
                        </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                    <Card sx={{my:3}}>
                      <CardContent>
                        <Stack spacing={2}>

                        <Box>
                          <Typography variant="h6">
                            Power through, even when the going gets tough
                          </Typography>
                        </Box>
                        <Box>
                          <Typography fontWeight={600} color="grey">
                            We help you spot and work around whatever stands in
                            the way, be it bad habits, fear, etc.
                          </Typography>
                        </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                    <Card sx={{my:3}}>
                      <CardContent>
                        <Stack spacing={2}>

                        <Box>
                          <Typography variant="h6">
                            Power through, even when the going gets tough
                          </Typography>
                        </Box>
                        <Box>
                          <Typography fontWeight={600} color="grey">
                            We help you spot and work around whatever stands in
                            the way, be it bad habits, fear, etc.
                          </Typography>
                        </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                    <Card sx={{my:3}}>
                      <CardContent>
                        <Stack spacing={2}>

                        <Box>
                          <Typography variant="h6">
                            Power through, even when the going gets tough
                          </Typography>
                        </Box>
                        <Box>
                          <Typography fontWeight={600} color="grey">
                            We help you spot and work around whatever stands in
                            the way, be it bad habits, fear, etc.
                          </Typography>
                        </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default WorkWithUs;
