import React from "react";
import Links from "./Links";
import Spacer from "./Spacer";

const Footer = ({ isDarkMode, myStuff }: { isDarkMode: any; myStuff: any }) => {
  return (
    <section>
      <div className="flex md:grid md:grid-cols-2">
        <div className="max-w-[350px]">
          <img src="/logo.svg" className="w-[52px] h-[52px]" />
          <h3 className="sub-sub-title my-4">
            Work Less. Earn More. Live fully.
          </h3>
          <h1 className={!isDarkMode ? "copy" : "copy-light"}>
            Digital Economics includes all of the systems I would help you
            implement, but without the 1-1 aspect. Modern Mastery is where I
            dedicate my time for personalized help.
          </h1>
          <div className="flex flex-row">
            {myStuff.map((stuff: any, i: any) => {
              return <Links icon={stuff.icon} link={stuff.link} key={i} />;
            })}
          </div>
        </div>
        <div className="">
          <h2 className="sub-title mb-3">
            Gain A New Perspective On Life & Business
          </h2>
          <p className="mb-6 md:mb-8">
            <span className="font-bold">
              Join 80,000+ getting mindf*cked every Saturday morning
            </span>{" "}
            while reading The Koe Letter (you’ll learn a bit about life &
            business too.)
          </p>
          <div className="flex-row">
            <input
              type="email"
              className="outline-none bg-transparent p-2 border-white border-b mr-5 max-w-[300px]"
              placeholder="Your email"
            />
            <button className="mt-4 md:mt-0 bg-blue py-2 rounded-[2px] px-4 hover:text-second hover:bg-second">
              Read for free
            </button>
          </div>
        </div>
      </div>
      <Spacer size={30} />
      <p className="text-center">© All Rights Reserved.</p>
    </section>
  );
};

export default Footer;
