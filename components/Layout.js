import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Footer from './Footer';

// import Header from './Header';

// import Footer from '@/components/Footer';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Koushith Amin – Developer, writer, UI Designer.',
    description: `Front-end Engineer and UI Designer.`,

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

      {/* nav */}

      <div class='sticky-nav max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60'>
        <div class='relative flex items-center justify-between'>
          <a
            href='/'
            aria-label='Company'
            title='Company'
            class='inline-flex items-center'
          >
            <span class=' text-xl font-bold tracking-wide text-gray-800 uppercase dark:text-white'>
              Koushith
            </span>
          </a>
          <ul class='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Link href='/'>
                <a className='p-1 sm:p-4 text-gray-900 dark:text-gray-100'>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className='p-1 sm:p-4 text-gray-900 dark:text-gray-100'>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <a className='p-1 sm:p-4 text-gray-900 dark:text-gray-100'>
                  Blog
                </a>
              </Link>
            </li>

            <li>
              <button
                aria-label='Toggle Dark Mode'
                type='button'
                className='bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10'
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {mounted && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke='currentColor'
                    className='h-4 w-4 text-gray-800 dark:text-gray-200'
                  >
                    {theme === 'dark' ? (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                      />
                    ) : (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      />
                    )}
                  </svg>
                )}
              </button>
            </li>
          </ul>
          <div class='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              class='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                class='w-5 text-gray-600 dark:bg-gray-100'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class='absolute top-0 left-0 w-full dark:bg-black '>
                <div class='p-5 bg-white border rounded shadow-sm dark:bg-black'>
                  <div class='flex items-center justify-between mb-4 dark:bg-black'>
                    <div>
                      <a
                        href='/'
                        aria-label='Company'
                        title='Company'
                        class='inline-flex items-center'
                      >
                        <span class=' text-xl font-bold tracking-wide text-gray-800 uppercase dark:text-gray-100'>
                          Koushith
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        class='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline '
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class='space-y-4'>
                      <li>
                        <Link href='/'>
                          <a
                            className='p-1 sm:p-4 text-gray-900 dark:text-gray-100'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/about'>
                          <a
                            className='p-1 sm:p-4 text-gray-900 dark:text-gray-100'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            About
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog'>
                          <a
                            className='p-1 sm:p-4 text-gray-900 dark:text-gray-100'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Blog
                          </a>
                        </Link>
                      </li>

                      <li>
                        <button
                          aria-label='Toggle Dark Mode'
                          type='button'
                          className='bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10'
                          onClick={() =>
                            setTheme(theme === 'light' ? 'dark' : 'light')
                          }
                        >
                          {mounted && (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 24 24'
                              fill='currentColor'
                              stroke='currentColor'
                              className='h-4 w-4 text-gray-800 dark:text-gray-200'
                            >
                              {theme === 'dark' ? (
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              ) : (
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                                />
                              )}
                            </svg>
                          )}
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* nav-end */}

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
