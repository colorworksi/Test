import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { slugField } from 'payload'

export const Posts: CollectionConfig<'posts'> = {
  slug: 'posts',

  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  // Default populated fields
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },

  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],

    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'posts',
          req,
        }),
    },

    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'posts',
        req,
      }),

    useAsTitle: 'title',
  },

  fields: [
    // TITLE
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    // MAIN TABS
    {
      type: 'tabs',

      tabs: [
        // CONTENT TAB
        {
          label: 'Content',

          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },

            {
              name: 'content',
              type: 'richText',

              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,

                    HeadingFeature({
                      enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
                    }),

                    BlocksFeature({
                      blocks: [Banner, Code, MediaBlock],
                    }),

                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),

              label: false,
              required: true,
            },
          ],
        },

        // META TAB
        {
          label: 'Meta',

          fields: [
            {
              name: 'relatedPosts',

              type: 'relationship',

              relationTo: 'posts',

              hasMany: true,

              admin: {
                position: 'sidebar',
              },

              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                }
              },
            },

            {
              name: 'categories',

              type: 'relationship',

              relationTo: 'categories',

              hasMany: true,

              admin: {
                position: 'sidebar',
              },
            },
          ],
        },

        // SEO TAB
        {
          name: 'meta',

          label: 'SEO',

          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),

            MetaTitleField({
              hasGenerateFn: true,
            }),

            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),

            PreviewField({
              hasGenerateFn: true,

              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },

    // PUBLISHED DATE
    {
      name: 'publishedAt',

      type: 'date',

      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },

        position: 'sidebar',
      },

      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }

            return value
          },
        ],
      },
    },

    // FEATURED POST
    {
      name: 'featured',

      type: 'checkbox',

      defaultValue: false,

      admin: {
        position: 'sidebar',
      },
    },

    // AUTHORS
    {
      name: 'authors',

      type: 'relationship',

      relationTo: 'users',

      hasMany: true,

      admin: {
        position: 'sidebar',
      },
    },

    // POPULATED AUTHORS
    {
      name: 'populatedAuthors',

      type: 'array',

      access: {
        update: () => false,
      },

      admin: {
        disabled: true,
        readOnly: true,
      },

      fields: [
        {
          name: 'id',
          type: 'text',
        },

        {
          name: 'name',
          type: 'text',
        },
      ],
    },

    // SLUG
    slugField(),
  ],

  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },

  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },

      schedulePublish: true,
    },

    maxPerDoc: 50,
  },
}