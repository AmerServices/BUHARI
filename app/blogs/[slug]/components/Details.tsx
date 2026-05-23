'use client';
import React, { JSX } from 'react';
import { BlogPost } from '../../../interface/blog';
import Link from 'next/link';
import { FaLinkedin, FaFacebook } from 'react-icons/fa6';
import AnimateInView from '@/app/components/Animate'; // adjust path if needed
import { FaRegEdit, FaWhatsapp } from 'react-icons/fa';
import CTAButton from '@/app/components/CTAButton';
import ServiceFaqs from '@/app/services/[serviceSlug]/components/ServiceFaqs';
import { blogs } from '@/app/data/blogs';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import ClientImage from '@/app/components/ClientImage';
import Image from 'next/image';

interface BlogDetailsProps {
  blog: BlogPost;
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {

const RenderContentBlock = ({ block, index }: { block: any, index: number }) => {
  const linkStyles = "[&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800";

  switch (block._type) {
    case "headingOnly":
      return (
        <h2 key={index} className="text-xl md:text-2xl font-bold text-black mb-6 uppercase tracking-tight">
          {block.text}
        </h2>
      );  
    case "headingParagraph":
    case "headingList":
    case "headingParagraphList":
    case "headingListParagraph":
      return (
        <div key={index} className="mb-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            {block.heading}
          </h3>
          {/* Paragraphs and lists inside these blocks should have standard styling */}
          {block.text && (
            <p 
              dangerouslySetInnerHTML={{ __html: block.text }} 
              className={`text-gray-700 leading-relaxed mb-3 ${linkStyles}`}
            />
          )}
          {block.items && (
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
              {block.items.map((item: string, i: number) => (
                <li 
                  key={i} 
                  dangerouslySetInnerHTML={{ __html: item }}
                  className={linkStyles}
                />
              ))}
            </ul>
          )}
        </div>
      );
    case "nestedSection":
      return (
        <div key={index} className="my-10">
          <h4 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
            {block.sectionTitle}
          </h4>
          <div className="space-y-4 scale-95">
            {block.subBlocks?.map((subBlock: any, subIndex: number) => (
              <RenderContentBlock key={subIndex} block={subBlock} index={subIndex} />
            ))}
          </div>
        </div>
      );
    case "paragraphOnly":
      return (
        <p 
          key={index} 
          dangerouslySetInnerHTML={{ __html: block.text }} 
          className={`text-gray-700 text-justify mb-6 leading-relaxed ${linkStyles}`}
        />
      );
    case "listOnly":
      return (
        <ul key={index} className="list-disc list-inside text-gray-700 text-base md:text-lg mb-6 space-y-2">
          {block.items?.map((item: string, i: number) => (
            <li 
              key={i} 
              dangerouslySetInnerHTML={{ __html: item }}
              className={linkStyles}
            />
          ))}
        </ul>
      );
    case "customImage": {
  // 1. Resolve image source using the exact hero section verification fallback scheme
  const imageReference = block.image || block.imageUrl;
  
  if (!imageReference) return null;

  const getCustomImageSrc = () => {
    if (typeof imageReference === 'string' && imageReference.length > 0) {
      return imageReference;
    }
    
    try {
      return urlFor(imageReference).width(800).url();
    } catch (error) {
      console.error("Sanity Custom Image Helper Error:", error);
      return "/placeholder-image.jpg"; // Keep fallback sync identical
    }
  };

  const customSrc = getCustomImageSrc();
  const isExternalCustomImage = typeof customSrc === 'string' && customSrc.startsWith('http');

  return (
    <div key={index} className="flex flex-col w-full">
      {/* Container class tracking match from your layout configuration */}
      <div className="relative w-full h-[200px] overflow-hidden max-h-[400px] max-w-4xl mb-10">
        {isExternalCustomImage ? (
          <Image
            src={customSrc}
            alt={block.caption || "Blog image"}
            fill
            className="transition-transform duration-300 group-hover:scale-110 object-contain rounded-xl shadow-xl"
          />
        ) : (
          <ClientImage
            src={customSrc}
            alt={block.caption || "Blog image"}
            fill
            className="transition-transform duration-300 group-hover:scale-110 object-contain rounded-xl shadow-xl"
          />
        )}
      </div>
      {block.caption && (
        <p className="text-sm text-gray-500 mt-2 text-center italic">
          {block.caption}
        </p>
      )}
    </div>
  );
}
        default:
          return null;
      }
    };
  
  const currentUrl = `https://amerandtasheel.com/blogs/${blog.slug}`;

  return (
    <div className="py-10 xlg:pb-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48 w-full">
      {/* Blog Content with animation */}
      <div className="prose prose-lg max-w-7xl mx-auto text-gray-800 leading-relaxed blog-content">
        {blog.content?.map((block: any, index: number) => (
          <RenderContentBlock key={index} block={block} index={index} />
        ))}
        <div className="flex gap-4">
          <CTAButton href='/apply-online' label='Apply Online' icon={FaRegEdit} className='w-full max-w-[200px]'/>
          <CTAButton href='https://wa.me/+971501113815' label='Contact Us' icon={FaWhatsapp} className='w-full max-w-[200px]'/>
        </div>
      </div>

      <ServiceFaqs faqs={blog.faq}/>

      {/* Share Buttons with animation */}
      <AnimateInView direction="up" duration={0.6} delay={0.3} className="pt-8 flex flex-wrap items-center justify-center gap-2">
        <span className="font-semibold text-sm text-black">Share this article:</span>
        
        {/* Facebook */}
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&display=popup`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-[#1877F2] text-white rounded-md hover:bg-[#166FE5] transition-colors duration-200"
          aria-label="Share on Facebook"
        >
          <FaFacebook/>
        </Link>

        {/* LinkedIn */}
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog.title)}&summary=${encodeURIComponent(blog.description || '')}`}          
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-md hover:bg-[#004182] transition-colors duration-200"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin/>
        </Link>

        {/* WhatsApp */}
        <Link
          href={`https://wa.me/?text=${encodeURIComponent(`${blog.title} - ${currentUrl}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-[#25D366] text-white rounded-md hover:bg-[#128C7E] transition-colors duration-200"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp />
        </Link>
      </AnimateInView>
    </div>
        );
};

export default BlogDetails;
