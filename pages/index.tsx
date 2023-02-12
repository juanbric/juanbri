import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import { URL } from "@/config";
import { createClient } from "contentful";
import Banner from "@/components/Banner";
import Resources from "@/components/Resources";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

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
  const bio =
    "GM. I'm Juan, a passionate Front End developer with a love for building dynamic and user-centric products. Experienced in various countries and languages, I currently call the sunny Las Palmas de Gran Canaria home in Spain. Focused on clean code, beautiful design and product market fit. Constantly shipping, constantly learning.";
  const metaTitle = "Juan Pablo Briceno | Web Development & Web Design";
  const localDescription =
    "A passionate Front End developer with a love for building dynamic and user-centric products. Experienced in various countries and languages, I currently call the sunny Las Palmas de Gran Canaria home in Spain. Focused on clean code, beautiful design and product market fit. Constantly shipping, constantly learning.";
  const date = new Date();
  const image = "https://i.ibb.co/C8cvD7z/Group-2.png";

  const myStuff = [
    {
      icon: "/twitter.svg",
      link: "https://twitter.com/juanbridev",
    },
    {
      icon: "/linkedin.svg",
      link: "https://www.linkedin.com/in/juanpablobriceno/",
    },
    {
      icon: "/github.svg",
      link: "https://github.com/juanbric",
    },
    {
      icon: "/email.svg",
      link: `mailto:juanbri@gmx.com?subject=Hey%20Juan%20%3A)`,
    },
  ];

  const gigs = [
    {
      img: "zentra.svg",
      screenshot: "/zentra-app.png",
      title: "Zentra Dev",
      workLink: "https://zentradev.vercel.app/",
      description:
        "A web development agency website that specializes in creating user-centric websites and apps for clients, with a focus on utilizing effective SEO techniques to improve their online presence. Services include website and application design and development, search engine optimization, and IT Consulting.",
      tech: "React • Next.js • TypeScript • Contentful • Vercel • Email-js • TailwindCSS • Chakra UI",
    },
    {
      screenshot: "/soltype-app.png",
      img: "/soltype.svg",
      title: "Soltype",
      workLink: "https://soltype.io",
      description:
        "Soltype is a NFT eBook marketplace where anyone can collect, read, and resell digital books. Soltype provides you with the tools to invest in literature and fund the stories and authors you love.",
      tech: "React • TypeScript • TailwindCSS • Chakra UI",
    },
    {
      img: "/trovali.svg",
      screenshot: "/trovali-app.png",
      title: "Trovali",
      workLink: "https://face-recognition-juanbri.vercel.app/login",
      description:
        "Next.js app that uses AI facial recognition technology to detect and identify individuals in uploaded images. It includes user authentication and authorization, the ability to add extra information+ on the recognized and uploaded individuals, and a search function that allows users to search for individuals by name and tags. If you want to see the presentation website of this app, also created by me, go to https://trovali.vercel.app.",
      tech: `React • Next.js • Faceapi.js • Firebase Auth • Firebase Storage • RESTFUL API • CI/CD • Git • TailwindCSS`,
    },
  ];

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
      <Resources blogs={blogs} />
      <About myStuff={myStuff} />
      <Services />
      <Portfolio gigs={gigs} />
      <Footer
        copy={
          "I delve into the depths of human potential, the art of crafting a personalized lifestyle, and the fulfillment of achieving business success, to provide you with an innovative and easily understandable approach to improving your life."
        }
      />
    </>
  );
}
