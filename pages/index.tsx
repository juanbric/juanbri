import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import { URL } from "@/config";
import { createClient } from "contentful";
import Banner from "@/components/Banner";
import Resources from "@/components/Resources";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

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

export default function Home({ blog, blogs }: { blog: any; blogs: any }) {
  const metaTitle = "Juan Briceno | Emprende con tecnología";
  const localDescription =
    "Si quieres iniciar un negocio online pero no sabes por dónde empezar, te capacito con habilidades esenciales para arrancar con paso firme. Empieza tu camino empresarial sin sentirte abrumado por la falta de claridad en tus ideas.";
  const date = new Date();
  const image = "https://i.ibb.co/C8cvD7z/Group-2.png";

  return (
    <>
      <Schema
        title={metaTitle}
        date={date}
        image={image}
        description={localDescription}
        articleBody={undefined}
      />
      <MetaTag
        title={metaTitle}
        description={localDescription}
        url={URL}
        image={image}
      />
      <Banner />
      {/* <Resources /> */}
      <About />
      <Blog blogs={blogs} />
      <Footer
        copy={
          "Me adentro en el potencial humano, estrategias empresariales y posibilidades en línea, para ofrecerte un enfoque simple de cómo comenzar tu proyecto."
        }
      />
    </>
  );
}
