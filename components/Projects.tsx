import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import Spacer from "./Spacer";

export const gigs = [
  {
    period: "Ongoing",
    img: "/trovali.svg",
    title: "Trovali app",
    workLink: "https://face-recognition-juanbri.vercel.app/login",
    description: (
      <>
        Next.js app that uses AI facial recognition technology to detect and
        identify individuals in uploaded images. It includes user authentication
        and authorization, the ability to add extra information on the
        recognized and uploaded individuals, and a search function that allows
        users to search for individuals by name and tags. If you want to see the
        presentation website of this app, also created by me, go to{"  "}
        <a
          href="https://trovali.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 mt-1 hover:underline hover:text-[#3c31dd]"
        >
          https://trovali.vercel.app.
        </a>
      </>
    ),
    tech: `React • Next.js • Faceapi.js • Firebase Auth • Firebase Storage • RESTFUL API • CI/CD • Git • TailwindCSS`,
  },
  {
    period: "Ongoing",
    img: "/qr.svg",
    title: "QR Photo App",
    workLink: "https://face-recognition-juanbri.vercel.app/login",
    description:
      "App that generates a unique QR code per every photo uploaded. The QR directs the user to a dynamic URL with getStaticPaths and getStaticProps where the uploaded picture is contained.",
    tech: `React • Next.js • Firebase Storage • CI/CD • Git • TailwindCSS`,
  },
  {
    period: "2022",
    img: "/soltype.svg",
    title: "First Soltype app",
    workLink: "https://legacy.soltype.io/#/",
    description:
      "First iteration of Soltype. This initial Soltype version consisted on an open platform where anyone could publish their writings as literary NFTs and where anyone could read and trade the works published by others. Check it out!.",
    tech: "React • TypeScript • TailwindCSS • Chakra UI",
  },
  {
    period: "2022 - Ongoing",
    img: "zentra.svg",
    title: "zentra dev",
    workLink: "https://www.zentradev.vercel.app/",
    description:
      "A web development agency website that specializes in creating user-centric websites and apps for clients, with a focus on utilizing effective SEO techniques to improve their online presence. Services include website and application design and development, search engine optimization, and IT Consulting.",
    tech: "React • Next.js • TypeScript • Contentful • Vercel • Email-js • TailwindCSS • Chakra UI",
  },
  {
    period: "2023",
    img: "/melenti.svg",
    title: "Blog about Mental Health",
    workLink: "https://www.melenti.vercel.app/",
    description:
      "Blog about mental health and emotional wellbeing in Spanish. All it's infraestructure has been optminized for SEO, including sitemap, schemas, onsite SEO, copy writing, keyword analysis and more. This is WIP",
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
  description: any;
  tech: string;
}) => {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode } = toggleFromContext;
  return (
    <div className="lg:grid lg:grid-cols-4">
      <p className={!isDarkMode ? "copy mb-2" : "copy-light mb-2"}>{period}</p>
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
              src={!isDarkMode ? "/arrow.svg" : "/arrow-black.svg"}
              className="w-[14px] h-[14px] transform rotate-[20deg]"
            />
          </a>
        </h2>
        <h3 className={!isDarkMode ? "copy my-2" : "copy-light my-2"}>{description}</h3>
        <h3 className="sub-copy">
          <div dangerouslySetInnerHTML={{ __html: tech }} />
        </h3>
      </div>
      <Spacer size={35} />
    </div>
  );
};

export default Projects;
