import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";

export default function SliderCard() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode:true,
    adaptiveHeight:true
  };
  return (
    <Slider {...settings}>
      <Box px={2}>
        <Card sx={{ backgroundColor: "lightpink" }}>
          <CardContent>
            <Stack direction="column" spacing={0.5}>
              <Box fontSize={30}> 😠</Box>
              <Box>
                <Typography variant="h6">You argue with a colleague</Typography>
              </Box>
              <Box>
                <Typography>
                  You can get angry and defnesive, instead of staying open and
                  working towards common ground.
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <Box px={2}>
        <Card sx={{ backgroundColor: "lightblue" }}>
          <CardContent>
            <Stack direction="column" spacing={0.5}>
              <Box fontSize={30}>😁</Box>
              <Box >
                <Typography variant="h6">You argue with a colleague</Typography>
              </Box>
              <Box>
                <Typography>
                  You can get angry and defnesive, instead of staying open and
                  working towards common ground.
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <Box px={2}>
        <Card sx={{ backgroundColor: "lightgray" }}>
          <CardContent>
            <Stack direction="column" spacing={0.5}>
              <Box fontSize={30}>😍</Box>
              <Box>
                <Typography variant="h6">You argue with a colleague</Typography>
              </Box>
              <Box>
                <Typography>
                  You can get angry and defnesive, instead of staying open and
                  working towards common ground.
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <Box px={2}>
        <Card sx={{ backgroundColor: "lightgreen" }}>
          <CardContent>
            <Stack direction="column" spacing={0.5}>
              <Box fontSize={30}>😜</Box>
              <Box>
                <Typography variant="h6">You argue with a colleague</Typography>
              </Box>
              <Box>
                <Typography>
                  You can get angry and defnesive, instead of staying open and
                  working towards common ground.
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <Box px={2}>
        <Card sx={{ backgroundColor: "lightseagreen" }}>
          <CardContent>
            <Stack direction="column" spacing={0.5}>
              <Box fontSize={30}>😜</Box>
              <Box  color="#fff">
                <Typography variant="h6">You argue with a colleague</Typography>
              </Box>
              <Box color="#d3d3d3">
                <Typography>
                  You can get angry and defnesive, instead of staying open and
                  working towards common ground.
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Slider>
  );
}
