import React from "react";
import Projects from "./Projects";

const Portfolio = ({ isDarkMode, gigs }: { isDarkMode: any; gigs: any }) => {
  return (
    <section className="">
      <div className="md:text-center">
        <p className="title mb-2">PORTFOLIO</p>
        <h2 className="huge-title mb-2">Leveraging The Web</h2>
        <h2
          className={
            !isDarkMode
              ? "copy mb-[32px] md:mb-[62px]"
              : "copy-light mb-[32px] md:mb-[62px]"
          }
        >
          Some of the clients I've helped in taking advantage of the Internet to work
          less, earn more, and live fully.
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-8">
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
    </section>
  );
};

export default Portfolio;
