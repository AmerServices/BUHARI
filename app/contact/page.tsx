import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import ContactUsSection from './components/ContactUsSection';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Us | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
    description:
      'Get in touch with Al Buhari Digital for expert Amer, Tasheel, and UAE government services including visa processing, business setup, and document clearing assistance.',
    keywords: [
      'Amer Service',
      'Amer Services',
      'Tasheel Services',
      'Amer and Tasheel Services',
      'Government Services in Dubai',
      'Government Services in UAE',
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: 'Contact Us | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
      description:
        'Reach out to Al Buhari Digital for Amer, Tasheel, and UAE government-related services including visa support, business setup, and documentation assistance.',
      url: 'https://www.amerandtasheel.com/contact',
      siteName: 'Al Buhari Digital',
      images: [
        {
          url: 'https://www.amerandtasheel.com/og/albuhari.webp',
          width: 1200,
          height: 630,
          alt: 'Al Buhari Digital - Contact Us Page',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
      description:
        'Connect with Al Buhari Digital for Amer and Tasheel Services, business setup, and all UAE government services in Dubai.',
      images: ['https://www.amerandtasheel.com/og/albuhari.webp'],
    },
    alternates: {
      canonical: 'https://www.amerandtasheel.com/contact',
    },
  };
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Contact Us - Al Buhari Digital',
  description:
    'Contact Al Buhari Digital for expert Amer, Tasheel, and UAE government services including visa, business setup, and document clearing support.',
  url: 'https://www.amerandtasheel.com/contact',
  publisher: {
    '@type': 'Organization',
    name: 'Al Buhari Digital',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.amerandtasheel.com/logo.webp',
    },
  },
  mainEntity: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+971-50-111-3815', // Updated with your provided number
    email: 'info@amerandtasheel.com',
    areaServed: 'AE',
    availableLanguage: ['English', 'Arabic'],
  },
};

const Contact = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="pt-24 lg:pt-32">
          <HeroSection />
          <ContactUsSection />
      </main>
    </>
  );
};

export default Contact;