import React from "react";
import Header from "./Header";
import Links from "./Links";
import Spacer from "./Spacer";

const About = ({ myStuff }: { myStuff: any }) => {
  return (
    <section>
      <Spacer size={0} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <Header
            category={"ABOUT ME"}
            title={"Who Is Juan Pablo Briceno?"}
            description={"I help you use the internet to live a better life."}
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
              <h2 className="sub-title mb-3">gm, I&apos;m Juan.</h2>
              <h1 className="sub-sub-title mb-4">
                I’m a Web Developer & Web Designer for 6-7 figure businesses.
              </h1>
              <h2 className="copy">
                I&apos;m the guy they come to when they want to turn
                unproductive businesses into profitable engines. No flashy sales
                tactics or pushy marketing in this household. <br />
                <br />
                With code I will optimize your workflow, content, and online
                visibility so you can work less and earn more.
                <br />
                <br />
                With hands-on experience and a proven track record of success
                across multiple industries, I've gained a deep understanding of
                what brings profitable results and what doesn't in various
                business contexts.
                <br />
                <br />
              </h2>
              <h3 className="sub-sub-title mb-4">
                I am currently accepting new clients for a limited time — if you
                are serious about transforming your business{" "}
                <a
                  href="mailto:juanbri@gmx.com?subject=Hey%20Juan%20%3A)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 ml-0.5 text-[#8d85ff]"
                >
                  reach out today
                </a>
                and let's get started :)
              </h3>
            </span>
          </div>
        </div>
      </div>
      <Spacer size={40} />
    </section>
  );
};

export default About;
