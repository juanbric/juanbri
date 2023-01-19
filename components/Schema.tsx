//@ts-ignore
import { Helmet } from "react-helmet";

const Schema = ({
  title,
  date,
  image,
  description,
}: {
  title: any;
  date: any;
  image: any;
  description: any;
}) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "Website",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://zentradev.vercel.app/"
              },
              "headline": "${title}",
              "datePublished": "${date}",
              "author": {
                "@type": "Person",
                "name": "Juan Pablo Briceno"
              },
              "image": "${image}",
              "copyrightYear": 2023,
              "inLanguage": "en-U",
              "description": "${description}"
            }
          `}
      </script>
    </Helmet>
  );
};

export default Schema;