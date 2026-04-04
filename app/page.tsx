import type { Metadata } from 'next';
import HeroSection from './home/HeroSection';
import AboutUs from './home/AboutUs';
import OurServices from './home/OurServices';
import WhyChooseUs from './home/WhyUs';
import BlogHighlights from './home/Blogs';
import GoldenVisa from './home/GoldenVisa';
import ServicesCarousel from './home/ServicesCarousel';
import Testimonials from './home/Testimonials'
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Amer Center UAE – Visa, Tasheel, Business & Government Services',
  description:
    'Amer Center offers Visa, Tasheel, Dubai Police, Business Setup, Trade License & other UAE government services online & offline across Dubai, Abu Dhabi & Sharjah.',
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
    title: 'Amer Services & Tasheel Services | Al Buhari - UAE Visa & Government Services in Dubai',
    description:
      'Expert Amer and Tasheel Services for government services in UAE/Dubai: visas, Emirates ID, business setup, and attestation at Al Buhari.',
    url: 'https://www.amerandtasheel.com',
    siteName: 'Al Buhari Services',
    images: [
      {
        url: 'https://www.amerandtasheel.com/og/albuhari.webp',
        width: 1200,
        height: 630,
        alt: 'Al Buhari Services - UAE Government & Document Clearing',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amer Services & Tasheel Services | Al Buhari - UAE Visa & Government Services in Dubai',
    description:
      'Simplify UAE visas, business setup, and government services in Dubai with Al Buhari’s expert Amer and Tasheel Services.',
    images: ['https://www.amerandtasheel.com/og/albuhari.webp'],
  },
  alternates: {
    canonical: 'https://www.amerandtasheel.com',
  },
};

// Structured data for Schema.org
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Al Buhari Services - Home',
  description:
    'Al Buhari: Your trusted partner for UAE visa processing, Emirates ID, business setup, Tasheel, and document attestation.',
  url: 'https://www.amerandtasheel.com',
  publisher: {
    '@type': 'Organization',
    name: 'Al Buhari Services',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.amerandtasheel.com/logo.webp',
    },
  },
  mainEntity: {
    '@type': 'Service',
    serviceType: 'Government and Document Clearing Services',
    provider: {
      '@type': 'Organization',
      name: 'Al Buhari Services',
    },
    areaServed: {
      '@type': 'Place',
      name: 'United Arab Emirates',
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.amerandtasheel.com" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main className="overflow-x-hidden">
        <HeroSection />
        <section className="md:hidden">
          <ServicesCarousel />
        </section>
        <AboutUs />
        <GoldenVisa />
        <WhyChooseUs />
        <Testimonials />
        <div className="bg-gray-300 h-[1px] w-[70%] mx-auto" />
        <OurServices />
        <div className="bg-gray-300 h-[1px] w-[70%] mx-auto" />
        <BlogHighlights />
      </main>
    </>
  );
}