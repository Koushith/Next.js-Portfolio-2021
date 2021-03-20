import { useState } from 'react';

const Divider = () => {
  return (
    <div className='border border-gray-200 dark:border-gray-600 w-full my-8' />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className='text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100'>
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className='mb-4 ml-2'>
      <div className='flex items-center mb-2 text-green-700 dark:text-green-300'>
        <span className='sr-only'>Check</span>
        <svg className='h-4 w-4 mr-2' viewBox='0 0 24 24'>
          <g
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
            <path d='M22 4L12 14.01l-3-3' />
          </g>
        </svg>
        <p className='font-medium text-gray-900 dark:text-gray-100'>{title}</p>
      </div>
      <p className='text-gray-700 dark:text-gray-400 ml-6'>{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title='First Computer'>
        I remember many nights playing Age of Empires, Lego Island, and
        Runescape.
      </Step>
    </ul>
    <Divider />
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white'>
        Timeline
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title='First Design Workshop- November 2020.'>
          Conducted a workshop on Intro to UI design using Figma for Bchain
          Dynamics Students.
        </Step>
        <Step title='First PR Merge'>August 2020 ----.</Step>
        <Step title='Joined Consenso Labs - July 7th-2020.'>
          I'm excited to join Consenso Labs as a Founding Team member. also this
          is my First Dev Job.
        </Step>
        <Step title='Left Infosys Limited - 2019 May to July-2020.'>
          Left Infosys Limited- TBU
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title='First Solo Trip -Nov 11th 2019✨'>TBU</Step>

        <Step title='First Job- Infosys Limited - May 2019.'>TBU</Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type='button'
          className='flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100'
          onClick={() => showFullTimeline(true)}
        >
          See More
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
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>
      )}
    </>
  );
}
