import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import Spacer from "./Spacer";

const BlogCard = ({
  img,
  title,
  description,
}: {
  img: any;
  title: any;
  description: any;
}) => {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode } = toggleFromContext;
  
  return (
    <>
      <img
        src={img}
        className=" rounded-[6px] object-cover h-[200px] w-full"
        width={800}
        height={300}
      />
      <h2 className="mb-2 mt-4 text-start">{title}</h2>
      <h3 className={!isDarkMode ? "copy shorten-p text-start" : "copy-light shorten-p text-start"}>{description}</h3>
      <Spacer size={8} />
    </>
  );
};

export default BlogCard;
