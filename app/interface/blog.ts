export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: number; text: string }
  | { type: 'list'; items: string[] };

export interface ParagraphOnly {
  _type: 'paragraphOnly';
  text: string;
}

export interface ListOnly {
  _type: 'listOnly';
  items: string[];
}

export interface HeadingOnly {
  _type: 'headingOnly';
  text: string;
}

export interface HeadingParagraph {
  _type: 'headingParagraph';
  heading: string;
  text: string;
}

export interface HeadingList {
  _type: 'headingList';
  heading: string;
  items: string[];
}

export interface HeadingParagraphList {
  _type: 'headingParagraphList';
  heading: string;
  text: string;
  items: string[];
}

export interface HeadingListParagraph {
  _type: 'headingListParagraph';
  heading: string;
  items: string[];
  text: string;
}

export interface NestedSection {
  _type: 'nestedSection';
  sectionTitle: string;
  subBlocks: ContentBlock[];
}

export type ContentBlock = | ParagraphOnly | ListOnly | HeadingOnly | HeadingParagraph | HeadingList | HeadingParagraphList | HeadingListParagraph | NestedSection;


interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  type: string
  slug?: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image?: SanityImage;
  imageUrl?: string;
  description?: string;
  content?: ContentBlock[];
  keywords?: string[];
  faq?: FAQ[];
  metaData?: {
    title: string;
    description: string;
    keywords: string;
  };
  link?: string
  updatedAt?: string | Date;
}

export default BlogPost;
