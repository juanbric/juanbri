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
import BlogCard from "@/components/BlogCard";
import { Tooltip, useClipboard, useToast } from "@chakra-ui/react";
import CopyButton from "@/components/CopyButton";
import Footer from "@/components/Footer";

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

  const res = await client.getEntries({ content_type: "blog" });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { blog: items[0], blogs: res.items },
    revalidate: 1,
  };
}

export const Slug = ({ blog, blogs }: { blog: any; blogs: any }) => {
  if (!blog) return <Skeleton />;
  const { title, article, slug, img, description, metaDescription, category } =
    blog.fields;
  const link = "https://juanbri.dev/" + slug;
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
        title={title}
        description={metaDescription}
        url={URL + slug}
        image={"https:" + imgUrl}
      />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <article className="mb-14">
            <h1 className="huge-title mt-8">{title}</h1>
            <h3 className="copy-big my-8">{description}</h3>
            <section className="flex flex-wrap">
              <div>
                <img src="/logo.svg" className="w-6 h-6 mb-4" />
              </div>
              <Link
                className="hover:underline copy pl-2 md:pl-2 pr-6"
                href={"/"}
              >
                Juan Pablo Briceno
              </Link>
              <span className="sub-copy mt-0.5">
                Last update on {localDate}
              </span>
              <span className="mt-0.5">
                <Tooltip>
                  <CopyButton link={link} />
                </Tooltip>
              </span>
            </section>
            <Spacer size={18} />
            <Image
              src={"https:" + imgUrl}
              alt="Cover image"
              className="object-cover h-[300px] w-full rounded-[2px]"
              width={800}
              height={300}
            />
            <Spacer size={24} />
            <ReactMarkdown className="markdown">{article}</ReactMarkdown>
            <ProgressBar />
          </article>

          <p className="sub-title">It could also be of your interest</p>
          <Spacer size={37} />

          <div className="md:grid md:grid-cols-3 md:gap-12">
            {blogs
              .filter((entry: any) =>
                true
                  ? entry.fields.language === "en"
                  : entry.fields.language === "es"
              )
              .slice(0, 10)
              .map((entry: any) => {
                const { title, slug, description } = entry.fields;
                const img = entry?.fields.img.fields.file.url;
                return title === blog.fields.title ? null : (
                  <div
                    key={entry?.sys.id}
                    className="md:col-span-1 md:mb-0 mb-6 hover:scale-105 transform-gpu ease-in-out duration-300"
                  >
                    <Link href={slug} className="justify-center items-center">
                      <BlogCard
                        img={img}
                        title={title}
                        description={description}
                        date={undefined}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Spacer size={50} />
      <Footer
        copy={
          "I dive deep into human potential, lifestyle design, and one-person businesses to give you a unique, digestible way of improving your life."
        }
      />
    </>
  );
};

export default Slug;
