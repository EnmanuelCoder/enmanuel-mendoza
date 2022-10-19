import React from 'react';

const FirstSectionBlog = ({ date, area, title, author, img,  }) => {
  return (
    <>
      <section className='w-full h-auto space-y-3'>
        <h3 className='text-md md:text-xl'>{date} / <span className='underline'>{area}</span></h3>
        <h1 className='text-3xl md:text-6xl font-bold'>{title}</h1>
        <h4 className='text-md md:text-xl'>{author}</h4>
        <figure className='w-full h-[450px] hidden sm:block'>
          <img src={img} alt={`topic about ${title}`} className=' w-full h-full object-cover' />
        </figure>
      </section>
    </>
  );
};

export default FirstSectionBlog;