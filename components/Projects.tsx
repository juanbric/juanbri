import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import Spacer from "./Spacer";

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

export default Projects;
