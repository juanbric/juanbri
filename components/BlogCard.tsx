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
  const options = { year: "numeric", month: "short", day: "numeric" };
  //@ts-ignore
  const localDate = new Date(date).toLocaleDateString("es-ES", options);

  return (
    <>
      <img
        src={img}
        className=" rounded-[2px] object-cover h-[200px] w-full"
        width={800}
        height={300}
      />
      <h2 className="mb-3 mt-4 blog-card-title text-start shorten-title">
        {title}
      </h2>
      <h3 className="copy shorten-p text-start">{description}</h3>
      <Spacer size={12} />
      <p className="sub-sub-title">Read full post</p>
      <Spacer size={12} />
      <hr className="h-px bg-gray-200 border-0 dark:bg-white" />
      <Spacer size={12} />
      <p className="sub-copy">Juan Pablo Briceno • {localDate}</p>
      <Spacer size={12} />
    </>
  );
};

export default BlogCard;
