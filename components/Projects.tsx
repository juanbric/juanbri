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
        className="rounded-[2px] object-cover h-[200px] w-full opacity-70 pt-6 md:pt-0"
        width={800}
        height={300}
      />

      <div className="flex-row flex mt-5 mb-4 items-center">
        <img src={img} className="w-8 h-8 pb-1" />
        <h2 className="text-start sub-title mx-3">{title}</h2>
        <img
          src="/arrow.svg"
          className="w-[14px] mt-2 h-[14px] transform rotate-[20deg]"
        />
      </div>

      <h3 className="copy shorten-p text-start">{description}</h3>
      <h3 className="sub-copy my-2">{tech}</h3>
    </a>
  );
};

export default Projects;
