import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";
import { URL } from "@/config";
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

const Discover = ({ blogs }: { blogs: any }) => {
  const description =
    "Join me on a journey into the exciting world of web development... where I'll reveal insider tips and tricks to take your skills to the next LEVEL and become ...";
  const title = "Blog | Juan Pablo Briceno";
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
        url={URL + "/discover"}
        image={image}
      />
      <Spacer size={40} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <div className="flex md:grid md:grid-cols-2">
            <div className="">
              <p className="title mb-4 md:mb-8">BEFORE YOU READ</p>
              <h2 className="huge-title mb-4 md:mb-8">
                Get The Latest Issue Of The Juanbri Letter Sent Straight To Your
                Inbox
              </h2>
              <p className="mb-6 md:mb-8">
                <span className="font-bold">
                  Join 80,000+ getting mindf*cked every Saturday morning
                </span>{" "}
                while reading The Koe Letter (you’ll learn a bit about life &
                business too.)
              </p>
              <div className="flex-row">
                <input
                  type="email"
                  className="outline-none bg-transparent p-2 border-white border-b mr-5 max-w-[300px]"
                  placeholder="Your email"
                />
                <button className="mt-4 md:mt-0 bg-blue py-2 rounded-[2px] px-8 hover:text-second hover:bg-second hover:scale-110 transform-gpu ease-in-out duration-300">
                  Read For Free
                </button>
              </div>
            </div>
          </div>
          <Spacer size={60} />

          <Header
            category={"THE JUANBRI LETTER"}
            title={"Explore Your Curiosity"}
            description={
              "Deep dives on human potential, lifestyle design, & one-person businesses."
            }
          />
          <div className="md:grid md:grid-cols-3 md:gap-8">
            {blogs
              .filter((entry: any) =>
                true
                  ? entry.fields.language === "en"
                  : entry.fields.language === "es"
              )
              .map((article: any, i: any) => {
                const { title, slug, description, language } = article?.fields;
                const img = article?.fields.img.fields.file.url;
                const date = article.sys.updatedAt;
                return (
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
                        date={date}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Spacer size={40} />
      <Footer copy={"I dive deep into human potential, lifestyle design, and one-person businesses to give you a unique, digestible way of improving your life."} />
    </>
  );
};

export default Discover;
