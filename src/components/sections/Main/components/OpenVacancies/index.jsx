import React from "react";

const OpenVacancies = () => {
  return (
    <div className="w-full px-8 my-8 flex flex-col gap-12">
      <div className="w-1/5">
        <h2 className="text-4xl font-bold">Open Vacancies</h2>
      </div>
      <div className="flex justify-start flex-wrap">
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 py-8 px-4 border rounded-md bg-red-100">
            <h2 className="text-2xl font-bold">Senior Full Stack Engineer</h2>
            <ul className="list-disc list-inside">
              <li>Full Time Position</li>
              <li>Berlin or Remote</li>
              <li>$100-$1000,0.5-1.5% equity or share points</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 py-8 px-4 border rounded-md bg-red-100">
            <h2 className="text-2xl font-bold">Senior Full Stack Engineer</h2>
            <ul className="list-disc list-inside">
              <li>Full Time Position</li>
              <li>Berlin or Remote</li>
              <li>$100-$1000,0.5-1.5% equity or share points</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 py-8 px-4 border rounded-md bg-red-100">
            <h2 className="text-2xl font-bold">Senior Full Stack Engineer</h2>
            <ul className="list-disc list-inside">
              <li>Full Time Position</li>
              <li>Berlin or Remote</li>
              <li>$100-$1000,0.5-1.5% equity or share points</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenVacancies;
