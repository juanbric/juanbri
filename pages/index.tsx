import Experience, { careerPath } from "@/components/Experience";
import MetaTag from "@/components/MetaTag";
import Projects from "@/components/Projects";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";

export default function Home() {
  const bio =
    "GM. I'm Juan, a passionate Front End developer with a love for building dynamic and user-centric products. Experienced in various countries, I currently call the sunny Las Palmas de Gran Canaria home in Spain. Focused on clean code, beautiful design and product market fit. Constantly shipping and constantly learning.";
  const title =
    "Briceno | Front End Developer | Las Palmas de Gran Canaria Spain";
  const date = new Date();
  const image =
    "https://raw.githubusercontent.com/juanbric/juanbri/d608c72cf152705007d2bf1f32def028e02ca1b2/public/logo.svg";

  return (
    <>
      <Schema title={title} date={date} image={image} description={bio} />
      <MetaTag title={title} description={bio} url={undefined} image={image} />

      {/* Header */}
      <section className="grid grid-cols-4 items-center">
        <img
          src="/juan.png"
          className="w-[90px] h-[90px] hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full"
        />
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
            />
          );
        })}
      </section>

      <section>
        <h2>Side Projects</h2>
        <Spacer size={35} />
        {careerPath.map((experience, i) => {
          return (
            <Projects
              period={experience.period}
              title={experience.title}
              workLink={experience.workLink}
              description={experience.description}
              tech={experience.tech}
            />
          );
        })}
      </section>

      <section></section>
    </>
  );
}
