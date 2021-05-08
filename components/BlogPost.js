import Link from 'next/link';

const BlogPost = ({ title, summary, slug, published_at }) => {
  console.log(published_at);
  const event = new Date(published_at);

  console.log(event.toDateString());

  return (
    <>
      {/* <Link href='/posts/[slug] ' as={`/posts/${slug}`}>
        <a className='w-full'>
          <div className='mb-8 w-full'>
            <div className='flex flex-col md:flex-row justify-between'>
              <h4 className='text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100'>
                {title}
              </h4>
              <p className='text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0'>
                {new Date(published_at).toDateString()}
              </p>
            </div>
            <p className='text-gray-600 dark:text-gray-400'>{summary}</p>
          </div>
        </a>
      </Link> */}
      <Link href='/posts/[slug] ' as={`/posts/${slug}`}>
        <a className='w-full'>
          <div className='mb-10  border-b divide-y'>
            <div className='grid py-8 sm:grid-cols-4'>
              <div className='mb-4 sm:mb-0'>
                <div className='space-y-1 text-xs font-semibold tracking-wide uppercase'>
                  <p className='text-gray-600'>
                    {' '}
                    {new Date(published_at).toDateString()}
                  </p>
                </div>
              </div>
              <div className='sm:col-span-3 lg:col-span-2'>
                <div className='mb-3'>
                  <p className='text-lg md:text-xl lg:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100'>
                    {title}
                  </p>
                </div>
                <p className='text-gray-600 lg:w-full dark:text-gray-400'>
                  {summary}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default BlogPost;
