import React from "react";

const Subscribe = () => {
  return (
    <div className="flex-row">
      <input
        type="email"
        className="outline-none bg-transparent p-2 border-white border-b mr-5 max-w-[300px]"
        placeholder="Your email"
      />
      <button className="mt-4 md:mt-0 bg-blue py-2 rounded-[2px] px-8 hover:text-second hover:bg-second hover:scale-110 transform-gpu ease-in-out duration-300">
        Read For Free
      </button>
    </div>
  );
};

export default Subscribe;
