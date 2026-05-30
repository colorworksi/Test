import type { CollectionConfig } from 'payload'

import { preventDelete } from './hooks/preventDelete'

export const ProductCategories: CollectionConfig = {
  slug: 'product-categories',

  admin: {
    useAsTitle: 'name',
  },

  hooks: {
    beforeDelete: [preventDelete],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}