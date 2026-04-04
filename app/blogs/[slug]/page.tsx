import { notFound } from 'next/navigation';
import BlogHeroSection from './components/HeroSection';
import BlogDetails from './components/Details';
import { blogs } from '../../data/blogs';
import { type Metadata } from 'next';
import RelatedBlogs from '@/app/components/RelatedBlogs';
import BlogPost from '@/app/interface/blog';
import { client } from '@/sanity/lib/client';
import ServiceFaqs from '@/app/services/[serviceSlug]/components/ServiceFaqs';

interface BlogParams {
  slug: string;
}

interface BlogPageProps {
  params: Promise<BlogParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const sanityBlogs = await client.fetch(`*[_type == "blog"]`);
  const allSlugs = [
    ...blogs.map((blog) => ({ slug: blog.slug })),
    ...sanityBlogs.map((blog: any) => ({ slug: blog.slug }))
  ];
  return allSlugs;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const fetchedBlog = await client.fetch(`*[_type == "blog"]`); 
  const AllBlogs = [...fetchedBlog, ...blogs];
  const blog = AllBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Al Buhari Digital',
    };
  }

  return {
    title: `${blog.metaData?.title}`,
    description: blog.metaData?.description || blog.description,
    keywords: [ ...['Amer Services blog','Tasheel Services blog','UAE visa tips','Al Buhari Digital',],
                ...(blog.metaData?.keywords ? blog.metaData.keywords.split(',').map((k: string) => k.trim()) : [])
              ].join(', '),
    alternates: {
      canonical: `https://www.amerandtasheel.com/blogs/${blog.slug}`,
      languages: {
        'en-US': `https://www.amerandtasheel.com/blogs/${blog.slug}`
      },
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.amerandtasheel.com/blogs/${blog.slug}`,
      siteName: 'Al Buhari Digital',
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author || 'Al Buhari Digital'], 
      images: [
        {
          url: blog.imageUrl || 'https://www.amerandtasheel.com/og/albuhari.webp',
          width: 1200, height: 630,
          alt: blog.metaData?.title || blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaData?.title,
      description: blog.metaData?.description,
      images: [blog.imageUrl || 'https://www.amerandtasheel.com/og/albuhari.webp'],
    }
  };
}

function ArticleSchema({ blog }: { blog: BlogPost }) {
    const articleUrl = `https://www.amerandtasheel.com/blogs/${blog.slug}`; 
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": articleUrl
        },
        "headline": blog.metaData?.title,
        "description": blog.metaData?.description,
        "image": blog.imageUrl || 'https://www.amerandtasheel.com/og/albuhari.webp',
        "datePublished": blog.date,
        "dateModified": blog.date,
        "author": {
          "@type": "Organization",
          "name": "Al Buhari Digital",
          "url": "https://www.amerandtasheel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Al Buhari Digital",
          "logo": {
            "@type": "ImageObject",
            "url": `https://www.amerandtasheel.com/logo.webp`
          }
        },
        "articleSection": blog.category,
        "inLanguage": "en-US"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.amerandtasheel.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.amerandtasheel.com/blogs"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": blog.metaData?.title,
            "item": articleUrl
          }
        ]
      }
    ];
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ 
                __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') 
            }}
        />
    );
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const fetchedBlog = await client.fetch(`*[_type == "blog"]`); 
  const AllBlogs = [...fetchedBlog, ...blogs];
  const blog = AllBlogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = AllBlogs
    .filter((b) => b.category.toUpperCase() === blog.category.toUpperCase() && b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <main role="main" className="pt-24 md: lg:pt-40">
      <ArticleSchema blog={blog}/>
      <BlogHeroSection blog={blog} />
      <BlogDetails blog={blog} />
      <ServiceFaqs faqs={blog.faqs}/>
      <RelatedBlogs blogs={relatedBlogs} />
    </main>
  );
}