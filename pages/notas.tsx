import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";
import Subscribe from "@/components/Subscribe";
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

const Notas = ({ blogs }: { blogs: any }) => {
  const description =
    "Acompáñame en este viaje hacia el éxito empresarial en línea. Si estás listo para iniciar tu propio negocio, pero no sabes por dónde empezar, déjame capacitarte con habilidades esenciales para que puedas arrancar con paso firme. No te sientas abrumado por la falta de claridad en tus ideas.";
  const title = "Las Notas De Juanbri | Juan Briceno";
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
        url={URL + "/notas"}
        image={image}
      />
      <Spacer size={80} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <div className="flex md:grid md:grid-cols-2">
            <div className="">
              <p className="title mb-4 md:mb-8">ANTES DE QUE LEAS</p>
              <h2 className="huge-title mb-4 md:mb-8">
                ¿Deseas recibir estos recursos de manera directa?
              </h2>
              <Subscribe />
            </div>
          </div>
          <Spacer size={60} />

          <Header
            category={""}
            title={"Descubre Tu Curiosidad"}
            description={
              "Explorando el potencial humano, estrategias empresariales y oportunidades de emprendimiento en línea."
            }
          />
          <div className="md:grid md:grid-cols-3 md:gap-8">
            {blogs
              .filter((entry: any) =>
                false
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
      <Footer
        copy={
          "Me adentro en el potencial humano y los negocios unipersonales para ofrecerte una forma única de alcanzar tu potencial."
        }
      />
    </>
  );
};

export default Notas;
