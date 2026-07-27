import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingWrapper from './components/LoadingWrapper';
import FloatingContactButton from './components/FloatingContactButton';
import GoogleReviews from './components/GoogleReview';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amerandtasheel.com'),
  title: {
    default: '| Al Buhari Digital - Amer Services, Tasheel Services and UAE Government Services',
    template: '%s | Al Buhari Digital - Amer, Tasheel and UAE Government Services',
  },
  description:
    'Al Buhari provides expert Amer Services, Tasheel Services, and government services in Dubai and UAE, including visa processing, Emirates ID, business setup, attestation, and legal translation.',
  keywords: [
    'Amer Service',
    'Amer Services',
    'Tasheel Services',
    'Amer and Tasheel Services',
    'Government Services in Dubai',
    'Government Services in UAE',
  ],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.amerandtasheel.com',
    siteName: 'Al Buhari Services',
    title: 'Al Buhari Digital - Government Services in UAE & Dubai',
    description:
      'Trusted Amer and Tasheel Services for government services in Dubai and UAE: visas, business setup, Emirates ID, attestation, and more with Al Buhari.',
    images: [
      {
        url: 'https://www.amerandtasheel.com/og/albuhari.webp',
        width: 1200,
        height: 630,
        alt: 'Al Buhari Services - UAE Government & Document Clearing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amer Services & Tasheel Services | Al Buhari - Government Services in UAE & Dubai',
    description:
      'Fast, reliable Amer Services, Tasheel Services, and government services in Dubai/UAE for visas, business setup, and document clearing with Al Buhari.',
    images: ['https://www.amerandtasheel.com/og/albuhari.webp'],
  },
  alternates: {
    canonical: 'https://www.amerandtasheel.com',
  },
};

// Structured data for Schema.org
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Al Buhari Services',
  url: 'https://www.amerandtasheel.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.amerandtasheel.com/logo.webp',
  },
  description:
    'Al Buhari provides UAE visa processing, business setup, Emirates ID, Tasheel, attestation, and legal translation services.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-50-111-3815',
    contactType: 'Customer Service',
    areaServed: 'AE',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/amerandtasheel',
    'https://www.twitter.com/amerandtasheel',
    'https://www.linkedin.com/company/amerandtasheel',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-99LXXMncuF7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-99LXXMncuF7');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '719332017900467');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=719332017900467&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <LoadingWrapper>
          <Header />
          <GoogleReviews />
          <FloatingContactButton />
          <main className="overflow-x-hidden md:overflow-visible">{children}</main>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}
