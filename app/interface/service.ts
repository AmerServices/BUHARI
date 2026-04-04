export interface FAQ {
  question: string;
  answer: string;
}

export interface ListItem {
  text: string;
  description?: string;
}

export interface ContentHeading {
  heading: string;
  paragraph: string;
}

export interface ContentHeadingWithList {
  heading?: string;
  subheading?: string;
  paragraph?: string;
  list: ListItem[];
}

export interface ContentParagraph {
  paragraph: string;
}

export type ContentBlock = ContentParagraph | ContentHeading | ContentHeadingWithList;

export interface ServiceType {
  type: string;
  description: string;
  updatedAt?: string | Date;
}

export interface Service {
  id?: string;
  slug: string;
  parentslug?: string;
  title: string;
  image: string;
  logo: string;
  heroExcerpt?: string;
  summary?: string;
  description: string;
  category?: string;
  serviceTypes?: ServiceType[];
  subServices?: Service[];
  faqs?: FAQ[];
  updatedAt?: string | Date;
  content: ContentBlock[];
  metadata?: {
    titleTag: string;
    metaDescription: string;
    url: string;
    keywords?: string;
  },
}

export interface HeroSection {
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface MainServiceCard {
  id: string;
  slug: string;
  title: string;
  icon: string;
  summary: string;
  linkText: string;
}

export interface MainServicesPageData {
  hero: HeroSection;
  mainServiceCards: MainServiceCard[];
}

