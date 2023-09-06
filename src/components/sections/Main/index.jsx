import React from "react";
import EQBeatsIQ from "./components/EQBeatsIQ";
import SoundFamiliar from "./components/SoundFamiliar";
import BeTheBest from "./components/BeTheBest";
import OpenVacancies from "./components/OpenVacancies";
import MeetAheadApp from "./components/MeetAheadApp";
import BeforeYouGetStarted from "./components/BeforeYouGetStarted";

const Main = () => {
  return (
    <div className="w-full p-8">
      <EQBeatsIQ />
      <SoundFamiliar />
      <MeetAheadApp />
      <BeTheBest />
      <BeforeYouGetStarted />
      <OpenVacancies />
    </div>
  );
};

export default Main;
