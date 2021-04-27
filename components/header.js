import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import cn from 'classnames';
import Image from 'next/image';

export default function Header(props) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className='sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60 bg-white dark:bg-black'>
      <div className='flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6 bg-white dark:bg-black'>
        <div className='flex items-center'>
          <Link href='/'>
            <a className='text-lg md:text-xl font-bold ml-3 text-white dark:text-gray-100'>
              Koushith
            </a>
          </Link>
        </div>
        <div>
          <button
            className='flex items-center block px-3 py-2 text-white border border-white rounded md:hidden'
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            <svg
              className='w-3 h-3 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>

          <ul
            className={cn(
              'md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto',
              mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
            <button
              aria-label='Toggle Dark Mode'
              type='button'
              className='bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
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
            {[
              { title: 'Home', route: '/' },
              { title: 'About', route: '/about' },
            ].map(({ route, title }) => (
              <li className='mt-3 md:mt-0 md:ml-6' key={title}>
                <Link href={route}>
                  <a className='block text-white'>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
