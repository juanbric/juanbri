import Experience, { careerPath } from "@/components/Experience";
import Links, { myStuff } from "@/components/Links";
import MetaTag from "@/components/MetaTag";
import Projects, { gigs } from "@/components/Projects";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";

export default function Home() {
  const bio =
    "GM. I'm Juan, a passionate Front End developer with a love for building dynamic and user-centric products. Experienced in various countries, I currently call the sunny Las Palmas de Gran Canaria home in Spain. Focused on clean code, beautiful design and product market fit. Constantly shipping and constantly learning.";
  const title =
    "Briceno | Front End Developer | Las Palmas de Gran Canaria Spain";
  const date = new Date();
  const image =
    "https://raw.githubusercontent.com/juanbric/juanbri/5043605b6b0e43cc096337e3466821ef6c1010e1/public/logo.svg";

  return (
    <>
      <Schema title={title} date={date} image={image} description={bio} />
      <MetaTag title={title} description={bio} url={undefined} image={image} />

      {/* Header */}
      <section className="grid grid-cols-4 gap-4 items-center">
        <img src="/juan.png" className="w-auto rounded-full" />
        <span className="col-span-3">
          <h2 className="header">Juan Pablo Briceno</h2>
          <h2 className="copy mt-1">Product-focused Front End Developer</h2>
          <a
            href={"https://twitter.com/juanbrisol"}
            target="_blank"
            rel="noopener noreferrer"
            className="sub-copy"
          >
            @juanbrisol
          </a>
        </span>
      </section>

      <Spacer size={35} />

      {/* Bio */}
      <section>
        <p>About</p>
        <Spacer size={7} />
        <h1 className="copy">{bio}</h1>
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
