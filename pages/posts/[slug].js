// }

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BlogLayout from '../../components/BlogLayout';
const CONTENT_API_KEY = '47225b98eaa1d61ea1463d34c0';
async function getPost(slug) {
  const res = await fetch(
    `https://koushith-portfolio-blog.herokuapp.com/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json());

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

  const [enableLoadComments, setEnableLoadComments] = useState(true);

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
    script.src = 'https://ghostcms-nextjs.disqus.com/embed.js';
    script.setAttribute('data-timestamp', Date.now().toString());

    document.body.appendChild(script);
  }

  return (
    // <div>
    //   <h1>{post.title}</h1>
    //   <div dangerouslySetInnerHTML={{ __html: post.html }}></div>

    //   {enableLoadComments && <p onClick={loadComments}>Load Comments</p>}

    //   <div id='disqus_thread'></div>
    // </div>

    <>
      <BlogLayout post={post} />
    </>
  );
};

export default Post;
