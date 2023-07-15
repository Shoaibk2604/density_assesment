import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ToysIcon from "@mui/icons-material/Toys";
const EqBeats = () => {
  return (
    <React.Fragment>
      <Box py={10}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={6} md={4} md={4}>
              <Box>
                <Typography variant="h4">EQ beats IQ</Typography>
              </Box>
            </Grid>
            <Grid item sm={6} md={4} md={4}>
              <Box>
                <Typography variant="h6"  fontWeight={400} color="grey">
                  Let your friends, family, and co-workers (anonymously) rate
                  your social skills. Then compare that to how you see yourself.
                  Maybe you{"'"}ll find areas to work on...
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} md={4} md={4}>
              <Box>
              <Typography variant="h6"  fontWeight={400} color="grey">
                  Let your friends, family, and co-workers (anonymously) rate
                  your social skills. Then compare that to how you see yourself.
                  Maybe you{"'"}ll find areas to work on...
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default EqBeats;
