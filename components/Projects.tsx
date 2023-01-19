import Spacer from "./Spacer";

export const project = [
  {
    period: "2021 - current",
    img: '/logo',
    title: "Trovali",
    workLink: "https://face-recognition-juanbri.vercel.app/",
    description:
      "Led a team of 3 engineers to develop our web3 creator tools and eBook NFT app. Worked closely with the CTO to build our tactical objectives and improve both our technical directions and shipping frequency.",
    tech: `React • NextJS • RESTFUL API • CI/CD • Jira • Git • 
    <a href="https://www.metaplex.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">Metaplex</a> 
    • TailwindCSS`,
  },
  {
    period: "2019 - current",
    img: '',
    title: "Front End Engineer – Freelance",
    workLink: "https://www.zentradev.vercel.app/",
    description:
      "Worked with a range of agencies, start-ups and individuals to build products. Clients included well known Photographers, local Schools, and Kitchen Consultants.",
    tech: "React • NextJS • TypeScript • Contentful • TailwindCSS • Chakra UI",
  },
  {
    period: "2020 - 2021",
    img: '',
    title: "Tech Talent Acquisition Consultant - EBC",
    workLink: "https://www.ethosbc.com/",
    description:
      "International full-cycle technical recruiting projects, with a deep understanding of global recruitment practices and the ability to source, engage, and activate passive candidates",
    tech: "SalesForce • SmartRecruiters • Pocket Recruiter • Bullhorn",
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
      <p className="copy">{period}</p>
      <div className="lg:col-span-3">
        <img src={img} className="w-8 h-8" />
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
              className="w-[14px] h-[14px] transform rotate-[10deg]"
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
