import { Box } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import Certificate from "./certificate";
import EqBeats from "./eqbeats";
import SecondBanner from "./secondbanner";
import ThirdBanner from "./thirdbanner";
import TimeLineCom from "./timeline";
import TotalCard from "./TotalCard";
import Vacancies from "./vacancies";
import WorkWithUs from "./workwithus";

const HomeSection = () => {
  return (
    <Box overflow={"hidden"}>
      <Banner />
      <EqBeats />
      <TotalCard />
      <SecondBanner />
      <TimeLineCom/>
      <EqBeats />
      <ThirdBanner/>
      <Certificate/>
      <WorkWithUs/>
      <Vacancies/>
    </Box>
  );
};

export default HomeSection;
