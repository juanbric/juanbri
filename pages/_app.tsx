import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
export default MyApp;
