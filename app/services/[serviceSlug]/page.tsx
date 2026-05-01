import { getServiceBySlug, allServices } from '../../data/services';
import ServiceHeroSection from './components/HeroSection';
import AllSubServicesSection from './components/AllSubServices';
import ServiceFaqs from './components/ServiceFaqs';
import { notFound } from 'next/navigation';
import RelatedBlogs from '../../components/RelatedBlogs';
import { blogs } from '@/app/data/blogs';
import { Metadata } from 'next';
import SubServicesSection from './components/SubServicesSection';
import Details from './components/Details';
import SubServicePage from './components/SubServicePage';
import { Service } from '@/app/interface/service';

interface ServiceParams {
  serviceSlug: string;
}

interface ServicePageProps {
  params: Promise<ServiceParams>;
  // Removed unused searchParams — it was typed as Promise but never awaited,
  // which can silently break static generation in Next.js App Router.
}

const BASE_URL = "https://www.amerandtasheel.com";
const FALLBACK_IMAGE = "https://www.amerandtasheel.com/og/albuhari.webp";

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) return { title: 'Service Not Found' };

  const path = `/services/${serviceSlug}`;
  const canonicalUrl = `${BASE_URL}${path}`;

  // Always fall back to the default OG image so it's never undefined
  const dynamicImageUrl = service.image || FALLBACK_IMAGE;

  return {
    title: `${service.metadata?.titleTag} | Al Buhari Digital`,
    description: service.metadata?.metaDescription,
    keywords: service.metadata?.keywords || 'Amer & Tasheel, Al Buhari Digital, Business Setup, PRO Services, Visa Services',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `${BASE_URL}/services/${serviceSlug}`,
        'x-default': `${BASE_URL}/services/${serviceSlug}`,
      },
    },
    openGraph: {
      title: `${service.title} | Al Buhari Digital`,
      description: service.metadata?.metaDescription,
      url: canonicalUrl,
      type: 'website',
      siteName: "Al Buhari Digital",
      locale: 'en_US',
      images: [{
        url: dynamicImageUrl,
        width: 1200,
        height: 630,
        alt: service.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.metadata?.metaDescription,
      images: [dynamicImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      // Explicitly target Googlebot so it respects snippet/preview settings
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  };
}

export function generateStaticParams() {
  return allServices.map((service) => ({
    serviceSlug: service.slug,
  }));
}

function ServiceSchema({ service }: { service: Service }) {
  const serviceUrl = `${BASE_URL}/services/${service.slug}`;

  // FIX: was using service.image directly, which can be undefined,
  // producing invalid JSON-LD that Google's crawler rejects.
  const dynamicImageUrl = service.image || FALLBACK_IMAGE;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      "serviceType": service.title,
      "name": service.title,
      "description": service.metadata?.metaDescription,
      "provider": {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "Al Buhari Digital",
      },
      "areaServed": {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      "image": dynamicImageUrl,
      // Added url so the Service entity is fully self-describing
      "url": serviceUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${BASE_URL}/services`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": serviceUrl,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  );
}

// Named service ID groups for readability and easier future maintenance
const FULL_SERVICE_IDS = [
  'amer-center',
  'tasheel-dubai',
  'business-setup-in-dubai',
  'legal-advisor-in-dubai',
];

const SUB_SERVICE_SECTION_IDS = [
  'dubai-economic-department',
  'dubai-police-services',
  'vat-registration-services',
  'corporate-tax-services',
  'rta-services',
];

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const finalRelatedBlogs = blogs
    .filter((b) => b.category === service?.category)
    .slice(0, 3);

  const isFullService = service.id && FULL_SERVICE_IDS.includes(service.id);
  const isSubServiceSection = service.id && SUB_SERVICE_SECTION_IDS.includes(service.id);

  return (
    <main role="main" className="overflow-hidden pt-28 lg:pt-40">
      <ServiceSchema service={service} />

      {isFullService ? (
        <article>
          <ServiceHeroSection service={service} />
          <AllSubServicesSection
            subServices={service.subServices || []}
            serviceSlug={service.slug}
          />
          {service.content && <Details subService={service} />}
          {service.faqs && <ServiceFaqs faqs={service.faqs} />}
          <RelatedBlogs blogs={finalRelatedBlogs} />
        </article>
      ) : isSubServiceSection ? (
        <article>
          <ServiceHeroSection service={service} />
          <SubServicesSection
            subServices={service.subServices || []}
            service={service.title}
          />
          {service.content && <Details subService={service} />}
          {service.faqs && <ServiceFaqs faqs={service.faqs} />}
          <RelatedBlogs blogs={finalRelatedBlogs} />
        </article>
      ) : (
        <SubServicePage subService={service} />
      )}
    </main>
  );
}
