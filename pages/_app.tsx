import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import { Fragment } from "react";
import "../styles/base.global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <link rel="icon" href="/favicon.ico"></link>
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default MyApp;
