import React from "react";
import Links from "./Links";

const About = ({ isDarkMode, myStuff }: { isDarkMode: any; myStuff: any }) => {
  return (
    <section className="">
      <div className="md:text-center">
        <p className="title mb-2">ABOUT ME</p>
        <h2 className="huge-title mb-2">Who Is Juan Pablo Briceno?</h2>
        <h2 className={!isDarkMode ? "copy mb-[42px]" : "copy-light mb-[42px]"}>
          Just a human obsessed with leveraging the internet and technology to
          live the lives we want.
        </h2>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex flex-col items-center">
          <img src="/juan.png" className="w-auto rounded-full shadow-xl" />
          <div className="flex flex-row">
            {myStuff.map((stuff: any, i: any) => {
              return <Links icon={stuff.icon} link={stuff.link} key={i} />;
            })}
          </div>
        </div>
        <span className="col-span-2">
          <h2 className="sub-title mb-3">gm, I'm Juan.</h2>
          <h3 className="sub-sub-title mb-4">
            I’m a brand advisor for 6-7 figure creators and influencers.
          </h3>
          <h2 className={!isDarkMode ? "copy" : "copy-light"}>
            I’m the guy they come to when they want to go from starving artist
            to a highly-paid and authentic creator. No fancy sales funnels and
            pushy marketing in this household. <br />
            <br />I help them systemize their workflow, marketing, and content
            so they can work for 2 hours a day, charge more, and sell their
            products & services without manual effort. <br />
            <br />
            As a freelancer turned consultant turned creator, I’ve developed
            effective systems with time, skin in the game, and experience with
            4000+ students and clients.
            <br />
            <br />
          </h2>
          <h3 className="sub-sub-title mb-4">
            I am not currently accepting clients due to current projects.
          </h3>
          <h1 className={!isDarkMode ? "copy" : "copy-light"}>
            Digital Economics includes all of the systems I would help you
            implement, but without the 1-1 aspect. Modern Mastery is where I
            dedicate my time for personalized help.
          </h1>
        </span>
      </div>
    </section>
  );
};

export default About;
