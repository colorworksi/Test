import Image from 'next/image'

export default function HomeAbout() {
  return (
    <section className="about-section fix pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          {/* Left Images */}
          <div className="col-xl-7">
            <div className="about-block-one wow fadeInRight" data-wow-delay="300ms">
              <div className="row g-4">
                <div className="col-xl-5 col-md-6">
                  <div className="image-block1 position-relative overflow-hidden">
                    <Image
                      data-speed="0.8"
                      src="/theme/images/resource/about-1-1.jpg"
                      alt="About"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>

                  <div className="image-block1 position-relative overflow-hidden style-bottom-0">
                    <Image
                      data-speed="0.8"
                      src="/theme/images/resource/about-1-2.jpg"
                      alt="About"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>

                <div className="col-xl-7 col-md-6">
                  <div className="image-block2 position-relative overflow-hidden">
                    <Image
                      data-speed="0.8"
                      src="/theme/images/resource/about-1-3.jpg"
                      alt="About"
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

          {/* Right Content */}
          <div className="col-xl-5">
            <div className="about-block-content-one wow fadeInLeft" data-wow-delay="300ms">
              <div className="sec-title mb-0">
                <div className="h6 sub-title">about us</div>

                <div className="h2 title tx-title tz-itm-title tz-itm-anim">
                  <span>Guiding</span> Smart Property Decisions
                </div>
              </div>

              <div className="text">
                We are a professional real estate business dedicated to helping clients buy, sell,
                and invest in properties with confidence. Our team combines local market knowledge,
                verified listings, and transparent services.
              </div>

              <div className="about-list-items">
                <div className="h4 title">Our Business Advantages</div>

                <ul className="about-list">
                  <li>
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.5 0L7 3.5L3.5 7L0 3.5L3.5 0Z" fill="#595959" />
                    </svg>
                    Trusted Market Expertise
                  </li>

                  <li>
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.5 0L7 3.5L3.5 7L0 3.5L3.5 0Z" fill="#595959" />
                    </svg>
                    Local & Regional Market Knowledge
                  </li>

                  <li>
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.5 0L7 3.5L3.5 7L0 3.5L3.5 0Z" fill="#595959" />
                    </svg>
                    Clear Pricing and Documentation
                  </li>
                </ul>

                <div className="about-button-items">
                  <a href="/about" className="btn-style-one">
                    More About Us
                    <span className="arrow-right">
                      <Image
                        src="/theme/images/icons/btn-icon-1.png"
                        alt="Arrow"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </span>
                  </a>

                  <div className="content-info">
                    <Image
                      src="/theme/images/resource/sign.png"
                      alt="Signature"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />

                    <div className="content">
                      <div className="h6 m-0">Michael Anderson</div>
                      <div className="text-2">Managing director</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}