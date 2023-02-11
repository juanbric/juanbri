import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";

const Resources = ({ blogs, isSpanish }: { blogs: any; isSpanish: any }) => {
  return (
    <section>
      <div className="md:text-center">
        <p className="title mb-2">RESOURCES</p>
        <h2 className="huge-title mb-2">Where Do I Start?</h2>
        <h2 className="copy mb-[32px] md:mb-[62px]">
          Gain clarity on your future, train your creativity, and learn a
          recession proof skill.
        </h2>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-8">
        {blogs?.slice(0, 12).map((article: any, i: any) => {
          const { title, slug, description, language } = article?.fields;
          const img = article?.fields.img.fields.file.url;
          const date = article.sys.updatedAt;

          return (
            <>
              {(isSpanish && language === "es") ||
              (!isSpanish && language === "en") ? (
                <div key={i} className="md:col-span-1 md:mb-0 mb-6">
                  <Link key={article?.sys.id} href={slug}>
                    <BlogCard
                      img={img}
                      title={title}
                      description={description}
                      date={date}
                    />
                  </Link>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
      <div className="text-center mt-16 hover:scale-105 transform-gpu ease-in-out duration-300">
        <Link
          href={"/discover"}
          className="bg-blue py-3 rounded-[2px] px-12 hover:text-second hover:bg-second "
        >
          Discover
        </Link>
      </div>
    </section>
  );
};

export default Resources;
