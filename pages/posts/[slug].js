// }

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BlogLayout from '../../components/BlogLayout';
const CONTENT_API_KEY = '47225b98eaa1d61ea1463d34c0';
async function getPost(slug) {
  const res = await fetch(
    `https://koushith-portfolio-blog.herokuapp.com/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,feature_image,published_at,reading_time`
  ).then((res) => res.json());

  console.log(res, 'res');
  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  console.log('PARAMNS', params);
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};

const Post = (props) => {
  const { post } = props;

  const [enableLoadComments, setEnableLoadComments] = useState(false);

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  function loadComments() {
    setEnableLoadComments(false);
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = post.slug;
    };

    const script = document.createElement('script');
    s.src = 'https://koushith-blog.disqus.com/embed.js';
    script.setAttribute('data-timestamp', Date.now().toString());

    document.body.appendChild(script);
  }

  return (
    <>
      <article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          {post.title}
        </h1>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2'>
          <div className='flex items-center'>
            <Image
              alt='Koushith Amin'
              height={24}
              width={24}
              src='/avatar.jpg'
              className='rounded-full'
            />
            <p className='text-sm text-gray-700 dark:text-gray-300 ml-2'>
              {new Date(post.published_at).toDateString()}
            </p>
          </div>
          <p className='text-sm text-gray-500 min-w-32 mt-2 md:mt-0'>
            {post.reading_time} min read
          </p>
        </div>
        <img src={post.feature_image} className='my-10 ' />

        <div
          className='prose dark:prose-dark max-w-none w-full'
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
        <div className='mt-8'>{/* <Subscribe /> */}</div>
        <div className='text-sm text-gray-700 dark:text-gray-300'>
          {enableLoadComments && <p onClick={loadComments}>Load Comments</p>}
          <div
            style={{ width: '100% ', margin: '20px 0' }}
            id='disqus_thread'
          ></div>
        </div>
      </article>
    </>
  );
};

export default Post;
