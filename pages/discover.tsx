import BlogCard from "@/components/BlogCard";
import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import { createClient } from "contentful";
import Link from "next/link";

export async function getStaticProps() {
  // Store contentful API keys into a client variable
  const client = createClient({
    //@ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    //@ts-ignore
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  // Store blog content from our contentful space into a res variable
  const res = await client.getEntries({ content_type: "blog" });

  // Adding .items to res gives us the whole object of the blog content
  return {
    props: {
      blogs: res.items,
      revalidate: 1,
    },
  };
}

const discover = ({ blogs }: { blogs: any }) => {
  const description =
    "Join me on a journey into the exciting world of web development... where I'll reveal insider tips and tricks to take your skills to the next LEVEL and become ...";
  const title = "Blog | Briceno | Front End Developer";
  const date = new Date();
  const image =
    "https://firebasestorage.googleapis.com/v0/b/juanbri-face-recognition.appspot.com/o/images%2Flogo.svg?alt=media&token=5662b932-40eb-4b11-b0bb-e4b40d9b48a6";
  const blogDescription =
    "Whether you're a developer, designer, entrepreneur or just curious about the digital world, I invite you to join me on this journey into the exciting and ever-evolving world of web development.";
  return (
    <>
      <Schema
        title={title}
        date={date}
        image={image}
        description={description}
        articleBody={undefined}
      />
      <MetaTag
        title={title}
        description={description}
        url={undefined}
        image={image}
      />
      <h2 className="header">Blog</h2>
      <h3 className="copy mt-8 mb-12">
        {blogDescription.replaceAll("'", "&apos;")}
      </h3>
      <div className="lg:grid grid-cols-2 gap-8">
        {blogs?.map((article: any, i: any) => {
          const { title, slug, description } = article?.fields;
          const img = article?.fields.img.fields.file.url;
          return (
            <Link
              key={article?.sys.id}
              href={slug}
              className="lg:col-span-1 hover:scale-110 transform-gpu ease-in-out duration-300 max-w-[250px] lg:w-auto"
            >
              <BlogCard img={img} title={title} description={description} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default discover;