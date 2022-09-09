/* eslint-disable max-len, @next/next/no-page-custom-font, @next/next/no-document-import-in-page, react/display-name */
import Document, { Head, Html, Main, NextScript } from "next/document";
import type { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (App) => (props: JSX.IntrinsicAttributes) => sheet.collectStyles(<App {...props} />)
    );

    // const styleTags = sheet.getStyleElement();

    return page;
  }

  render(): JSX.Element {
    return (
      <Html dir={"ltr"} lang={"pt-br"}>
        <Head>
          <meta key={"userAgentCompatible"} httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
          <link rel={"preconnect"} href={"https://fonts.googleapis.com"} crossOrigin={"crossOrigin"} />
          <link rel={"preconnect"} href={"https://fonts.gstatic.com"} crossOrigin={"crossOrigin"} />
          <link rel={"preconnect"} href={"https://rsms.me"} crossOrigin={"crossOrigin"} />
          <link href={"https://rsms.me/inter/inter.css"} rel={"stylesheet"} />
          {/* <link href={"https://fonts.googleapis.com/css2?family=Raleway&family=Zilla+Slab:ital,wght@0,400;0,700;1,400&display=swap"} rel={"stylesheet"} />*/}
          {this.props.styleTags}
        </Head>
        <body key={"body"}>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}

export default CustomDocument;
