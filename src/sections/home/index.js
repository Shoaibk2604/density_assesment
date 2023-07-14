import React from "react";
import Banner from "./Banner";
import Certificate from "./certificate";
import EqBeats from "./eqbeats";
import SecondBanner from "./secondbanner";
import ThirdBanner from "./thirdbanner";
import TotalCard from "./TotalCard";

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
    </>
  );
};

export default HomeSection;
