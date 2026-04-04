const paragraphOnly = {
  name: 'paragraphOnly',
  type: 'object',
  title: 'Paragraph Only',
  fields: [{ name: 'text', type: 'text', title: 'Text' }]
};

const listOnly = {
  name: 'listOnly',
  type: 'object',
  title: 'List Only',
  fields: [{ name: 'items', type: 'array', of: [{ type: 'string' }], title: 'List Items' }]
};

const customImage = {
  name: 'customImage',
  type: 'object',
  title: 'Image Block',
  fields: [
    { name: 'image', type: 'image', options: { hotspot: true } },
    { name: 'caption', type: 'string' }
  ]
};

const headingOnly = {
  name: 'headingOnly',
  type: 'object',
  title: 'Heading Only',
  fields: [{ name: 'text', type: 'string' }]
};

const headingParagraph = {
  name: 'headingParagraph',
  type: 'object',
  title: 'Heading + Paragraph',
  fields: [
    { name: 'heading', type: 'string' },
    { name: 'text', type: 'text' }
  ]
};

const headingList = {
  name: 'headingList',
  type: 'object',
  title: 'Heading + List',
  fields: [
    { name: 'heading', type: 'string' },
    { name: 'items', type: 'array', of: [{ type: 'string' }] }
  ]
};

const headingParagraphList = {
  name: 'headingParagraphList',
  type: 'object',
  title: 'Heading + Paragraph + List',
  fields: [
    { name: 'heading', type: 'string' },
    { name: 'text', type: 'text' },
    { name: 'items', type: 'array', of: [{ type: 'string' }] }
  ]
}

const headingListParagraph = {
  name: 'headingListParagraph',
  type: 'object',
  title: 'Heading + List + Paragraph',
  fields: [
    { name: 'heading', type: 'string' },
    { name: 'items', type: 'array', of: [{ type: 'string' }] },
    { name: 'text', type: 'text' }
  ]
}

const nestedSection = {
  name: 'nestedSection',
  type: 'object',
  title: 'Nested Section (Heading + Group)',
  fields: [
    { name: 'sectionTitle', type: 'string', title: 'Section Title' },
    {
      name: 'subBlocks',
      type: 'array',
      title: 'Section Content',
      of: [headingOnly, paragraphOnly, listOnly, customImage, headingParagraph, headingList, headingParagraphList, headingListParagraph] 
    }
  ]
};

const modularBlocks = [
  headingOnly,
  paragraphOnly,
  listOnly,
  headingParagraph,
  headingList,
  headingParagraphList,
  headingListParagraph,
  customImage,
  nestedSection,
]

export const blog = {
  name: 'blog',
  title: 'Blogs',
  type: 'document',
  fields: [
    { name: 'slug', title: 'Slug', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'image', title: 'Blog Image', type: 'image' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'author', title: 'Author', type: 'string'},
    { name: 'date', title: 'Date (YYYY-MM-DD)', type: 'string'},
    {
      name: 'content',
      title: 'Content Blocks',
      type: 'array',
      of: modularBlocks
    },
    {
      name: 'faq',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', type: 'string' },
          { name: 'answer', type: 'text' }
        ]
      }]
    },
    {
      name: 'metaData',
      title: 'SEO & Metadata',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text' },
        { 
          name: 'keywords', 
          title: 'Keywords', 
          type: 'array', 
          of: [{ type: 'string' }],
          options: { layout: 'tags' } 
        },
      ]
    },
  ]
}