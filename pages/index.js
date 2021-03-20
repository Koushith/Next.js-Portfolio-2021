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
        description='Build and deploy a modern Jamstack application using the most popular open-source software.'
        href='https://github.com/koshikraj/portex'
        icon='nextjs'
      />
      <ProjectCard
        title='SignChain'
        description='A free video course for building static and server-side rendered applications with Next.js and React.'
        href='https://github.com/signchain/core'
        icon='nextjs'
      />

      <ProjectCard
        title='Periple'
        description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
        href='https://fastfeedback.io/'
        icon='nextjs'
      />
      <ProjectCard
        title='Hack On'
        description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
        href='https://fastfeedback.io/'
        icon='nextjs'
      />
      <ProjectCard
        title='Medicare'
        description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
        href='https://fastfeedback.io/'
        icon='nextjs'
      />
      <ProjectCard
        title='Crypto Exchange Tracker'
        description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
        href='https://fastfeedback.io/'
        icon='nextjs'
      />

      <ProjectCard
        title='FEM Design System'
        description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
        href='https://fastfeedback.io/'
        icon='nextjs'
      />
      <ProjectCard
        title='Github Profile Fetcher'
        description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
        href='https://fastfeedback.io/'
        icon='nextjs'
      />
      <ProjectCard
        title='Old Portfolio Archive'
        description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
        href='https://fastfeedback.io/'
        icon='nextjs'
      />
      <ProjectCard
        title='Documentation Series'
        description='The easiest way to add comments or reviews to your static site. Built as part of React 2025.'
        href='https://fastfeedback.io/'
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
