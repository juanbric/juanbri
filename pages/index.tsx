import BlogCard from "@/components/BlogCard";
import Experience from "@/components/Experience";
import Links, { myStuff } from "@/components/Links";
import MetaTag from "@/components/MetaTag";
import Projects from "@/components/Projects";
import Schema from "@/components/Schema";
import Skeleton from "@/components/Skeleton";
import Spacer from "@/components/Spacer";
import { URL } from "@/config";
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

  const gigs = [
    {
      period: isSpanish ? "En curso" : "Ongoing",
      img: "/trovali.svg",
      title: "Trovali app",
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
      period: isSpanish ? "En curso" : "Ongoing",
      img: "/qr.svg",
      title: "QR Photo App",
      workLink: "https://qr-photo-app.vercel.app/",
      description: isSpanish
        ? "Aplicación que genera un código QR único por cada foto subida. El QR dirige al usuario a una URL dinámica con getStaticPaths y getStaticProps donde se encuentra la imagen cargada."
        : "App that generates a unique QR code per every photo uploaded. The QR directs the user to a dynamic URL with getStaticPaths and getStaticProps where the uploaded picture is contained.",
      tech: `React • Next.js • Firebase Storage • CI/CD • Git • TailwindCSS`,
    },
    {
      period: "2022",
      img: "/soltype.svg",
      title: "First Soltype app",
      workLink: "https://legacy.soltype.io/#/",
      description: isSpanish
        ? "Primera iteración de Soltype. Esta versión inicial de consistía en una plataforma abierta donde cualquiera podía publicar sus escritos como NFT literarios y donde cualquiera podía leer e intercambiar los trabajos publicados por otros. ¡Echale un vistazo!"
        : "First iteration of Soltype. This initial Soltype version consisted on an open platform where anyone could publish their writings as literary NFTs and where anyone could read and trade the works published by others. Check it out!.",
      tech: "React • TypeScript • TailwindCSS • Chakra UI",
    },
    {
      period: isSpanish ? "En curso" : "Ongoing",
      img: "zentra.svg",
      title: "zentra dev",
      workLink: "https://zentradev.vercel.app/",
      description: isSpanish
        ? "Un sitio web de una agencia de desarrollo web que se especializa en crear sitios web y aplicaciones centrados en el usuario, con un enfoque en la utilización de técnicas efectivas de SEO para mejorar presencia en línea. Los servicios incluyen diseño y desarrollo de sitios y aplicaciones web, optimización de motores de búsqueda y consultoría de TI. "
        : "A web development agency website that specializes in creating user-centric websites and apps for clients, with a focus on utilizing effective SEO techniques to improve their online presence. Services include website and application design and development, search engine optimization, and IT Consulting.",
      tech: "React • Next.js • TypeScript • Contentful • Vercel • Email-js • TailwindCSS • Chakra UI",
    },
    {
      period: isSpanish ? "En curso" : "Ongoing",
      img: "/melenti.svg",
      title: "Blog about Mental Health",
      workLink: "https://www.melenti.vercel.app/",
      description: isSpanish
        ? "Blog sobre salud mental y bienestar emocional en español. Toda su infraestructura ha sido optimizada para SEO, incluyendo mapa del sitio, esquemas, SEO en el sitio, redacción de textos publicitarios, análisis de palabras clave y más. Esto es WIP."
        : "Blog about mental health and emotional wellbeing in Spanish. All it's infraestructure has been optminized for SEO, including sitemap, schemas, onsite SEO, copy writing, keyword analysis and more. This is WIP.",
      tech: "React • Next.js • TypeScript • Contentful • Email-js • TailwindCSS • Chakra UI",
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

      <section>
        <div className="flex md:grid md:grid-cols-2">
          <div className="">
            <h1 className="title mb-4 md:mb-8">JUAN PABLO BRICENO</h1>
            <h2 className="huge-title mb-4 md:mb-8">
              Work Less. Earn More. Live fully.
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
              <button className="mt-4 md:mt-0 bg-blue py-2 rounded-[2px] px-4 hover:text-second hover:bg-second">
                Read for free
              </button>
            </div>
          </div>
        </div>
      </section>
      <Spacer size={150} />
      <section className="">
        <div className="md:text-center">
          <p className="title mb-2">RESOURCES</p>
          <h2 className="huge-title mb-2">Where Do I Start?</h2>
          <h2 className="sub-title mb-[32px] md:mb-[62px]">
            Gain clarity on your future, train your creativity, and learn a
            recession proof skill.
          </h2>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {blogs?.slice(0, 12).map((article: any, i: any) => {
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
        <div className="text-center mt-12">
          <Link
            href={"/discover"}
            className="bg-blue py-2 rounded-[2px] px-4 hover:text-second hover:bg-second"
          >
            Continue exploring
          </Link>
        </div>
      </section>

      <Spacer size={150} />

      <section className="">
        <div className="md:text-center">
          <p className="title mb-2">ABOUT ME</p>
          <h2 className="huge-title mb-2">Who Is Juan Pablo Briceno?</h2>
          <h2 className="sub-title mb-[32px] md:mb-[62px]">
            Just a human obsessed with leveraging the internet and technology to
            live the lives we want.
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">
          <img src="/juan.png" className="w-auto rounded-full shadow-xl" />
          <span className="col-span-3">
            <h2 className="header">Juan Pablo Briceno</h2>
            <h2 className={!isDarkMode ? "copy mt-1" : "copy-light mt-1"}>
              {isSpanish
                ? "Desarrollador Front-End enfocado en producto"
                : "Product-focused Front End Developer"}
            </h2>
            <a
              href={"https://github.com/juanbric"}
              target="_blank"
              rel="noopener noreferrer"
              className="sub-copy hover:underline"
            >
              Github @juanbric
            </a>
          </span>
        </div>
      </section>

      <Spacer size={35} />

      {/* Bio */}
      <section>
        <p>{isSpanish ? "Sobre mi" : "About"}</p>
        <Spacer size={7} />
        <h1 className={!isDarkMode ? "copy" : "copy-light"}>{bio}</h1>
      </section>

      <Spacer size={49} />

      {/* CV */}

      {/* Side Projects */}
      <section>
        <p>{isSpanish ? "Proyectos paralelos" : "Side Projects"}</p>
        <Spacer size={15} />
        {gigs.map((project, i) => {
          return (
            <Projects
              period={project.period}
              title={project.title}
              workLink={project.workLink}
              description={project.description}
              tech={project.tech}
              img={project.img}
              key={i}
            />
          );
        })}
      </section>

      <section>
        <p>{isSpanish ? "Enlaces" : "Links"}</p>
        <Spacer size={15} />
        {myStuff.map((stuff, i) => {
          return (
            <Links
              platform={stuff.platform}
              link={stuff.link}
              userName={stuff.userName}
              key={i}
            />
          );
        })}
      </section>
    </>
  );
}
