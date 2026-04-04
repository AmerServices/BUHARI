import { blogs as localBlogs } from '../../data/blogs';
import { BlogPost } from '@/app/interface/blog';
import BlogListingClient from '../components/BlogListingClient';
import { Suspense } from 'react';
import { client } from '@/sanity/lib/client';
import ClientImage from '@/app/components/ClientImage';

async function getAllSortedBlogs(): Promise<BlogPost[]> {
  const fetchedBlog = await client.fetch(`*[_type == "blog"]`);
  const AllBlogs = [...fetchedBlog, ...localBlogs];
  try {
  return AllBlogs.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Failed to fetch API blogs on server:", error);
    return [...localBlogs].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
}

export default async function AllBlogs() {
  const allBlogs = await getAllSortedBlogs();
  return (
    <Suspense fallback={<LoadingState />}>
      <BlogListingClient initialBlogs={allBlogs} />
    </Suspense>
  );
}

function LoadingState() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-10">
        <ClientImage
          src="amer_ulqx9j" // Ensure this path is correct and accessible
          alt="Loading..."
          width={50}
          height={50}
          className="animate-spin"
        />
      </div>
    </section>
  );
}