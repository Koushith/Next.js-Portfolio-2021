import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Footer from './Footer';

import Header from './Header';

// import Footer from '@/components/Footer';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Koushith Amin – Developer, writer, UI Designer.',
    description: `Front-end Engineer, JavaScript enthusiast, and UI Designer.`,

    type: 'website',
    ...customMeta,
  };

  return (
    <div className='bg-white dark:bg-black'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />

        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Koushith Amin' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@koushithAmin' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>

      <Header
        mounted={mounted}
        setMounted={setMounted}
        theme={theme}
        setTheme={setTheme}
      />

      <main
        id='skip'
        className='flex flex-col justify-center bg-white dark:bg-black px-8'
      >
        {children}
        {/* <Footer /> */}
      </main>
      <Footer />
    </div>
  );
}
