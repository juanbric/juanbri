export const myStuff = [
  {
    platform: "Github",
    link: "https://github.com/juanbric",
    userName: "@juanbric",
  },
  {
    platform: "Twitter",
    link: "https://twitter.com/juanbrisol",
    userName: "@juanbrisol",
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/juanpablobriceno/",
    userName: "Juan Pablo Briceno",
  },
  {
    platform: "Email",
    link: `mailto:juanbri@gmx.com?subject=Hey%20Juan%20%3A)`,
    userName: "juanbri [at] gmx [dot] com",
  },
];

const Links = ({
  platform,
  link,
  userName,
}: {
  platform: any;
  link: any;
  userName: any;
}) => {
  return (
    <div className="lg:grid lg:grid-cols-4 pb-4">
      <p className="copy mt-1.5">{platform}</p>
      <h2 className="col-span-3 flex items-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2.5 hover:underline"
        >
          {userName}
        </a>
        <a
          href={link}
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
    </div>
  );
};

export default Links;
