import React from "react";

const BeTheBest = () => {
  return (
    <div className="w-full py-4 px-14 my-16 mx-auto flex justify-between">
      <div className="w-1/5">
        <h2 className="text-3xl font-bold">Be the best you with EQ</h2>
      </div>
      <div className="w-3/4 flex justify-between px-8">
        <div>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              exercitationem veritatis esse!
            </p>
          </a>
        </div>
        <div>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus odit atque ex expedita sunt!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeTheBest;
