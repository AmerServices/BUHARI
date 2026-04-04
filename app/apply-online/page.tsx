import type { Metadata } from 'next';
import ApplyOnlineForm from './components/ApplyOnlineForm';
import Head from 'next/head';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Apply Online | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
    description:
      'Apply online for Amer and Tasheel Services in Dubai and across the UAE. Submit your visa, business setup, and government service applications easily with Al Buhari Services.',
    keywords: [
      'Amer Service',
      'Amer Services',
      'Tasheel Services',
      'Amer and Tasheel Services',
      'Government Services in Dubai',
      'Government Services in UAE',
      'Apply Amer Services Online',
      'Apply Tasheel Services Online',
    ],
    robots: 'index, follow',
    openGraph: {
      title: 'Apply Online | Amer and Tasheel Services - Al Buhari',
      description:
        'Easily apply online for Amer and Tasheel Services in Dubai. Al Buhari provides secure online forms for UAE visa, business setup, and document processing services.',
      url: 'https://www.amerandtasheel.com/apply-online',
      siteName: 'Al Buhari Services',
      images: [
        {
          url: 'https://www.amerandtasheel.com/og/albuhari.webp',
          width: 1200,
          height: 630,
          alt: 'Apply Online - Amer and Tasheel Services | Al Buhari',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Apply Online | Amer and Tasheel Services - Al Buhari',
      description:
        'Submit your Amer and Tasheel Service applications online with Al Buhari. Fast, secure, and convenient UAE government service submissions.',
      images: ['https://www.amerandtasheel.com/og/albuhari.webp'],
    },
    alternates: {
      canonical: 'https://www.amerandtasheel.com/apply-online',
    },
  };
}

// ✅ Updated Structured Data (Schema.org)
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Apply Online - Amer and Tasheel Services | Al Buhari',
  description:
    'Apply online for Amer and Tasheel Services including UAE visa applications, business setup, and government service submissions across Dubai and the UAE.',
  url: 'https://www.amerandtasheel.com/apply-online',
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
    serviceType: 'Online Amer and Tasheel Services Application',
    provider: {
      '@type': 'Organization',
      name: 'Al Buhari Services',
      url: 'https://www.amerandtasheel.com',
    },
    areaServed: {
      '@type': 'Place',
      name: 'United Arab Emirates',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.amerandtasheel.com/apply-online',
      name: 'Online Application Portal',
    },
  },
};


const ApplyOnlinePage = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.amerandtasheel.com/apply-online" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main className='pt-40 md:pt-44 lg:pt-40'>
        <section>
          <ApplyOnlineForm />
        </section>
      </main>
    </>
  );
};

export default ApplyOnlinePage;