import {defineField, defineType} from 'sanity'

export const ProductPostType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
      title: 'Title of blog article  ',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    }),
    defineField({
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})
