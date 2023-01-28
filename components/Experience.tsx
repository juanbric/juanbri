import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import Spacer from "./Spacer";

export const careerPath = [
  {
    period: "2021 - current",
    title: "Front End Lead & Cofounder – Soltype",
    workLink: "https://www.soltype.io/",
    description:
      "Led a team of 3 engineers to develop our web3 creator tools and eBook NFT app. Worked closely with the CTO to build our tactical objectives and improve both our technical directions and shipping frequency.",
    tech: `React • NextJS • RESTFUL API • CI/CD • Jira • Git • 
    <a href="https://www.metaplex.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">Metaplex</a> 
    • TailwindCSS`,
  },
  {
    period: "2021 - current",
    title: "Front End Engineer – Freelance",
    workLink: "https://www.zentradev.vercel.app/",
    description:
      "Worked with a range of agencies, start-ups and individuals to build products. Clients included well known Photographers, local Schools, and Kitchen Consultants.",
    tech: "React • NextJS • TypeScript • Contentful • TailwindCSS • Chakra UI",
  },
  {
    period: "2020 - 2021",
    title: "Tech Talent Acquisition Consultant - EBC",
    workLink: "https://www.ethosbc.com/",
    description:
      "International full-cycle technical recruiting experience, with a deep understanding of global recruitment practices and the ability to source, engage, and activate passive candidates",
    tech: "SalesForce • SmartRecruiters • Pocket Recruiter • Bullhorn",
  },
];

const Experience = ({
  period,
  title,
  workLink,
  description,
  tech,
}: {
  period: string;
  title: string;
  workLink: any;
  description: string;
  tech: string;
}) => {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode } = toggleFromContext;

  return (
    <div className="lg:grid lg:grid-cols-4">
      <p className={!isDarkMode ? "copy" : "copy-light"}>{period}</p>
      <div className="lg:col-span-3">
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
              className={!isDarkMode ? "w-[14px] h-[14px] transform rotate-[20deg]" : "w-[10px] h-[10px] ml-0.5 transform rotate-[20deg]"}
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

export default Experience;
