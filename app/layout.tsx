import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingWrapper from './components/LoadingWrapper';
import FloatingContactButton from './components/FloatingContactButton';
import GoogleReviews from './components/GoogleReview';
import Head from 'next/head';
import Script from 'next/script';

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
    telephone: '+971-50-111-3815', // Replace with actual phone number
    contactType: 'Customer Service',
    areaServed: 'AE',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/amerandtasheel', // Replace with actual social media URLs
    'https://www.twitter.com/amerandtasheel',
    'https://www.linkedin.com/company/amerandtasheel',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.amerandtasheel.com" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
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
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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