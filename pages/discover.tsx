import BlogCard from "@/components/BlogCard";
import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";
import { createClient } from "contentful";
import Link from "next/link";
import { useContext } from "react";
import { ToggleContext } from "./_app";

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

const Discover = ({ blogs }: { blogs: any }) => {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode, isSpanish } = toggleFromContext;
  const description = isSpanish
    ? "Estás preparado para venirte conmigo en un viaje al apasionante mundo del desarrollo web? donde revelaré trucos y consejos para llevar tus habilidades al siguiente NIVEL y convertirte en..."
    : "Join me on a journey into the exciting world of web development... where I'll reveal insider tips and tricks to take your skills to the next LEVEL and become ...";
  const title = "Blog | Briceno | Front End Developer";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.svg";
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
      <h3 className={!isDarkMode ? "copy mt-8 mb-12" : "copy-light mt-8 mb-12"}>
        {isSpanish
          ? "Bien seas un desarrollador web, diseñador, emprendedor o simplemente tengas curiosidad por el mundo digital, te invito a que te unas en este viaje hacia el emocionante y dinámico mundo del desarrollo web"
          : "Whether you're a developer, designer, entrepreneur or just curious about the digital world, I invite you to join me on this journey into the exciting and ever-evolving world of web development."}
      </h3>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        {blogs?.map((article: any, i: any) => {
          const { title, slug, description, language } = article?.fields;
          const img = article?.fields.img.fields.file.url;
          return (
            <>
              {(isSpanish && language === "es") ||
              (!isSpanish && language === "en") ? (
                <div
                  key={i}
                  className="md:col-span-1 md:mb-0 mb-6 hover:scale-105 transform-gpu ease-in-out duration-300"
                >
                  <Link
                    key={article?.sys.id}
                    href={slug}
                    className="justify-center items-center"
                  >
                    <BlogCard
                      img={img}
                      title={title}
                      description={description}
                    />
                  </Link>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Discover;
