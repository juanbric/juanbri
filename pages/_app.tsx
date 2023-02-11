import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
      <Analytics />
    </>
  );
}
export default MyApp;
