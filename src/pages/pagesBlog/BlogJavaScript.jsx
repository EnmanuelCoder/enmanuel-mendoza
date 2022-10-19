import React from 'react';
import FirstSectionBlog from '../../components/FirstSectionBlog';
import HeaderProject from '../../components/HeaderProject';
import code from '../../assets/img/code.jpg';
import ContentBlog from '../../containers/ContentBlog';
import Footer from '../../containers/Footer';

const BlogJavaScript = () => {
  return (
    <>
      <HeaderProject 
        page="/blog-personal"
      />
      <main className='w-full p-3 md:container mx-auto h-auto font-Montserrat text-white  pt-32'>
        <FirstSectionBlog 
          date="17 DE OCTUBRE DE 2022" 
          area="#JavaScript"
          title="Ventajas de aprender JavaScript en 2023"
          author="Enmanuel Mendoza"
          img={code}
        />
        <ContentBlog>
          <h2 className='text-4xl md:text-6xl'>You need to lear JavaScript now!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
          <h2 className='text-4xl md:text-5xl'>You need to lear JavaScript now!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
          
        </ContentBlog>

      </main>
      <Footer />
    </>
  );
};

export default BlogJavaScript;