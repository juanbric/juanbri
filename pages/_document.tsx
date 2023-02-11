import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Poppins&display=swap" rel="stylesheet"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
