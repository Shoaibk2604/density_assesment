import TextTrasition from "@/components/framer/textTrasition";
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
import { motion } from "framer-motion";
const TimeLineCom = () => {
  return (
    <React.Fragment>
      <Box py={5}>
        <Container>
          <Stack spacing={1}>
            <Box>
              <Typography variant="h5">
                <TextTrasition
                  name=" Wrong with self-improvement & how we're fixing it."
                  x="-15rem"
                  y="-2em"
                  initialPosX="0rem"
                  initialPosY="0em"
                  initialScale={1}
                  scale={0}
                  duration="0.6"
                />
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} pb={4}>
              <Typography variant="h2">
                <TextTrasition
                  name=" Self-improvement. Ugh."
                  x="-5rem"
                  y="2em"
                  initialPosX="0rem"
                  initialPosY="0em"
                  initialScale={1}
                  scale={0}
                  duration="0.8"
                />
              </Typography>
              <Box
                component={motion.div}
                initial={{ scale: 0, rotate: -360 }}
                whileInView={{ scale: 1, rotate: 10 }}
                transition={{ duration: 0.8 }}
              >
                <Box component="img" src="/assets/redd.png" width={65} />
              </Box>
            </Stack>
          </Stack>
          <Box>
            <Timeline>
              {Array(4)
                .fill()
                .map((elem, index) => {
                  return (
                    <TimelineItem
                      key={index}
                      sx={{ px: 25, "::before": { content: "none" } }}
                    >
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6">
                          It{"'"}s not as easy as 1-2-3.
                        </Typography>
                        <Typography>
                          The journey of change may be long,but our sessions are
                          quick. We get to the point and tell you what you want
                          to know(adn nothing else).
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
            </Timeline>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default TimeLineCom;
