import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import BlogPost from '../interface/blog';
import { urlFor } from '../lib/image';
import ClientImage from '../components/ClientImage';

const BlogsCard = ({ blog }: { blog: BlogPost }) => {
  const isExternal = blog.type === 'api';
  const href = isExternal ? blog.link || '#' : blog.slug ? `/blogs/${blog.slug}` : '/blogs';
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

  return (
    <Link
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] xl:h-[400px] rounded-2xl overflow-hidden shadow-md group"
    >
      <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
        <ClientImage
          src={getImageSrc()}
          alt={blog.title || blog.category || 'Blog image'}
          fill
          sizes='40vw'
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-[120%]"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white">
        <h1 className="text-xl md:text-2xl lg:text-lg 2xl:text-xl xlg:text-2xl font-extrabold mt-2 line-clamp-4 md:line-clamp-none">{blog.title}</h1>
        <div className="flex justify-between">
          <div className='bg-gn flex items-center p-2 rounded-full text-xs'>{blog.category}</div>
          <div className="bg-white text-black h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gn group-hover:text-white">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCard;
