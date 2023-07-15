import Iconify from "@/components/iconify";
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
import {motion} from "framer-motion"
const Vacancies = () => {
  return (
    <React.Fragment>
      <Box py={6}>
        <Container>
          <Box py={6}>
            <Typography variant="h2" component={motion.div} initial={{scale:0}} whileInView={{scale:1}}>Open vacancies</Typography>
          </Box>
          <Grid container spacing={4}>
            {Array(3)
              .fill()
              .map((elem,index) => {
                return (
                  <Grid item md={4} key={index}>
                    <Card sx={{ backgroundColor: "#fff5fd", p: 1 }}>
                      <CardContent>
                        <Stack spacing={1.2}>
                          <Box>
                            <Typography variant="h5">
                              Senior Full-Stack Engineer
                            </Typography>
                          </Box>
                          <Stack direction="row" alignItems="center">
                            <Iconify icon="radix-icons:dot-filled" />
                            <Typography
                              fontWeight={600}
                              fontSize={14}
                              color="grey"
                            >
                              Full-time position
                            </Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center">
                            <Iconify icon="radix-icons:dot-filled" />
                            <Typography
                              fontWeight={600}
                              fontSize={14}
                              color="grey"
                            >
                              Berlin or remote
                            </Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center">
                            <Iconify icon="radix-icons:dot-filled" />
                            <Typography
                              fontWeight={600}
                              fontSize={14}
                              color="grey"
                            >
                              $65-85k, 0.5-1.50% equity share options
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Vacancies;
