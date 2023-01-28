import Experience, { careerPath } from "@/components/Experience";
import Links, { myStuff } from "@/components/Links";
import MetaTag from "@/components/MetaTag";
import Projects, { gigs } from "@/components/Projects";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";
import { URL } from "@/config";
import { useContext } from "react";
import { ToggleContext } from "./_app";

export default function Home() {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode } = toggleFromContext;

  const bio =
    "GM. I'm Juan, a passionate Front End developer with a love for building dynamic and user-centric products. Experienced in various countries and languages, I currently call the sunny Las Palmas de Gran Canaria home in Spain. Focused on clean code, beautiful design and product market fit. Constantly shipping and constantly learning.";
    const title =
    "Briceno | Front End Developer | Las Palmas de Gran Canaria Spain";
  const description = "A passionate Front End developer with a love for building dynamic and user-centric products. Experienced in various countries and languages, I currently call the sunny Las Palmas de Gran Canaria home in Spain. Focused on clean code, beautiful design and product market fit. Constantly shipping and constantly learning."
  const date = new Date();
  const image = "https://i.ibb.co/C8cvD7z/Group-2.png";

  return (
    <>
      <Schema
        title={title}
        date={date}
        image={image}
        description={description}
        articleBody={undefined}
      />
      <MetaTag title={title} description={description} url={URL} image={image} />

      {/* Header */}
      <section className="grid grid-cols-4 gap-4 items-center">
        <img src="/juan.png" className="w-auto rounded-full shadow-xl" />
        <span className="col-span-3">
          <h2 className="header">Juan Pablo Briceno</h2>
          <h2 className={!isDarkMode ? "copy mt-1" : "copy-light mt-1"}>
            Product-focused Front End Developer
          </h2>
          <a
            href={"https://github.com/juanbric"}
            target="_blank"
            rel="noopener noreferrer"
            className="sub-copy hover:underline"
          >
            Github @juanbric
          </a>
        </span>
      </section>

      <Spacer size={35} />

      {/* Bio */}
      <section>
        <p>About</p>
        <Spacer size={7} />
        <h1 className={!isDarkMode ? "copy" : "copy-light"}>{bio}</h1>
      </section>

      <Spacer size={49} />

      {/* CV */}
      <section>
        <h2>Work Experience</h2>
        <Spacer size={35} />
        {careerPath.map((experience, i) => {
          return (
            <Experience
              period={experience.period}
              title={experience.title}
              workLink={experience.workLink}
              description={experience.description}
              tech={experience.tech}
              key={i}
            />
          );
        })}
      </section>
      <Spacer size={15} />

      {/* Side Projects */}
      <section>
        <h2>Side Projects</h2>
        <Spacer size={35} />
        {gigs.map((project, i) => {
          return (
            <Projects
              period={project.period}
              title={project.title}
              workLink={project.workLink}
              description={project.description}
              tech={project.tech}
              img={project.img}
              key={i}
            />
          );
        })}
      </section>

      <section>
        <h2>Links</h2>
        <Spacer size={35} />
        {myStuff.map((stuff, i) => {
          return (
            <Links
              platform={stuff.platform}
              link={stuff.link}
              userName={stuff.userName}
              key={i}
            />
          );
        })}
      </section>
    </>
  );
}
