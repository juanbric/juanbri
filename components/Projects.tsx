import Spacer from "./Spacer";

export const gigs = [
  {
    period: "2022 - Ongoing",
    img: "zentra.svg",
    title: "zentra dev",
    workLink: "https://www.zentradev.vercel.app/",
    description:
      "A web development agency that specializes in creating user-centric websites and apps for clients, with a focus on utilizing effective SEO techniques to improve their online presence. Services include website and application design and development, search engine optimization, and ongoing maintenance and support.",
    tech: "React • Next.js • TypeScript • Contentful • Vercel • Email-js • TailwindCSS • Chakra UI",
  },
  {
    period: "Ongoing",
    img: "/trovali.svg",
    title: "Trovali",
    workLink: "https://trovali.vercel.app/",
    description:
      "Next.js app that uses AI facial recognition technology to detect and identify individuals in uploaded images. It includes user authentication and authorization, the ability to add extra information on the recognized and uploaded individuals, and a search function that allows users to search for individuals by name and tags.",
    tech: `React • Next.js • Faceapi.js • Firebase Auth • Firebase Storage • RESTFUL API • CI/CD • Git • TailwindCSS`,
  },
  {
    period: "2023",
    img: "/melenti.svg",
    title: "Blog about Mental Health",
    workLink: "https://www.melenti.vercel.app/",
    description:
      "Blog about mental health and emotional wellbeing in Spanish. All it's infraestructure has been optminized for SEO, including sitemap, schemas, onsite SEO, copy writing, keyword analysis and more.",
    tech: "React • Next.js • TypeScript • Contentful • Email-js • TailwindCSS • Chakra UI",
  },
];

const Projects = ({
  period,
  title,
  img,
  workLink,
  description,
  tech,
}: {
  period: string;
  title: string;
  img: string;
  workLink: any;
  description: string;
  tech: string;
}) => {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <p className="copy mb-2">{period}</p>
      <div className="lg:col-span-3">
        <img src={img} className="w-8 h-8 pb-1" />
        <h2 className="flex items-center">
          <a
            href={workLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 mt-1 hover:underline"
          >
            {title}
          </a>
          <a
            href={workLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5"
          >
            <img
              src="/arrow.svg"
              className="w-[14px] h-[14px] transform rotate-[20deg]"
            />
          </a>
        </h2>
        <h3 className="copy my-2">{description}</h3>
        <h3 className="sub-copy">
          <div dangerouslySetInnerHTML={{ __html: tech }} />
        </h3>
      </div>
      <Spacer size={35} />
    </div>
  );
};

export default Projects;
