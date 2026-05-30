import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidateProduct: CollectionAfterChangeHook = async ({
  doc,
}) => {
  revalidatePath('/products')
  revalidatePath(`/products/${doc.slug}`)

  return doc
}