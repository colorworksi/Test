import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params

  const payload = await getPayload({
    config: configPromise,
  })

  const products = await payload.find({
    collection: 'products',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  })

  const product = products.docs[0]

  if (!product) return notFound()

  // Get first image
  const image = product.images?.[0]?.image
  const imageUrl =
    typeof image === 'object' && image?.url
      ? image.url
      : '/placeholder.jpg'

  return (
    <>
      <Header />

      <div className="product-page">
        <div className="product-container">

          {/* LEFT - IMAGE */}
          <div className="product-image">
            <Image
              src={imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="main-img"
            />
          </div>

          {/* RIGHT - DETAILS */}
          <div className="product-details">

            <h1 className="product-title">
              {product.name}
            </h1>

            <p className="price">
              ₹ {product.price}
            </p>

            <p className="sku">
              SKU: {product.sku}
            </p>

            <p className="stock">
              {product.inventory > 0
                ? 'In Stock'
                : 'Out of Stock'}
            </p>

            {/* CATEGORY */}
            {product.productCategory && (
              <p className="category">
                Category:{' '}
                {typeof product.productCategory ===
                'object'
                  ? product.productCategory.name
                  : product.productCategory}
              </p>
            )}

            {/* DESCRIPTION */}
            {product.description && (
              <div className="description">
                <RichText
                  data={product.description}
                />
              </div>
            )}

            {/* BUTTONS */}
            <div className="actions">
              <button className="btn primary">
                Add to Cart
              </button>

              <button className="btn secondary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}