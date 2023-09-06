import React from "react";

const Card = ({ heading, subHeading }) => {
  return (
    <div className="inline-block px-3">
      <div className="w-96 flex flex-col p-4 gap-8 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-slate-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="text-4xl icon">&#128512;</div>
        <div className="flex flex-col gap-2">
          <div className="font-bold heading">
            {heading && <div>{heading}</div>}
          </div>
          <div className="subheading">
            {subHeading && <div>{subHeading}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
