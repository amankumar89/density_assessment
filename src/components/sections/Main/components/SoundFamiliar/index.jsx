import React from "react";
import Card from "./Card";
import styles from './styles.module.css'

const DummyData = [
  {
    heading: "Your argieu with ur collejheius",
    subHeading: `Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis harum ab ullam iure`,
  },
  {
    heading: "Nevere sos fo the wowo srffff",
    subHeading: `Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis harum ab ullam iure`,
  },
  {
    heading: "this si srffff sos fo the wowo",
    subHeading: `Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis harum ab ullam iure`,
  },
  {
    heading: "Your argieu with ur collejheius",
    subHeading: `Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis harum ab ullam iure`,
  },
  {
    heading: "Nevere sos fo the wowo srffff",
    subHeading: `Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis harum ab ullam iure`,
  },
  {
    heading: "this si srffff sos fo the wowo",
    subHeading: `Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis harum ab ullam iure`,
  },
];
const SoundFamiliar = () => {
  return (
    <div>
      <div className="heading px-8">
        <h2 className="text-4xl font-bold"></h2>
        <h1 class="flex py-5 font-bold text-4xl text-gray-800">
          Does this sound familiar...
        </h1>
      </div>
      <div class="flex flex-col bg-white my-8 mx-auto p-auto">
        <div class={`flex overflow-x-scroll pb-10 ${styles.hidescrollbar}`}>
          <div class="flex flex-nowrap">
            {DummyData?.map((item) => (
              <Card
                key={item?.icon}
                heading={item?.heading}
                subHeading={item?.subHeading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundFamiliar;

