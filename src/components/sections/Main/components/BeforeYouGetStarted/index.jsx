import React from "react";

const BeforeYouGetStarted = () => {
  return (
    <div className="w-fit py-12 my-8 mx-auto text-center">
      <div className="my-2 text-2xl">We take privacy seriously</div>
      <div className="my-2 text-4xl font-bold">Before you get started</div>
      <div className="my-4 text-2xl">{`"We won't share your answers with anyone (and won't ever tell 
      you which friends said what about you)"`}</div>
      <div className="my-8 text-2xl">
        with love, <span className="italic">Team Ahead</span>
      </div>
      <div className="w-fit py-1 px-4 my-4 mx-auto rounded-3xl text-white text-2xl bg-black">Start a test</div>
      <div className="my-2 text-xl">Take only 5 minutes</div>
    </div>
  );
};

export default BeforeYouGetStarted;
