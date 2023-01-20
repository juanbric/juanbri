//@ts-ignore
import { Helmet } from "react-helmet";
import { URL } from "@/config";

const Schema = ({
  title,
  date,
  image,
  articleBody,
  description,
}: {
  title: any;
  date: any;
  image: any;
  articleBody: any;
  description: any;
}) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${URL}"
              },
              "headline": "${title}",
              "datePublished": "${date}",
              "author": {
                "@type": "Person",
                "name": "Juan Pablo Briceno | Front End Developer | Las Palmas de Gran Canaria | Spain"
              },
              "image": "${image}",
              "articleBody": "${articleBody}",
              "publisher": {
                "@type": "Person",
                "name": "Juan Pablo Briceno | Front End Developer | Las Palmas de Gran Canaria | Spain",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://svgshare.com/i/pdv.svg"
                }
              },
              "copyrightYear": 2023,
              "inLanguage": "en-UK",
              "description": "${description}"
            }
          `}
      </script>
    </Helmet>
  );
};

export default Schema;