import Link from "next/link";

import Timeline from "../components/Timeline";
import Container from "../components/Container";
import Layout from "../components/Layout";
// import BlogPost from '../components/BlogPost';
// import Subscribe from '../components/Subscribe';
import ProjectCard from "../components/ProjectCard";
import { Skills } from "@components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 ">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ">
        Hey, I’m Koushith Amin
      </h1>
      <h2 className="prose text-gray-600 dark:text-gray-400 mb-6">
        I am a Bangalore based Product Designer and Engineer, currently working
        @Safient as Product Engineer. I love designing and building for the web,
        you can read more about what I do and things I love over my website
        koushith.com.
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

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Projects
      </h3>

      <ProjectCard
        title="Ben Wallet"
        description="Event-based conditional wallet account recovery. Implementation of contracts for ERC 4337 account abstraction via alternative mempool.  "
        href="https://devfolio.co/projects/ben-wallet-cf3a"
        icon="nextjs"
      />
      <ProjectCard
        title="Safient Guardians"
        description="Recovery option on Argent-x wallet extension. built at StarkNect CC Hackathon. "
        href="https://devfolio.co/projects/safient-guardians-deed"
        icon="nextjs"
      />
      <ProjectCard
        title="Safient Wallet"
        description="Non-custodial recoverable and inheritable wallets by claiming them at the right time with ease and security. built during EthDenver Hackathon and won 3 bounties 🏆"
        href="https://dorahacks.io/buidl/2222"
        icon="nextjs"
      />
      <ProjectCard
        title="Safient Protocol"
        description="Manage your crypto secrets securely and conveniently that help you or your beneficiaries to claim crypto assets without intermediaries. Built at DoraHacks Hackathon "
        href="https://dorahacks.io/buidl/568"
        icon="nextjs"
      />
      <ProjectCard
        title="Ketch"
        description="Fully functional Ecom store developed using MERN Stack. designs are inspired by Myntra. "
        href="https://github.com/Koushith/Ketch-Store"
        icon="nextjs"
      />
      <ProjectCard
        title="Portex"
        description="Secure crypto portfolio management and exchange application. Portex was on of the top 20 Projects for Celebrity Judging at the ETHDenver hackathon 2021 🏆"
        href="https://github.com/koshikraj/portex"
        icon="nextjs"
      />
      <ProjectCard
        title="SignChain"
        description="Digital signing platform for legal documents. Signchain has bagged 2 sponsor prizes during the EthOnline hackathon 🎉 🎊."
        href="https://github.com/signchain/core"
        icon="nextjs"
      />

      <ProjectCard
        title="Periple"
        description="Periple- Online Dairy App -UI/UX Case Study. it was a part of 7days of Figma challenge created while learning UI Design"
        href="https://koushith.netlify.app/blog05.html"
        icon="nextjs"
      />
      <ProjectCard
        title="Medicare"
        description="Medicare- Clinic Queue Management App. My first ever UI Design. covered an end to end Design Flow"
        href="https://koushith.netlify.app/blog01.html"
        icon="nextjs"
      />
      <ProjectCard
        title="FEM Design System"
        description="Building my own Component Library to Bootstrap personal projects. made use of React, Styled-Components and much more. inspired by IBM Plex."
        href="https://github.com/Koushith/Surprise"
        icon="nextjs"
      />
      <ProjectCard
        title="Documentation Series"
        description="Documenting my Learning process along the way. This helps me to track my progress over time. "
        href="https://www.youtube.com/channel/UC2jU6KNhrAPJ4LIWDuiagnA"
        icon="nextjs"
      />
      <Timeline />
    </div>
  );
}
