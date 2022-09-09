import { AppGlobalStyles} from "../src/components/AppGlobalStyles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../src/components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/themes";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <AppGlobalStyles />
      <Head>
        <meta
          key={"viewport"}
          name={"viewport"}
          content={"initial-scale=1.0, minimum-scale=1.0, width=device-width"}
        />
        <title key={"title"}>
          Jimmy Andrade - website oficial - músicas, vídeos e mais
        </title>
      </Head>
      <Header />
      <main className={"app"} id={"content"} role={"main"} tabIndex={-1}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  </>
);

export default App;
