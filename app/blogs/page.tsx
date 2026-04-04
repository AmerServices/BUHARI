import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import AllBlogs from './components/AllBlogs';
import { Suspense } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blogs | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
    description:
      'Read expert blogs from Al Buhari Digital covering Amer and Tasheel Services, UAE visa tips, business setup insights, and government service updates across Dubai and the UAE.',
    keywords: [
      'Amer Services blog',
      'Tasheel Services blog',
      'UAE visa updates',
      'Government Services in Dubai',
      'Business setup in UAE',
      'Document clearing UAE',
      'Al Buhari Digital blogs',
    ],
    robots: 'index, follow',
    openGraph: {
      title: 'Blogs | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
      description:
        'Stay updated with Al Buhari Digital’s insights on Amer and Tasheel Services, UAE visa processing, business setup, and government documentation news.',
      url: 'https://www.amerandtasheel.com/blogs',
      siteName: 'Al Buhari Digital',
      images: [
        {
          url: 'https://www.amerandtasheel.com/og/albuhari.webp',
          width: 1200,
          height: 630,
          alt: 'Al Buhari Digital Blogs - Amer and Tasheel Services UAE',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blogs | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
      description:
        'Discover the latest news and insights on Amer and Tasheel Services, UAE government updates, and business setup advice with Al Buhari Digital.',
      images: ['https://www.amerandtasheel.com/og/albuhari.webp'],
    },
    alternates: {
      canonical: 'https://www.amerandtasheel.com/blogs',
    },
  };
}

// ✅ Updated Structured Data for Schema.org
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Blogs | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
  description:
    'Explore Al Buhari Digital’s blogs featuring the latest on Amer and Tasheel Services, UAE visas, business setup, and government service information.',
  url: 'https://www.amerandtasheel.com/blogs',
  publisher: {
    '@type': 'Organization',
    name: 'Al Buhari Digital',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.amerandtasheel.com/logo.webp',
    },
  },
  mainEntity: {
    '@type': 'CollectionPage',
    name: 'Al Buhari Digital Blog Collection',
    description:
      'A curated collection of informative blogs about Amer Services, Tasheel Services, UAE visa guidance, and government process updates.',
    about: [
      { '@type': 'Thing', name: 'Amer Services' },
      { '@type': 'Thing', name: 'Tasheel Services' },
      { '@type': 'Thing', name: 'UAE Visa Processing' },
      { '@type': 'Thing', name: 'Government Services in Dubai' },
    ],
  },
};


const Blog = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.amerandtasheel.com/blogs" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main className='pt-24 lg:pt-32'>
          <HeroSection />
          <Suspense
            fallback={
              <div className="py-20 text-center">
                <Image
                  src="/og/albuhari.webp"
                  alt="Loading Al Buhari Blogs"
                  width={50}
                  height={50}
                  className="animate-spin inline-block"
                />
              </div>
            }
          >
            <AllBlogs />
          </Suspense>
      </main>
    </>
  );
};

export default Blog;