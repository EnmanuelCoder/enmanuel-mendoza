import React from 'react';
import HeaderProject from '../components/HeaderProject';
import PostBlog from '../components/PostBlog';
import Footer from '../containers/Footer';
import imgCode from "../assets/img/code.jpg"


const PersonalBlog = () => {
  return (
    <>
      <HeaderProject 
        page="/"
      />
      <main className='w-full h-full pt-32 m-auto p-5'>
        <h1 className='text-5xl  font-Montserrat text-white text-center p-5'>My blog</h1>
        <section className='w-full h-auto flex flex-col justify-center items-center gap-5'>
          <PostBlog 
            img={imgCode}
            area="JavaScript"
            title="Callbacks y asincronismo"
            page="/javascript"
          />
          <PostBlog 
            img={imgCode}
            area="JavaScript"
            title="Callbacks y asincronismo"
            page="/blog-personal"
          />
          <PostBlog 
            img={imgCode}
            area="JavaScript"
            title="Callbacks y asincronismo"
            page="/blog-personal"
          />
        </section>

      </main>
      
    </>
  );
};

export default PersonalBlog;