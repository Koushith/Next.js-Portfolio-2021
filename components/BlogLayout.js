import Image from 'next/image';

export default function BlogLayout({ post }) {
  return (
    <article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
        {post.title}
      </h1>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2'>
        <div className='flex items-center'>
          <Image
            alt='Koushith'
            height={24}
            width={24}
            src='/avatar.jpg'
            className='rounded-full'
          />
          <p className='text-sm text-gray-700 dark:text-gray-300 ml-2'>
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
        <div id='disqus_thread'></div>
      </div>
    </article>
  );
}
