export default function HomeTestimonial() {
  return (
    <section className="testimonial-section pt-120 pb-60">
      <div className="container-fluid pl-40 pr-40">
        <div className="row">
          <div className="col-xl-6 col-lg-7 mx-auto wow fadeInUp">
            <div className="sec-title text-center">
              <div className="h6 sub-title">testimonial</div>

              <div className="h2 title tx-title tz-itm-title tz-itm-anim">
                <span>Proven</span> Results through client satisfaction
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Testimonial 1 */}
          <div className="col-xl-6">
            <div className="testimonial-block">
              <div className="inner-box wow fadeInUp" data-wow-delay="200ms">
                <div className="content-box">
                  <div className="logo">
                    <i className="fa-classic fa-solid fa-quote-left"></i>
                  </div>

                  <div className="h4 focus-text">The team was incredibly professional</div>

                  <div className="h5 text">
                    “The team handled every piece of furniture with care and attention. They were
                    punctual, friendly, and made the whole move effortless”
                  </div>

                  <div className="info-box">
                    <div className="user-info">
                      <div className="h5 name">Emily Carter</div>
                      <span className="designation">Senior Project Manager</span>
                    </div>

                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>

                <figure className="image-box">
                  <img src="/theme/images/resource/testimonial1-1.jpg" alt="testimonial" />

                  <a
                    href="https://www.youtube.com/watch?v=Lplq8RjQ0zU"
                    data-fancybox="gallery"
                    className="video-btn playbtnanim"
                  >
                    <i className="fa-sharp fa-solid fa-play"></i>
                  </a>
                </figure>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-xl-6">
            <div className="testimonial-block">
              <div className="inner-box wow fadeInUp" data-wow-delay="300ms">
                <div className="content-box">
                  <div className="logo">
                    <i className="fa-classic fa-solid fa-quote-left"></i>
                  </div>

                  <div className="h4 focus-text">The team was incredibly professional</div>

                  <div className="h5 text">
                    “The team handled every piece of furniture with care and attention. They were
                    punctual, friendly, and made the whole move effortless”
                  </div>

                  <div className="info-box">
                    <div className="user-info">
                      <div className="h5 name">Emily Carter</div>
                      <span className="designation">Senior Project Manager</span>
                    </div>

                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>

                <figure className="image-box">
                  <img src="/theme/images/resource/testimonial1-2.jpg" alt="testimonial" />

                  <a
                    href="https://www.youtube.com/watch?v=Lplq8RjQ0zU"
                    data-fancybox="gallery"
                    className="video-btn playbtnanim"
                  >
                    <i className="fa-sharp fa-solid fa-play"></i>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
