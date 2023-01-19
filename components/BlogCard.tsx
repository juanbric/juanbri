import Link from "next/link";

const BlogCard = ({
  slug,
  img,
  title,
  description,
}: {
  slug: any;
  img: any;
  title: any;
  description: any;
}) => {
  return (
    <Link className="lg:col-span-1 hover:scale-110 transform-gpu ease-in-out duration-300 max-w-[250px] lg:w-auto" href={slug}>
      <img src={img} className="h-[150px] flex items-center justify-center self-center" />
      <h2 className="mb-2 mt-4">{title}</h2>
      <h3 className="copy shorten-p">{description}</h3>
    </Link>
  );
};

export default BlogCard;
