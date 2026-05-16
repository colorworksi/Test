import Image from 'next/image'

const faqData = [
  {
    id: '01',
    title: 'Business Strategy',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less',
    active: true,
    delay: '200ms',
  },
  {
    id: '02',
    title: 'Strategic Planning',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less',
    delay: '300ms',
  },
  {
    id: '03',
    title: 'Marketing & Branding',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less',
    delay: '400ms',
  },
  {
    id: '04',
    title: 'Sales Consulting',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less',
    delay: '500ms',
  },
]

export default function HomeFaq() {
  return (
    <section className="faq-section pt-20 pb-120">
      <div className="auto-container">
        <div className="row g-4">
          <div className="col-xl-6">
            <div className="sec-title wow fadeInUp">
              <div className="h6 sub-title">faqs</div>

              <div className="h2 title tx-title tz-itm-title tz-itm-anim">
                <span>Have</span> Questions in your mind?
              </div>
            </div>

            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-block-one ${
                  faq.active ? 'active' : ''
                } ${index === faqData.length - 1 ? 'mb-4 mb-xl-0' : ''} wow fadeInUp`}
                data-wow-delay={faq.delay}
              >
                <div className="title-box">
                  <div className="content">
                    <span className="count">{faq.id}</span>

                    <div className="h5 title">{faq.title}</div>
                  </div>

                  <span className="icon">
                    <i className="fa-sharp fa-solid fa-plus"></i>
                  </span>
                </div>

                <div className={`content-box ${faq.active ? 'show' : ''}`}>
                  <div className="inner">
                    <div className="text">{faq.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-xl-6 col-lg-8">
            <div className="faq-image-block-one wow fadeInUp" data-wow-delay="500ms">
              <div className="image-block-1 wow fadeInUp overflow-hidden" data-wow-delay=".3s">
                <Image
                  src="/theme/images/resource/faq-1-1.jpg"
                  alt="FAQ"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              <div className="image-block-2 wow fadeInRight overflow-hidden" data-wow-delay=".5s">
                <Image
                  src="/theme/images/resource/faq-image-1-2.jpg"
                  alt="FAQ"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              <div className="image-block-3 wow fadeInUp overflow-hidden" data-wow-delay=".5s">
                <Image
                  src="/theme/images/resource/faq-image-1-3.png"
                  alt="FAQ"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}