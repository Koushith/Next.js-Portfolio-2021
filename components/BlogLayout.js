import Image from 'next/image';

export default function BlogLayout({ post }) {
  console.log(post, 'props from details');
  const [enableLoadComments, setEnableLoadComments] = React.useState(true);
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
    <article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
        {/* {frontMatter.title} */}
        {post.title}
      </h1>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2'>
        <div className='flex items-center'>
          <Image
            alt='Lee Robinson'
            height={24}
            width={24}
            src='/avatar.jpg'
            className='rounded-full'
          />
          <p className='text-sm text-gray-700 dark:text-gray-300 ml-2'>
            {/* {frontMatter.by}
              {'Lee Robinson / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')} */}{' '}
            {post.published_at}
          </p>
        </div>
        <p className='text-sm text-gray-500 min-w-32 mt-2 md:mt-0'>
          {post.reading_time} min read
        </p>
      </div>
      <div
        className='prose dark:prose-dark max-w-none w-full'
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
      <div className='mt-8'>{/* <Subscribe /> */}</div>
      <div className='text-sm text-gray-700 dark:text-gray-300'>
        {enableLoadComments && <p onClick={loadComments}>Load Comments</p>}
        <div id='disqus_thread'></div>
      </div>
    </article>
  );
}
