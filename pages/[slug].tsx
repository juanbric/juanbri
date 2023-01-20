import { createClient } from "contentful";
//@ts-ignore
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Skeleton from "@/components/Skeleton";
import Schema from "@/components/Schema";
import MetaTag from "@/components/MetaTag";
import Spacer from "@/components/Spacer";
import ProgressBar from "@/components/ProgressBar";
import { URL } from "@/config";
import Link from "next/link";

// Store contentful API keys into a client variable
const client = createClient({
  //@ts-ignore
  space: process.env.CONTENTFUL_SPACE_ID,
  //@ts-ignore
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

// Generates all different slugs we have in contentful
export const getStaticPaths = async () => {
  // Store blog content from our contentful space into a res variable
  const res = await client.getEntries({
    content_type: "blog",
  });

  // Returns the slug in the following form
  // params: { slug: slug }
  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

// Runs this function for every slug retrieved above
export async function getStaticProps({ params }: { params: any }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { blog: items[0] },
    revalidate: 1,
  };
}

export const Slug = ({ blog }: { blog: any }) => {
  if (!blog) return <Skeleton />;
  console.log("blog", blog);
  const { title, article, slug, img, description, metaDescription, category } =
    blog.fields;
  const imgUrl = img.fields.file.url;
  const date = blog.sys.updatedAt;
  const options = { year: "numeric", month: "short", day: "numeric" };
  //@ts-ignore
  const localDate = new Date(date).toLocaleDateString("es-ES", options);

  return (
    <>
      <Schema
        title={title}
        date={date}
        image={`https:${imgUrl}`}
        articleBody={article}
        description={metaDescription}
      />
      <MetaTag
        title={title + " | Briceno"}
        description={metaDescription}
        url={URL + slug}
        image={"https:" + imgUrl}
      />
      <article>
        <h1 className="header">{title}</h1>
        <h3 className="copy my-8">{description}</h3>
        <section className="flex flex-wrap">
          <div>
            <img src="/logo.svg" className="w-6 h-6 mb-4" />
          </div>
          <Link className="hover:underline copy pl-2 md:pl-4 pr-6" href={"/"}>
            Juan Pablo Briceno
          </Link>
          <span className="sub-copy">Last update on {localDate}</span>
        </section>
        <Spacer size={18} />
        <Image
          src={"https:" + imgUrl}
          alt="Cover image"
          className="object-cover h-[300px] w-full rounded-[6px]"
          width={800}
          height={300}
        />
        <Spacer size={24} />
        <ReactMarkdown className="markdown">{article}</ReactMarkdown>
        <ProgressBar />
      </article>
    </>
  );
};

export default Slug;
