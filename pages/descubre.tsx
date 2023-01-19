import BlogCard from "@/components/BlogCard";
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

const descubre = ({ blogs }: { blogs: any }) => {
  console.log(blogs);
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
          {blogs?.map((article: any, i: any) => {
            const { title, slug, description } = article?.fields;
            const img = article?.fields.img.fields.file.url;
            return (
              <BlogCard
                key={i}
                slug={slug}
                img={img}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default descubre;
