import type { Metadata } from 'next';
import React from 'react';
import HeroSection from './components/HeroSection';
import AllServices from './components/AllServices';
import { heroSection, mainServiceCards } from '../data/home';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Services | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
    description:
      'Explore Amer service, Tasheel service, and UAE government services with Al Buhari Digital - offering visa support, business setup, document attestation, Emirates ID, RTA, Dubai Police, and Golden Visa services across the UAE.',
    keywords: [
      'Amer Service',
      'Amer Services',
      'Tasheel Services',
      'Amer and Tasheel Services',
      'Government Services in Dubai',
      'Government Services in UAE',
      'UAE visa services',
      'Business setup UAE',
      'Document attestation UAE',
      'Golden Visa UAE',
      'Emirates ID services',
      'Dubai Police services',
      'RTA services',
    ],
    robots: 'index, follow',
    openGraph: {
      title: 'Services | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
      description:
        'Explore Amer, Tasheel, and UAE government services with Al Buhari Digital - offering visa, business setup, document attestation, and Golden Visa solutions across Dubai and the UAE.',
      url: 'https://www.amerandtasheel.com/services',
      siteName: 'Al Buhari Digital',
      images: [
        {
          url: 'https://www.amerandtasheel.com/og/albuhari.webp',
          width: 1200,
          height: 630,
          alt: 'Al Buhari Digital - UAE Government and Document Services',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Services | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
      description:
        'Comprehensive Amer, Tasheel, and UAE government services - including visa processing, document clearing, business setup, and Golden Visa assistance.',
      images: ['https://www.amerandtasheel.com/og/albuhari.webp'],
    },
    alternates: {
      canonical: 'https://www.amerandtasheel.com/services',
    },
  };
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Services - Al Buhari Digital',
  description:
    'Explore Amer, Tasheel, and UAE government services with Al Buhari Digital - your trusted partner for visa processing, document attestation, Emirates ID, RTA, and business setup services across Dubai and the UAE.',
  url: 'https://www.amerandtasheel.com/services',
  publisher: {
    '@type': 'Organization',
    name: 'Al Buhari Digital',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.amerandtasheel.com/logo.webp',
    },
  },
  mainEntity: {
    '@type': 'Service',
    name: 'UAE Government and Document Clearing Services',
    serviceType:
      'Amer, Tasheel, Emirates ID, RTA, Dubai Police, Golden Visa, and Document Clearing Services',
    provider: {
      '@type': 'Organization',
      name: 'Al Buhari Digital',
      url: 'https://www.amerandtasheel.com',
    },
    areaServed: {
      '@type': 'Place',
      name: 'United Arab Emirates',
    },
    availableLanguage: ['English', 'Arabic'],
  },
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <main className="bg-lightGray min-h-screen pt-24 lg:pt-32">
          <HeroSection hero={heroSection} />
          <AllServices cards={mainServiceCards} />
      </main>
    </>
  );
};

export default ServicesPage;