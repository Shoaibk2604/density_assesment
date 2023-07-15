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
import { motion } from "framer-motion";
import TextTrasition from "@/components/framer/textTrasition";
const WorkWithUs = () => {
  return (
    <React.Fragment>
      <Box py={5}>
        <Container>
          <Card sx={{ backgroundColor: "#f2f3fd", py: 2, px: 4 }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" py={5}>
                <Box>
                  <Typography variant="h2">
                    <TextTrasition
                      name="Work with us"
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
                  <Box
                    component="img"
                    src="/assets/images/logo/aheadlogo.png"
                    alt="logo"
                    width={160}
                  />
                </Box>
              </Stack>
              <Grid container spacing={30}>
                <Grid item md={6} position="relative">
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
                  <Box
                    sx={{ position: "absolute" }}
                    component={motion.div}
                    initial={{ x: 0, y: "-13em" }}
                    whileInView={{ x: "0em", y: "0em" }}
                    transition={{ duration: 0.7 }}
                  >
                    <Card sx={{ backgroundColor: "#fff5fd" }}>
                      <CardContent>
                        <Stack spacing={1}>
                          <Box>
                            <Typography variant="h4">Product</Typography>
                          </Box>
                          <Box>
                            <Typography color="grey" fontWeight={600}>
                              At ahead our goal is to make self-improvment fun
                              and lasting.We know there is a wayhow..
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item md={6}>
                  <Box
                    height="30em"
                    sx={{ overflow: "hidden", overflowY: "scroll" }}
                  >
                    {Array(6)
                      .fill()
                      .map((elem, index) => {
                        return (
                          <Card sx={{ my: 3, mx: 2 }} key={index}>
                            <CardContent>
                              <Stack spacing={2}>
                                <Box>
                                  <Typography variant="h6">
                                    Power through, even when the going gets
                                    tough
                                  </Typography>
                                </Box>
                                <Box>
                                  <Typography fontWeight={600} color="grey">
                                    We help you spot and work around whatever
                                    stands in the way, be it bad habits, fear,
                                    etc.
                                  </Typography>
                                </Box>
                              </Stack>
                            </CardContent>
                          </Card>
                        );
                      })}
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
