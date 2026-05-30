import type { CollectionBeforeValidateHook } from 'payload'

export const formatSlug: CollectionBeforeValidateHook = async ({
  data,
}) => {
  if (data?.name) {
    data.slug = data.name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
  }

  return data
}