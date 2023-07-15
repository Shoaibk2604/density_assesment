import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const TimeLineCom = () => {
  return (
    <React.Fragment>
      <Box py={5}>
        <Container>
          <Stack spacing={1}>
            <Box>
              <Typography variant="h5">
                Wrong with self-improvement {"&"} how we{"'"}re fixing it.
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} pb={4}>
              <Typography variant="h2">Self-improvement. Ugh.</Typography>
              <Box component="img" src="/assets/redd.png" width={65} />
            </Stack>
          </Stack>
          <Box>
            <Timeline>
                {Array(4).fill().map((elem,index)=>{
                    return(
<TimelineItem key={index}  sx={{px:25,  "::before":{content:"none"}}}>
                <TimelineSeparator>
                  <TimelineDot color="primary"/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6">It{"'"}s not as easy as 1-2-3.</Typography>
                  <Typography >The journey of change may be long,but our sessions are quick. We get to the point and tell you what you want to know(adn nothing else).</Typography>
                </TimelineContent>
              </TimelineItem>
                    )
                })}
          
            </Timeline>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default TimeLineCom;
