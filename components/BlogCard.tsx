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
  return (
    <>
      <img src={img} className="self-center md:self-start rounded-[6px] w-full" />
      <h2 className="mb-2 mt-4 text-center md:text-start md:self-start">
        {title}
      </h2>
      <h3 className="copy shorten-p text-center md:text-start">
        {description}
      </h3>
      <Spacer size={8} />
    </>
  );
};

export default BlogCard;
