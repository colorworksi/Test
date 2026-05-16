import Image from 'next/image'

export default function HomeBlog() {
  return (
    <section className="blog-section pt-120 pb-70">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 mx-auto wow FadeInUp">
            <div className="sec-title text-center">
              <div className="h6 sub-title">our blog</div>
              <div className="h2 title tx-title tz-itm-title tz-itm-anim">
                <span>Stay</span> Informed with our latest blog posts
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Blog Item 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-box wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500">
              <div className="inner-box">
                <div className="image-box">
                  <Image
                    src="/theme/images/resource/news1-1.jpg"
                    alt="blog"
                    width={400}
                    height={300}
                  />
                  <Image
                    src="/theme/images/resource/news1-1.jpg"
                    alt="blog"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="content-box">
                  <div className="post-meta">
                    <a href="news-details.html">Real estate</a>
                  </div>

                  <div className="h4 title">
                    <a href="news-details.html">
                      Why location Matters When Choosing Your Next Home
                    </a>
                  </div>

                  <a className="read-more-btn" href="news-details.html">
                    <span className="btn-title">Read More</span>
                    <Image
                      src="/theme/images/icons/btn-icon-2.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500">
              <div className="inner-box">
                <div className="image-box">
                  <Image
                    src="/theme/images/resource/news1-2.jpg"
                    alt="blog"
                    width={400}
                    height={300}
                  />
                  <Image
                    src="/theme/images/resource/news1-2.jpg"
                    alt="blog"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="content-box">
                  <div className="post-meta">
                    <a href="news-details.html">Real estate</a>
                  </div>

                  <div className="h4 title">
                    <a href="news-details.html">
                      How Thoughtful Design Enhances Everyday Living
                    </a>
                  </div>

                  <a className="read-more-btn" href="news-details.html">
                    <span className="btn-title">Read More</span>
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5.60006L10.5 5.60006M12.8353 5.61358C10.6569 5.48049 6.3 6.41212 6.3 11.2034M12.8353 5.58981C10.6569 5.7229 6.3 4.79127 6.3 0"
                        stroke="#A06F49"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Item 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500">
              <div className="inner-box">
                <div className="image-box">
                  <Image
                    src="/theme/images/resource/news1-3.jpg"
                    alt="blog"
                    width={400}
                    height={300}
                  />
                  <Image
                    src="/theme/images/resource/news1-3.jpg"
                    alt="blog"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="content-box">
                  <div className="post-meta">
                    <a href="news-details.html">Real estate</a>
                  </div>

                  <div className="h4 title">
                    <a href="news-details.html">
                      Modern Amenities That Support a Balanced Lifestyle
                    </a>
                  </div>

                  <a className="read-more-btn" href="news-details.html">
                    <span className="btn-title">Read More</span>
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5.60006L10.5 5.60006M12.8353 5.61358C10.6569 5.48049 6.3 6.41212 6.3 11.2034M12.8353 5.58981C10.6569 5.7229 6.3 4.79127 6.3 0"
                        stroke="#A06F49"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}