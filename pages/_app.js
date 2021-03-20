import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/Layout';
//import Container from "@components/Container";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Koushith Amin</title>
        <meta name='Description' content='Portfolio ' />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
