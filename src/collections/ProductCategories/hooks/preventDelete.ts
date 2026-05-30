import type { CollectionBeforeDeleteHook } from 'payload'

export const preventDelete: CollectionBeforeDeleteHook = async ({
  req,
  id,
}) => {
  const products = await req.payload.find({
    collection: 'products',
    where: {
      category: {
        equals: id,
      },
    },
  })

  if (products.totalDocs > 0) {
    throw new Error(
      'Cannot delete category because products are assigned to it.',
    )
  }
}