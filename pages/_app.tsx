import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Layout from "@/components/Layout";
import { createContext, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export const ToggleContext = createContext<any>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSpanish, setIsSpanish] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  function toggleSpanish() {
    setIsSpanish(!isSpanish);
  }

  return (
    <>
      <ChakraProvider>
        <ToggleContext.Provider
          value={{
            toggleDarkMode,
            toggleSpanish,
            isDarkMode,
            isSpanish,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ToggleContext.Provider>
      </ChakraProvider>
      <Analytics />
    </>
  );
}
export default MyApp;
