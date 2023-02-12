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
              "Just a human obsessed with leveraging the internet to live the lives we dream."
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
              <h2 className="sub-title mb-3">gm, I&apos;m Juan.</h2>
              <h3 className="sub-sub-title mb-4">
                I’m a web developer & web designer for 6-7 figure service
                businesses.
              </h3>
              <h2 className="copy">
                I&apos;m the guy they come to when they want to go from stale and
                inefficient service businesses to highly profitable and lean
                earning engines. No flashy sales tactics and pushy marketing in
                this corner of the internet. <br />
                <br />I help them optimize their workflow, content, and online
                visibility so they can work for 4 hours a day, increase their
                revenues, and sell their products and services with no manual
                effort. <br />
                <br />
                With hands-on experience and a proven track record of success
                working with over 500 clients, I&apos;ve honed my skills and
                developed efficient systems as a transformed developer,
                consultant, and creator.
                <br />
                <br />
              </h2>
              <h3 className="sub-sub-title mb-4">
                I am currently accepting clients for a limited time - feel free
                to{" "}
                <a
                  href="mailto:juanbri@gmx.com?subject=Hey%20Juan%20%3A)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 ml-0.5 text-[#675cff]"
                >
                  reach out
                </a>
                :)
              </h3>
              <h1 className="copy">
                I will help you design, build, and improve the visibility of
                your website or app. Smartly applied technology is the key to
                overcoming business challenges while catapulting your venture
                forward.
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
