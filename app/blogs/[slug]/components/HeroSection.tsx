'use client';

import React from 'react';
import Image from 'next/image';
import { BlogPost } from '../../../interface/blog';
import AnimateInView from '@/app/components/Animate'; // Update this path if needed
import { urlFor } from '@/app/lib/image';
import ClientImage from '@/app/components/ClientImage';

interface BlogHeroSectionProps {
  blog: BlogPost;
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({ blog }) => {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const getImageSrc = () => {
    // 1. Check if it's a local blog using a simple string URL
    if (typeof blog.imageUrl === 'string' && blog.imageUrl.length > 0) {
      return blog.imageUrl;
    }

    const sanityImage = blog.image || blog.imageUrl;
    
    if (sanityImage && typeof sanityImage !== 'string') {
      try {
        return urlFor(sanityImage).width(800).url();
      } catch (error) {
        console.error("Sanity Image Helper Error:", error);
        return "/placeholder-image.jpg"; // Fallback on helper failure
      }
    }
    return "/placeholder-image.jpg"; 
  };

  const imageSrc = getImageSrc();
  const isExternalImage = typeof imageSrc === 'string' && imageSrc.startsWith('http');

  return (
    <section className="flex flex-col items-center justify-center gap-2 md:gap-4 text-center pt-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48">
      <AnimateInView direction="up" delay={0.1}>
        <p className="text-sm font-bold uppercase text-gn tracking-wider">
          {blog.category}
        </p>
      </AnimateInView>
      <AnimateInView direction="up" delay={0.2}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xlg:text-7xl font-bold leading-snug">
          {blog.title}
        </h1>
      </AnimateInView>
      <AnimateInView direction="up" delay={0.3}>
        <div className="flex justify-center items-center text-gray-600 text-sm space-x-4">
          <span>
            By <span className="font-semibold text-gn">{blog.author}</span>
          </span>
          <span aria-hidden="true">•</span>
          <time dateTime={blog.date}>{formattedDate}</time>
        </div>
      </AnimateInView>

      <div className="relative w-full h-full aspect-video overflow-hidden mt-4 max-h-[400px] max-w-4xl mx-auto">
        {isExternalImage ? (
          <Image
            src={imageSrc}
            alt={blog.category}
            fill
            sizes="100vw"
            className="transition-transform duration-300 group-hover:scale-110 object-contain rounded-xl shadow-xl"
          />
        ) : (
          <ClientImage
            src={imageSrc}
            alt={blog.category}
            fill
            sizes="100vw"
            className="transition-transform duration-300 group-hover:scale-110 object-contain rounded-xl shadow-xl"
          />
        )}
      </div>
    </section>
  );
};

export default BlogHeroSection;
