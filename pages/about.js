import Link from 'next/link';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className='font-medium mb-2 text-lg'>
      <a
        className='flex items-center text-gray-900 dark:text-gray-100'
        target='_blank'
        rel='noopener noreferrer'
        href={link}
      >
        {title}
        <div>
          <svg
            className='h-4 w-4 ml-1'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className='text-gray-600 dark:text-gray-400 mb-8'>{children}</p>
  </>
);

export default function About() {
  return (
    <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
        About Me
      </h1>
      <div className='mb-8 prose leading-6 text-gray-600 dark:text-gray-400'>
        <p>Hello, everyone ✋</p>
        <p style={{ textDecoration: 'line-through' }}>
          {' '}
          I'm a software developer living in Bangalore, India. I love to build
          and design things. I have experience in creating cross-platform
          desktop applications, website backends, user experience, and visual
          design. I have worked extensively in teams and alone.
        </p>{' '}
        <p>
          WTF? Sound human Koushith. Okay, here you go. Huh, so you're
          interested in knowing more about me? The first thing I should mention
          that I don't have any unique talents. I consider myself pretty
          average.
        </p>
        <p>
          <b>My two life principles are -</b>

          <ul>
            <li> Don't give up.</li>
            <li>Work really hard in the right direction.</li>
          </ul>
        </p>
        <p>
          That's how I have achieved whatever you see so far. Born in a small
          Village in Kodagu also known as (Coorg- Scotland of India), I have
          humble beginnings. Until 2016, the only thing I knew about computers
          was that it was invented by a guy named Charles or something..From
          there, I have taught myself everything. I'm still learning. I still
          have to Google the basic stuff like adding inline CSS in HTML :p.
        </p>{' '}
      </div>
      <h2 className='font-bold text-3xl tracking-tight mb-4 text-black dark:text-white'>
        Conference Talks
      </h2>
      <Talk
        title='Intro to Figma'
        link='https://www.youtube.com/watch?v=Sz7SImkdIpo&fe3'
      >
        Workshop on intro to UI Design using Figma.
      </Talk>
    </div>
  );
}
