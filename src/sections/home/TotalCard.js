import SliderCard from "@/components/slider/slider";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const TotalCard = () => {
  return (
    <React.Fragment>
      <Box py={10}>
        <Container>
          <Stack direction="row" spacing={2} pb={6}>
            <Typography variant="h3">Does This Sound familiar...</Typography>
            <Box
              component="img"
              src="/assets/redd.png"
              alt="emoji"
              width={50}
            />
          </Stack>
        </Container>
        <SliderCard />
      </Box>
    </React.Fragment>
  );
};

export default TotalCard;
