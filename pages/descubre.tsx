import Link from "next/link";

const descubre = () => {
  return (
    <div className="lg:grid grid-cols-4 gap-8">
      <div className="col-span-1">
        <h2 className="header">Blog</h2>
        <h3 className="copy my-8 ">
          Whether you're a developer, designer, entrepreneur or just curious
          about the digital world, I invite you to join me on this journey into
          the exciting and ever-evolving world of web development.
        </h3>
      </div>
      <div className="lg:col-span-3">
        <div className="lg:grid grid-cols-2 gap-8">
          {blog.map((entry, i) => {
            return (
              <BlockCard
                key={i}
                slug={entry}
                img={entry}
                title={entry}
                description={entry}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const BlockCard = ({
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
    <Link className="lg:col-span-1 hover:grow" href={slug}>
      <img src={img} className="h-[150px]" />
      <h2 className="my-2">{title}</h2>
      <h3 className="copy shorten-p">{description}</h3>
    </Link>
  );
};

export default descubre;
