import React from "react";
import Banner from "./Banner";
import Certificate from "./certificate";
import EqBeats from "./eqbeats";
import SecondBanner from "./secondbanner";
import ThirdBanner from "./thirdbanner";
import TotalCard from "./TotalCard";
import Vacancies from "./vacancies";
import WorkWithUs from "./workwithus";

const HomeSection = () => {
  return (
    <>
      <Banner />
      <EqBeats />
      <TotalCard />
      <SecondBanner />
      <EqBeats />
      <ThirdBanner/>
      <Certificate/>
      <WorkWithUs/>
      <Vacancies/>
    </>
  );
};

export default HomeSection;
