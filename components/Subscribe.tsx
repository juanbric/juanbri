import React from "react";

const Subscribe = () => {
  return (
    <>
      <p className="copy-big-white mb-6 md:mb-8">
        <span className="copy-big-bold-white">
          Learn how to leverage the internet to work less and earn more.
        </span>{" "}
        Get your free newsletter filled with actionable tips to launch, grow,
        and monetize your internet business.
      </p>
      <div className="flex-row">
        <input
          type="email"
          className="outline-none bg-transparent p-2 border-white border-b mr-6 max-w-[300px]"
          placeholder="Your email"
        />
        <button className="mt-4 md:mt-0 bg-blue py-2 rounded-[2px] px-8 hover:text-second hover:bg-second hover:scale-110 transform-gpu ease-in-out duration-300">
          Read For Free
        </button>
      </div>
    </>
  );
};

export default Subscribe;
