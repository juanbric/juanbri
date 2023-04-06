import Head from "next/head";

export const MetaTag = ({
  title,
  description,
  url,
  image,
}: {
  title: any;
  description: any;
  url: any;
  image: any;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={
          "emprender, tecnología, estrategia de negocio, marketing, email marketing, creación de leads, desarrollo web"
        }
      />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="21 days" />
      <meta name="creator" content="Juan Briceno" />
      <link rel="icon" href="/favicon.png" />
      <link rel = "canonical" href ={url}/>
      <meta name="publisher" content="Juan Briceno" />
      <meta name="author" content="Juan Briceno" />
      <meta http-equiv="content-language" content="en" />
      <meta
        name="classification"
        content="emprender, tecnología, estrategia de negocio, marketing, email marketing, creación de leads, desarrollo web"
      />
      <meta name="robots" content="index, follow" />

      {/* Twitter */}
      <meta name="twitter:site" content="@juanbri__" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
    </Head>
  );
};
export default MetaTag;
