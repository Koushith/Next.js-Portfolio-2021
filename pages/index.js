import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import Layout from '../components/Layout';
// import BlogPost from '../components/BlogPost';
// import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
// import { Skills } from '@components/Skills';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 '>
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white '>
        Hey, I’m Koushith Amin
      </h1>
      <h2 className='prose text-gray-600 dark:text-gray-400 mb-6'>
        I’m a Frontend Engineer and Visual Designer, living in Bengaluru. I'm currently building next generation DApps
        at Consenso Labs.
      </h2>
      {/* <div className='flex space-x-4'>
        <button className='flex items-center justify-center px-4 py-2  bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded  '>
          Resume
        </button>
        <button className='flex items-center justify-center  px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded '>
          Contact
        </button>
      </div> */}

      {/* <Skills /> */}

      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white'>Projects</h3>
      <ProjectCard
        title='Portex'
        description='Secure crypto portfolio management and exchange application. Portex was on of the top 20 Projects for Celebrity Judging at the ETHDenver hackathon 2021 🏆'
        href='https://github.com/koshikraj/portex'
        icon='nextjs'
      />
      <ProjectCard
        title='SignChain'
        description='Digital signing platform for legal documents. Signchain has bagged 2 sponsor prizes during the EthOnline hackathon 🎉 🎊.'
        href='https://github.com/signchain/core'
        icon='nextjs'
      />
      <ProjectCard
        title='Hack On'
        description='The easiest way to add comments or reviews to your static site. Built using MERN Stack.'
        href='https://hack-on-dev.herokuapp.com/'
        icon='nextjs'
      />
      <ProjectCard
        title='Periple'
        description='Periple- Online Dairy App -UI/UX Case Study. it was a part of 7days of Figma challenge created while learning UI Design'
        href='https://koushith.netlify.app/blog05.html'
        icon='nextjs'
      />
      <ProjectCard
        title='Medicare'
        description='Medicare- Clinic Queue Management App. My first ever UI Design. covered an end to end Design Flow'
        href='https://koushith.netlify.app/blog01.html'
        icon='nextjs'
      />
      <ProjectCard
        title='FEM Design System'
        description='Building my own Component Library to Bootstrap personal projects. made use of React, Styled-Components and much more. inspired by IBM Plex.'
        href='https://github.com/koushith/'
        icon='nextjs'
      />
      <ProjectCard
        title='Documentation Series'
        description='Documenting my Learning process along the way. This helps me to track my progress over time. '
        href='https://www.youtube.com/channel/UC2jU6KNhrAPJ4LIWDuiagnA'
        icon='nextjs'
      />
      <Timeline />
    </div>
  );
}
