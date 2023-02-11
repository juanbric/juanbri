import React from "react";
import Header from "./Header";
import Links from "./Links";
import Spacer from "./Spacer";

const About = ({ myStuff }: { myStuff: any }) => {
  return (
    <section>
      <Spacer size={40} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <Header
            category={"ABOUT ME"}
            title={"Who Is Juan Pablo Briceno?"}
            description={
              "Just a human obsessed with leveraging the internet and technology to live the lives we want."
            }
          />
          <div className="md:grid md:grid-cols-3 items-center">
            <div className="flex flex-col items-center">
              <img src="/juan.png" className="w-auto rounded-full shadow-xl" />
              <div className="flex flex-row md:pb-0 pb-8 ">
                {myStuff.map((stuff: any, i: any) => {
                  return <Links icon={stuff.icon} link={stuff.link} key={i} />;
                })}
              </div>
            </div>
            <span className="md:col-span-2">
              <h2 className="sub-title mb-3">gm, I'm Juan.</h2>
              <h3 className="sub-sub-title mb-4">
                I’m a brand advisor for 6-7 figure creators and influencers.
              </h3>
              <h2 className="copy">
                I’m the guy they come to when they want to go from starving
                artist to a highly-paid and authentic creator. No fancy sales
                funnels and pushy marketing in this household. <br />
                <br />I help them systemize their workflow, marketing, and
                content so they can work for 2 hours a day, charge more, and
                sell their products & services without manual effort. <br />
                <br />
                As a freelancer turned consultant turned creator, I’ve developed
                effective systems with time, skin in the game, and experience
                with 4000+ students and clients.
                <br />
                <br />
              </h2>
              <h3 className="sub-sub-title mb-4">
                I am not currently accepting clients due to current projects.
              </h3>
              <h1 className="copy">
                Digital Economics includes all of the systems I would help you
                implement, but without the 1-1 aspect. Modern Mastery is where I
                dedicate my time for personalized help.
              </h1>
            </span>
          </div>
        </div>
      </div>
      <Spacer size={40} />
    </section>
  );
};

export default About;
