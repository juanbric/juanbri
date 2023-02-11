import MetaTag from "@/components/MetaTag";
import Projects from "@/components/Projects";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";
import { URL } from "@/config";
import { createClient } from "contentful";
import { useContext } from "react";
import { ToggleContext } from "./_app";
import Banner from "@/components/Banner";
import Resources from "@/components/Resources";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

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
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode, isSpanish } = toggleFromContext;
  const bio = isSpanish
    ? "GM. Soy Juan, un desarrollador Front End apasionado por la creación de productos dinámicos y centrados en el usuario. Con experiencia en varios países e idiomas, actualmente llamo a la soleada ciudad de Las Palmas de Gran Canaria mi hogar en España. Centrado en código limpio, diseño atractivo y product-market-fit. Constantemente deploying, constantemente aprendiendo."
    : "GM. I'm Juan, a passionate Front End developer with a love for building dynamic and user-centric products. Experienced in various countries and languages, I currently call the sunny Las Palmas de Gran Canaria home in Spain. Focused on clean code, beautiful design and product market fit. Constantly shipping, constantly learning.";
  const metaTitle = "Juan Pablo Briceno";
  const localDescription = isSpanish
    ? "Un desarrollador Front End apasionado por la creación de productos dinámicos y centrados en el usuario. Con experiencia en varios países e idiomas, actualmente llamo a la soleada ciudad de Las Palmas de Gran Canaria mi hogar en España. Centrado en código limpio, diseño atractivo y product-market-fit. Constantemente deploying, constantemente aprendiendo."
    : "A passionate Front End developer with a love for building dynamic and user-centric products. Experienced in various countries and languages, I currently call the sunny Las Palmas de Gran Canaria home in Spain. Focused on clean code, beautiful design and product market fit. Constantly shipping, constantly learning.";
  const date = new Date();
  const image = "https://i.ibb.co/C8cvD7z/Group-2.png";

  const myStuff = [
    {
      icon: "/twitter.svg",
      link: "https://twitter.com/juanbrisol",
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
      description: isSpanish
        ? "Un sitio web de una agencia de desarrollo web que se especializa en crear sitios web y aplicaciones centrados en el usuario, con un enfoque en la utilización de técnicas efectivas de SEO para mejorar presencia en línea. Los servicios incluyen diseño y desarrollo de sitios y aplicaciones web, optimización de motores de búsqueda y consultoría de TI. "
        : "A web development agency website that specializes in creating user-centric websites and apps for clients, with a focus on utilizing effective SEO techniques to improve their online presence. Services include website and application design and development, search engine optimization, and IT Consulting.",
      tech: "React • Next.js • TypeScript • Contentful • Vercel • Email-js • TailwindCSS • Chakra UI",
    },
    {
      screenshot: "/soltype-app.png",
      img: "/soltype.svg",
      title: "Soltype",
      workLink: "https://soltype.io",
      description: isSpanish
        ? "Primera iteración de Soltype. Esta versión inicial de consistía en una plataforma abierta donde cualquiera podía publicar sus escritos como NFT literarios y donde cualquiera podía leer e intercambiar los trabajos publicados por otros. ¡Echale un vistazo!"
        : "Soltype is a NFT eBook marketplace where anyone can collect, read, and resell digital books. Soltype provides you with the tools to invest in literature and fund the stories and authors you love.",
      tech: "React • TypeScript • TailwindCSS • Chakra UI",
    },
    {
      img: "/trovali.svg",
      screenshot: "/trovali-app.png",
      title: "Trovali",
      workLink: "https://face-recognition-juanbri.vercel.app/login",
      description: isSpanish ? (
        <>
          Aplicación Next.js que utiliza tecnología de AI de reconocimiento
          facial para detectar y identificar personas en imágenes. Incluye
          autenticación y autorización de usuario, la capacidad de agregar
          información adicional sobre las personas reconocidas, cargar tal
          información, y una función de búsqueda que permite a los usuarios
          buscar personas por nombre y etiquetas. Si quieres ver el sitio web de
          presentación de esta aplicación, también creado por mí, visita{"  "}
          <a
            href="https://trovali.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 mt-1 hover:underline hover:text-[#3c31dd]"
          >
            https://trovali.vercel.app.
          </a>
        </>
      ) : (
        <>
          Next.js app that uses AI facial recognition technology to detect and
          identify individuals in uploaded images. It includes user
          authentication and authorization, the ability to add extra information
          on the recognized and uploaded individuals, and a search function that
          allows users to search for individuals by name and tags. If you want
          to see the presentation website of this app, also created by me, go to
          {"  "}
          <a
            href="https://trovali.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 mt-1 hover:underline hover:text-[#3c31dd]"
          >
            https://trovali.vercel.app.
          </a>
        </>
      ),
      tech: `React • Next.js • Faceapi.js • Firebase Auth • Firebase Storage • RESTFUL API • CI/CD • Git • TailwindCSS`,
    },
    {
      img: "/melenti.svg",
      title: "Melenti",
      screenshot: "/melenti-app.png",
      workLink: "https://www.melenti.vercel.app/",
      description: isSpanish
        ? "Blog sobre salud mental y bienestar emocional en español. Toda su infraestructura ha sido optimizada para SEO, incluyendo mapa del sitio, esquemas, SEO en el sitio, redacción de textos publicitarios, análisis de palabras clave y más. Esto es WIP."
        : "Blog about mental health and emotional wellbeing in Spanish. All it's infraestructure has been optminized for SEO, including sitemap, schemas, onsite SEO, copy writing, keyword analysis and more. This is WIP.",
      tech: "React • Next.js • TypeScript • Contentful • Email-js • TailwindCSS • Chakra UI",
    },
    {
      img: "/qr.svg",
      screenshot: "/qr-app.png",
      title: "QR Photo App",
      workLink: "https://qr-photo-app.vercel.app/",
      description: isSpanish
        ? "Aplicación que genera un código QR único por cada foto subida. El QR dirige al usuario a una URL dinámica con getStaticPaths y getStaticProps donde se encuentra la imagen cargada."
        : "App that generates a unique QR code per every photo uploaded. The QR directs the user to a dynamic URL with getStaticPaths and getStaticProps where the uploaded picture is contained.",
      tech: `React • Next.js • Firebase Storage • CI/CD • Git • TailwindCSS`,
    },
    {
      screenshot: "/soltype-legacy-app.png",
      img: "/soltype.svg",
      title: "Soltype V1",
      workLink: "https://legacy.soltype.io/#/",
      description: isSpanish
        ? "Primera iteración de Soltype. Esta versión inicial de consistía en una plataforma abierta donde cualquiera podía publicar sus escritos como NFT literarios y donde cualquiera podía leer e intercambiar los trabajos publicados por otros. ¡Echale un vistazo!"
        : "First iteration of Soltype. This initial Soltype version consisted on an open platform where anyone could publish their writings as literary NFTs and where anyone could read and trade the works published by others. Check it out!.",
      tech: "React • TypeScript • TailwindCSS • Chakra UI",
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

      <Spacer size={140} />

      <Resources blogs={blogs} isSpanish={isSpanish} />

      <Spacer size={100} />

      <About myStuff={myStuff} isDarkMode={isDarkMode} />

      <Spacer size={100} />

      <Portfolio isDarkMode={isDarkMode} gigs={gigs} />

      <Spacer size={100} />

      <Footer isDarkMode={isDarkMode} myStuff={myStuff} />
    </>
  );
}
