import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>🍾</title>
        <meta name="Description" content="Fun little website for a party." />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
