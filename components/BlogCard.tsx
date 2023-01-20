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
      <img
        src={img}
        className="h-[150px] flex items-center justify-center self-center"
      />
      <h2 className="mb-2 mt-4">{title}</h2>
      <h3 className="copy shorten-p">{description}</h3>
    </>
  );
};

export default BlogCard;
