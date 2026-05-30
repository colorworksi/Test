import type { CollectionBeforeValidateHook } from 'payload'

export const validateUniqueSKU: CollectionBeforeValidateHook = async ({
  data,
  req,
  operation,
  originalDoc,
}) => {
  if (!data?.sku) return

  const existing = await req.payload.find({
    collection: 'products',
    where: {
      sku: {
        equals: data.sku,
      },
    },
  })

  if (operation === 'create' && existing.totalDocs > 0) {
    throw new Error('SKU must be unique')
  }

  if (
    operation === 'update' &&
    existing.totalDocs > 0 &&
    existing.docs[0].id !== originalDoc.id
  ) {
    throw new Error('SKU must be unique')
  }
}