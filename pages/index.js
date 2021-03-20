import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import Layout from '../components/Layout';
// import BlogPost from '../components/BlogPost';
// import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 '>
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white '>
        Hey, I’m Koushith Amin
      </h1>
      <h2 className='prose text-gray-600 dark:text-gray-400 mb-16'>
        I’m a Frontend Enginner and Visual Designer, living in Bengaluru. I'm
        currently building next generation DApps at Consenso Labs.
      </h2>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white'>
        Projects
      </h3>
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
        description='Periple- Online Dairy App -UI/UX Case Study. it was a part of 7days of Figma challange created while learning UI Design'
        href='https://koushith.netlify.app/blog05.html'
        icon='nextjs'
      />
      {/* <ProjectCard
        title='Lastmin Prep'
        description='Periple- Online Dairy App -UI/UX Case Study. it was a part of 7days of Figma challange created while learning UI Design'
        href='https://github.com/signchain/core'
        icon='nextjs'
      /> */}
      <ProjectCard
        title='Medicare'
        description='Medicare- Clinic Queue Management App. My first ever UI Design. covered an end to end Design Flow'
        href='https://koushith.netlify.app/blog01.html'
        icon='nextjs'
      />
      {/* <ProjectCard
        title='Crypto Exchange Tracker'
        description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
        href='https://fastfeedback.io/'
        icon='nextjs'
      /> */}

      <ProjectCard
        title='FEM Design System'
        description='Building my own Component Library to Bootstrap personal projects. made use of React, Styled-Components and much more. inspired by IBM Plex.'
        href='https://github.com/koushith/'
        icon='nextjs'
      />

      {/* <ProjectCard
        title='Old Portfolio Archive'
        description='Archived list of all of my Portfolios. just to recall old '
        href='https://fastfeedback.io/'
        icon='nextjs'
      /> */}
      <ProjectCard
        title='Documentation Series'
        description='Documenting my Learning process along the way. This helps me to track my progress over time. '
        href='https://koushith97.medium.com/first-blog-post-testing-8999201aeddd'
        icon='nextjs'
      />
      {/* <BlogPost
          title='Everything I Know About Style Guides, Design Systems, and Component Libraries'
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug='style-guides-component-libraries-design-systems'
        />
        <BlogPost
          title='How Stripe Designs Beautiful Websites'
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug='how-stripe-designs-beautiful-websites'
        />
        <BlogPost
          title='Creating a Monorepo with Lerna & Yarn Workspaces'
          summary='In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
          slug='monorepo-lerna-yarn-workspaces'
        />
        <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white'>
          Projects
        </h3>
        <ProjectCard
          title='React 2025'
          description='Build and deploy a modern Jamstack application using the most popular open-source software.'
          href='https://react2025.com/'
          icon='react2025'
        />
        <ProjectCard
          title='Learn Next.js'
          description='A free video course for building static and server-side rendered applications with Next.js and React.'
          href='https://masteringnextjs.com/'
          icon='nextjs'
        />
        <ProjectCard
          title='Fast Feedback'
          description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
          href='https://fastfeedback.io/'
          icon='fastfeedback'
        />
        <Timeline />
        <Subscribe /> */}
      <Timeline />
    </div>
  );
}
