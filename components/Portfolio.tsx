import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Spacer from "./Spacer";

const Portfolio = ({ gigs }: { gigs: any }) => {
  return (
    <section className="">
      <Spacer size={40} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <Header
            category={"PORTFOLIO"}
            title={"Making The Most Of The Web"}
            description={
              "Some of the clients I've helped taking advantage of the Internet."
            }
          />
          <div className="md:grid md:grid-cols-3 md:gap-12 mt-0">
            {gigs.map((project: any, i: any) => {
              return (
                <Projects
                  title={project.title}
                  workLink={project.workLink}
                  description={project.description}
                  tech={project.tech}
                  img={project.img}
                  key={i}
                  screenshot={project.screenshot}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Spacer size={40} />
    </section>
  );
};

export default Portfolio;
