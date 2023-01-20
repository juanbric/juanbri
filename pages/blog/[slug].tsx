import { createClient } from "contentful";
//@ts-ignore
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Skeleton from "@/components/Skeleton";
import Schema from "@/components/Schema";
import MetaTag from "@/components/MetaTag";
import Spacer from "@/components/Spacer";
import ProgressBar from "@/components/ProgressBar";

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

  const { title, article, slug, img, description, metaDescription, category } =
    blog.fields;
  const imgUrl = img.fields.file.url;
  const date = blog.sys.updatedAt;
  const options = { year: "numeric", month: "short", day: "numeric" };
  //@ts-ignore
  const localDate = new Date(date).toLocaleDateString("es-ES", options);

  return (
    <div className="pb-4">
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
        url={undefined + slug}
        image={"https:" + imgUrl}
      />
      <article>
        <h1 className="mt-4 header-medium lg:header azul">{title}</h1>
        <h3 className="description azul my-4">{description}</h3>

        <div className="lg:pr-6">
          <img src="/logo.svg" />
        </div>
        <span className="bg-gris shadow-xl rounded-full header-tiny text-white px-4 py-2 flex items-center justify-center">
          {category}
        </span>
        <span className="copy-tiny gris pt-2 lg:pl-6">
          Last update on {localDate}
        </span>
        <Spacer size={24} />
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
    </div>
  );
};

export default Slug;
