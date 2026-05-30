import type { CollectionConfig } from 'payload'

import { formatSlug } from './hooks/formatSlug'
import { validateUniqueSKU } from './hooks/validateUniqueSKU'
import { revalidateProduct } from './hooks/revalidateProduct'

export const Products: CollectionConfig = {
  slug: 'products',

  admin: {
    useAsTitle: 'name',
  },

  hooks: {
    beforeValidate: [formatSlug, validateUniqueSKU],
    afterChange: [revalidateProduct],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },

    {
      name: 'description',
      type: 'richText',
    },

    {
      name: 'sku',
      type: 'text',
      required: true,
      unique: true,
    },

    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },

    {
      name: 'inventory',
      type: 'number',
      required: true,
      min: 0,
    },

    {
      name: 'productCategory',
      type: 'relationship',
      relationTo: 'product-categories',
      required: true,
    },

    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },

    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },

    {
      name: 'variants',
      type: 'array',
      fields: [
        {
          name: 'size',
          type: 'text',
        },

        {
          name: 'color',
          type: 'text',
        },

        {
          name: 'stock',
          type: 'number',
          min: 0,
        },
      ],
    },

    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },

        {
          name: 'metaDescription',
          type: 'textarea',
        },
      ],
    },
  ],
}