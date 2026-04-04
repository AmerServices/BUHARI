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
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const BASE_URL = "https://www.amerandtasheel.com";

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) return { title: 'Service Not Found' };

  const path = `/services/${serviceSlug}`;
  const canonicalUrl = `${BASE_URL}${path}`;  
  const dynamicImageUrl = service.image || 'https://www.amerandtasheel.com/og/albuhari.webp';
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
      'max-snippet': -1,
      'max-image-preview': 'large',
    }
  };
}

export function generateStaticParams() {
  return allServices.map((service) => ({
    serviceSlug: service.slug,
  }));
}

function ServiceSchema({ service }: { service: Service; }) {
  const serviceUrl = `${BASE_URL}/services/${service.slug}`;  
  const dynamicImageUrl = service.image
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
      "image": dynamicImageUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name":"Home",
          "item": BASE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${BASE_URL}/services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": serviceUrl
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

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const finalRelatedBlogs = blogs
    .filter((b) => b.category === service?.category)
    .slice(0, 3);

  return (
      <main role='main' className="overflow-hidden pt-28 lg:pt-40">
        <ServiceSchema service={service} />
        {service.id && ['amer-center', 'tasheel-dubai', 'business-setup-in-dubai', 'legal-advisor-in-dubai'].includes(service.id) ? (
          <article>
            <ServiceHeroSection service={service} />
            <AllSubServicesSection subServices={service.subServices || []} serviceSlug={service.slug} />
            {service.content && <Details subService={service}/>}
            {service.faqs && <ServiceFaqs faqs={service.faqs} />}
            <RelatedBlogs blogs={finalRelatedBlogs} />
          </article>
        ) : 
        service.id && ['dubai-economic-department', 'dubai-police-services', 'vat-registration-services', 'corporate-tax-services', 'rta-services'].includes(service.id) ? (
          <article>
            <ServiceHeroSection service={service} />
            <SubServicesSection subServices={service.subServices || []} service={service.title} />
            {service.content && <Details subService={service}/>}
            {service.faqs && <ServiceFaqs faqs={service.faqs} />}
            <RelatedBlogs blogs={finalRelatedBlogs} />
          </article>
        ) : (
          <SubServicePage subService={service}/>
        )}
      </main>
  );
}