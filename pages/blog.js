import { useState } from "react";

import BlogPost from "../components/BlogPost";

const CONTENT_API_KEY = "f1801865dd6661863fa1d51f7f";

async function getPosts() {
  // "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"

  const res = await fetch(
    `https://ghost-production-824b.up.railway.app/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,published_at`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 10,
  };
};

export default function Blog(props) {
  console.log("PROPS", props);
  const { posts } = props;
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Blogs
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        I've been writing online since 2020, mostly about web development and
        personal mental health. In total, I've written 8 articles on this site.
      </p>

      <div className="relative w-full mb-4">
        <input
          aria-label="Search articles"
          type="text"
          // onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        All Posts
      </h3>

      {posts.map((post) => (
        <BlogPost
          title={post.title}
          summary={post.custom_excerpt}
          slug={post.slug}
          key={post.slug}
          published_at={post.published_at}
        />
      ))}
    </div>
  );
}
