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
      <link rel="icon" href="https://raw.githubusercontent.com/juanbric/juanbri/d608c72cf152705007d2bf1f32def028e02ca1b2/public/logo.svg" />
      <meta http-equiv="content-language" content="en" />
      <meta name="twitter:site" content="@juanbrisol" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="classification"
        content="agencia de desarrollo web, seo, las palmas de gran canaria, web development agency, freelance developer, frontend developer"
      />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta name="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};
export default MetaTag;
