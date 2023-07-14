import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
} from "@mui/material";
import React from "react";

const TotalCard = () => {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#ff7533" }} py={10}>
        <Container>
          <Grid container spacing={14}>
            <Grid item  xs={12} sm={12} md={6} lg={3}>
              <Card variant="outlined">
                <CardContent>
                 
                </CardContent>
              </Card>
            </Grid>
           
           
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default TotalCard;
