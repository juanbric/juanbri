import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";

const Links = ({ icon, link }: { icon: any; link: any }) => {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode } = toggleFromContext;
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 gap-4"
      >
        <img
          src={icon}
          className={
            !isDarkMode
              ? "w-[36px] mx-2"
              : "w-[26px]"
          }
        />
      </a>
    </>
  );
};

export default Links;
