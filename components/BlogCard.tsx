import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import Spacer from "./Spacer";

const BlogCard = ({
  img,
  title,
  description,
  date,
}: {
  img: any;
  title: any;
  description: any;
  date: any;
}) => {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode } = toggleFromContext;
  const options = { year: "numeric", month: "short", day: "numeric" };
  //@ts-ignore
  const localDate = new Date(date).toLocaleDateString("es-ES", options);

  return (
    <>
      <img
        src={img}
        className=" rounded-[6px] object-cover h-[200px] w-full"
        width={800}
        height={300}
      />
      <h2 className="mb-3 mt-8 blog-card-title text-start shorten-title">
        {title}
      </h2>
      <h3
        className={
          !isDarkMode
            ? "copy shorten-p text-start"
            : "copy-light shorten-p text-start"
        }
      >
        {description}
      </h3>
      <Spacer size={24} />
      <p className="sub-sub-title">Read full post</p>
      <Spacer size={8} />
      <hr className="h-px mt-5 mb-3 bg-gray-200 border-0 dark:bg-white" />
      <p className="sub-copy">Juan Pablo Briceno • {localDate}</p>
      <Spacer size={8} />
    </>
  );
};

export default BlogCard;
