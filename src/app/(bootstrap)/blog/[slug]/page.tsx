import { notFound } from 'next/navigation'
import config from '@payload-config'
import { getPayload } from 'payload'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params

  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'posts',
    draft: false,
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  })

  const post = result.docs[0]

  if (!post) {
    return notFound()
  }

  const hero =
    post.heroImage && typeof post.heroImage === 'object' && 'url' in post.heroImage
      ? post.heroImage
      : null

  const imageUrl = hero?.url ?? '/placeholder.jpg'

  const authors = Array.isArray(post.populatedAuthors) ? post.populatedAuthors : []

  return (
    <>
      <Header />

      <article className="blog-page">
        <div className="blog-container">
          <h1 className="blog-title">{post.title}</h1>

          <div className="blog-meta">
            {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString()}</span>}

            {authors.length > 0 && (
              <span>
                By{' '}
                {authors
                  .map((author) => author?.name ?? '')
                  .filter(Boolean)
                  .join(', ')}
              </span>
            )}
          </div>

          {imageUrl && (
            <div className="blog-image">
              <img src={imageUrl} alt={post.title || 'Blog image'} />
            </div>
          )}

          {post.content && (
            <div className="blog-content">
              <RichText data={post.content} />
            </div>
          )}
        </div>
      </article>

      <Footer />
    </>
  )
}
