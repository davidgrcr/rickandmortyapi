import Head from "next/head";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Head>
          <title>Rick and Morty</title>
          <meta name="description" content="Rick and Morty" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
