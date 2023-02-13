import Spacer from "./Spacer";

const Projects = ({
  title,
  img,
  workLink,
  description,
  tech,
  screenshot,
}: {
  title: string;
  img: string;
  workLink: any;
  description: any;
  tech: string;
  screenshot: string;
}) => {
  return (
    <a
      href={workLink}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transform-gpu ease-in-out duration-300"
    >
      <img
        src={screenshot}
        className="rounded-[2px] object-cover h-[200px] w-full opacity-70"
        width={800}
        height={300}
      />

      <div className="flex-row flex mt-5 mb-4 items-center">
        <img src={img} className="w-8 h-8 pb-1" />
        <h2 className="text-start sub-title mx-3">{title}</h2>
      </div>
      <h3 className="copy shorten-p text-start">{description}</h3>
      <Spacer size={18} />
      <div className="flex-row flex items-center">
        <p className="sub-sub-title">Visit site</p>
        <img
          src="/arrow.svg"
          className="w-[14px] ml-2 h-[14px] transform rotate-[20deg]"
        />
        
      </div>
      <Spacer size={12} />
      <hr className="h-px bg-gray-200 border-0 dark:bg-white" />
      <Spacer size={12} />
      <h3 className="sub-copy mt-2 mb-10 md:mb-0">{tech}</h3>
    </a>
  );
};

export default Projects;
