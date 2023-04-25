import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";
import Header from "./Header";
import Spacer from "./Spacer";

const Blog = ({ blogs }: { blogs: any }) => {
  return (
    <section className="">
      <Header
        category={"EL BLOG"}
        title={"Las Notas De Juanbri"}
        description={
          "Estrategias para impulsar tu camino empresarial sin dejarte paralizar por el miedo a probar cosas nuevas."
        }
      />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <Spacer size={10} />
          <div className="md:grid md:grid-cols-3 md:gap-12">
            {blogs
              .filter((entry: any) =>
                false
                  ? entry.fields.language === "en"
                  : entry.fields.language === "es"
              )
              .slice(0, 3)
              .map((article: any, i: any) => {
                const { title, slug, description, language } = article?.fields;
                const img = article?.fields.img.fields.file.url;
                const date = article.sys.updatedAt;
                return (
                  <div
                    key={article?.sys.id}
                    className="md:col-span-1 md:mb-0 mb-6"
                  >
                    <Link href={slug}>
                      <BlogCard
                        img={img}
                        title={title}
                        description={description}
                        date={date}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="text-center mt-16 hover:scale-105 transform-gpu ease-in-out duration-300">
            <Link
              href={"/discover"}
              className="bg-blue py-3 rounded-[2px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
            >
              Continue Exploring
            </Link>
          </div>
        </div>
      </div>
      <Spacer size={40} />
    </section>
  );
};

export default Blog;
