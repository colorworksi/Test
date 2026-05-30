import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'

export default async function ProductsPage() {
  const payload = await getPayload({
    config: configPromise,
  })

  const products = await payload.find({
    collection: 'products',
    depth: 2, // IMPORTANT → populates media + relationships
  })

  return (
    <>
      <Header />

      <div className="container products-page">
        <h1 className="page-title">Products</h1>

        <div className="products-grid">
          {products.docs.map((product) => {
            // Get first image safely
            const image =
              product.images?.[0]?.image

            const imageUrl =
              typeof image === 'object' && image?.url
                ? image.url
                : '/placeholder.jpg'

            return (
              <a
                key={product.id}
                href={`/products/${product.slug}`}
                className="product-card"
              >
                <div className="product-image">
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                  />
                </div>

                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p className="price">
                    ${product.price}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      <Footer />
    </>
  )
}