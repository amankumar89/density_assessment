import React from "react";
import EQBeatsIQ from "./components/EQBeatsIQ";
import SoundFamiliar from "./components/SoundFamiliar";
import BeTheBest from "./components/BeTheBest";
import OpenVacancies from "./components/OpenVacancies";
import MeetAheadApp from "./components/MeetAheadApp";
import BeforeYouGetStarted from "./components/BeforeYouGetStarted";
import WorkWithUs from "./components/WorkWithUs";

const Main = () => {
  return (
    <div className="w-full p-8">
      <EQBeatsIQ />
      <SoundFamiliar />
      <MeetAheadApp />
      <BeTheBest />
      <BeforeYouGetStarted />
      <WorkWithUs />
      <OpenVacancies />
    </div>
  );
};

export default Main;
