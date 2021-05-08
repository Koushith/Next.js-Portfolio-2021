import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      {/* <footer class=' pt-10 sm:mt-10 pt-10'>
        <div class='max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center'>
          <div class='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
            <div class='text-xs uppercase text-gray-400  hover:text-gray-900  font-medium mb-6'>
              Main Links
            </div>
            <div className='flex flex-col space-y-4'>
              <Link href='/'>
                <a className='text-gray-500  hover:text-gray-600 transition'>
                  Home
                </a>
              </Link>
              <Link href='/about'>
                <a className='text-gray-500 hover:text-gray-600 transition'>
                  About
                </a>
              </Link>
              <Link href='/newsletter'>
                <a className='text-gray-500 hover:text-gray-600 transition'>
                  Newsletter
                </a>
              </Link>
            </div>
          </div>

          <div class='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
            <div class='text-xs uppercase text-gray-400 font-medium mb-6'>
              Proof of Work
            </div>
            <div className='flex flex-col space-y-4'>
              <ExternalLink href='https://github.com/koushith'>
                GitHub
              </ExternalLink>
              <ExternalLink href='https://twitter.com/KoushithAmin'>
                Twitter
              </ExternalLink>

              <ExternalLink href='https://dribbble.com/Koushith/'>
                Dribbble
              </ExternalLink>
            </div>
          </div>

          <div class='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
            <div class='text-xs uppercase text-gray-400 font-medium mb-6'>
              Social
            </div>
            <div className='flex flex-col space-y-4'>
              <ExternalLink href='https://www.linkedin.com/in/koushith-b-r-663787146/'>
                LinkedIn
              </ExternalLink>
              <ExternalLink href='https://www.youtube.com/channel/UC2jU6KNhrAPJ4LIWDuiagnA'>
                YouTube
              </ExternalLink>

              <Link href='/snippets'>
                <a className='text-gray-500 hover:text-gray-600 transition'>
                  Snippets
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div class='pt-2'>
          <div
            class='flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl'
          >
            <div class='mt-2'>
              © {new Date().getFullYear()}. Built with Next.js and TailwindCSS.
            </div>

            <div class='md:flex-auto md:flex-row-reverse mt-2 flex-row flex'>
              <a href='#' class='w-6 mx-1'>
                <i class='uil uil-facebook-f'></i>
              </a>
              <a href='#' class='w-6 mx-1'>
                <i class='uil uil-twitter-alt'></i>
              </a>
              <a href='#' class='w-6 mx-1'>
                <i class='uil uil-youtube'></i>
              </a>
              <a href='#' class='w-6 mx-1'>
                <i class='uil uil-linkedin'></i>
              </a>
              <a href='#' class='w-6 mx-1'>
                <i class='uil uil-instagram'></i>
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}
