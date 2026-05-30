import Link from 'next/link'
import config from '@payload-config'
import { getPayload } from 'payload'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Blogs',
  description: 'We help businesses do amazing things since 2010.',
}

export default async function Blog() {
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    sort: '-publishedAt',
    depth: 1,
  })

  return (
    <>
      <Header />

      <div className="blog-list-page">
        <h1 className="page-title">Blog</h1>

        <div className="blog-grid">
          {posts.docs.map((post) => {
            // SAFE IMAGE HANDLING
            const hero =
              typeof post.heroImage === 'object'
                ? post.heroImage
                : null

            const imageUrl =
              hero?.url ||
              hero?.image?.url ||
              '/placeholder.jpg'

            return (
              <article
                key={post.id}
                className="blog-card"
              >
                {/* IMAGE */}
                <div className="blog-card-image">
                  <img
                    src={imageUrl}
                    alt={post.title}
                  />
                </div>

                {/* CONTENT */}
                <div className="blog-card-content">
                  <h2>
                    <Link
                      href={`/blog/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {post.publishedAt && (
                    <p className="date">
                      {new Date(
                        post.publishedAt,
                      ).toLocaleDateString()}
                    </p>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="read-more"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <Footer />
    </>
  )
}