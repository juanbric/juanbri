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
          "front end software developer, las palmas de gran canaria, españa, spain, desarrollador frontend, seo"
        }
      />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="21 days" />
      <meta name="creator" content="Juan Pablo Briceno" />
      <link rel="icon" href="https://svgshare.com/i/pdv.svg" />
      <link rel = "canonical" href ={url}/>.
      <meta name="publisher" content="Juan Pablo Briceno (juanbri.dev)" />
      <meta name="author" content="Juan Pablo Briceno (juanbri.dev)" />
      <meta http-equiv="content-language" content="en" />
      <meta
        name="classification"
        content="agencia de desarrollo web, seo, las palmas de gran canaria, web development agency, freelance developer, frontend developer"
      />
      <meta name="robots" content="index, follow" />

      {/* Twitter */}
      <meta name="twitter:site" content="@juanbridev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta name="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
    </Head>
  );
};
export default MetaTag;
