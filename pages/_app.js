import { useEffect } from 'react';

import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/Layout';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
//import Container from "@components/Container";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Head>
          <title>Koushith Amin</title>
          <meta name='Description' content='Portfolio ' />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
