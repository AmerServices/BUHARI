import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Head from 'next/head';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About Us | Al Buhari Digital - Amer and Tasheel Services',
    description:
      'Learn more about Al Buhari – your trusted center for Amer and Tasheel Services in Dubai. We specialize in government transactions, visa services, and business setup assistance across the UAE.',
    keywords: [
      'Amer Service',
      'Amer Services',
      'Tasheel Services',
      'Amer and Tasheel Services',
      'Government Services in Dubai',
      'Government Services in UAE',
    ],
    robots: 'index, follow',
    openGraph: {
      title: 'About Us | Amer and Tasheel Services - Al Buhari',
      description:
        'Learn more about Al Buhari – your trusted provider of Amer and Tasheel Services in Dubai and across the UAE. Expert visa, PRO, and government document solutions.',
      url: 'https://www.amerandtasheel.com/about',
      siteName: 'Al Buhari Services',
      images: [
        {
          url: 'https://www.amerandtasheel.com/og/albuhari.webp',
          width: 1200,
          height: 630,
          alt: 'Al Buhari - Amer and Tasheel Services in Dubai',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us | Amer and Tasheel Services - Al Buhari',
      description:
        'Al Buhari offers expert Amer and Tasheel Services, visa processing, and UAE government documentation support. Learn more about our mission and values.',
      images: ['https://www.amerandtasheel.com/og/albuhari.webp'],
    },
    alternates: {
      canonical: 'https://www.amerandtasheel.com/about',
    },
  };
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About Us - Al Buhari | Amer and Tasheel Services in Dubai',
  description:
    'Al Buhari specializes in Amer and Tasheel Services, business setup, visa processing, and government services in Dubai and across the UAE.',
  url: 'https://www.amerandtasheel.com/about',
  publisher: {
    '@type': 'Organization',
    name: 'Al Buhari Services',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.amerandtasheel.com/logo.webp',
    },
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'Al Buhari Services',
    description:
      'A trusted center for Amer Services, Tasheel Services, and UAE government document solutions in Dubai.',
    areaServed: ['AE'],
    sameAs: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://www.linkedin.com/',
    ],
  },
};

const About = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.amerandtasheel.com/about" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main className='pt-24 lg:pt-32'>
          <HeroSection />
          <AboutUs />
      </main>
    </>
  );
};

export default About;