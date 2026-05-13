export default function HomeProject() {
  return (
    <section className="project-section pt-120 pb-50">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-6">
            <div className="sec-title wow fadeInUp">
              <div className="h6 sub-title">categories</div>

              <div className="h2 title tx-title tz-itm-title tz-itm-anim">
                <span>Explore</span> Our full range of property opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper three-grid-slider wow fadeInUp" data-wow-delay="200ms">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="project-block">
              <div className="inner-block">
                <div className="image-block">
                  <a className="image" href="page-project-details.html">
                    <img src="/theme/images/resource/project1-1.jpg" alt="Residential Apartments" />
                    <img src="/theme/images/resource/project1-1.jpg" alt="Residential Apartments" />
                  </a>
                </div>

                <div className="content-block">
                  <div className="h4 title">
                    <a href="page-project-details.html">Residential Apartments</a>
                  </div>

                  <a href="page-project-details.html" className="read-more">
                    <img src="/theme/images/icons/btn-icon-2.png" alt="Read More" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="project-block">
              <div className="inner-block">
                <div className="image-block">
                  <a className="image" href="page-project-details.html">
                    <img src="/theme/images/resource/project1-2.jpg" alt="Luxury Villas" />
                    <img src="/theme/images/resource/project1-2.jpg" alt="Luxury Villas" />
                  </a>
                </div>

                <div className="content-block">
                  <div className="h4 title">
                    <a href="page-project-details.html">Luxury Villas</a>
                  </div>

                  <a href="page-project-details.html" className="read-more">
                    <img src="/theme/images/icons/btn-icon-2.png" alt="Read More" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="project-block">
              <div className="inner-block">
                <div className="image-block">
                  <a className="image" href="page-project-details.html">
                    <img src="/theme/images/resource/project1-3.jpg" alt="Commercial Spaces" />
                    <img src="/theme/images/resource/project1-3.jpg" alt="Commercial Spaces" />
                  </a>
                </div>

                <div className="content-block">
                  <div className="h4 title">
                    <a href="page-project-details.html">Commercial Spaces</a>
                  </div>

                  <a href="page-project-details.html" className="read-more">
                    <img src="/theme/images/icons/btn-icon-2.png" alt="Read More" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="swiper-slide">
            <div className="project-block">
              <div className="inner-block">
                <div className="image-block">
                  <a className="image" href="page-project-details.html">
                    <img src="/theme/images/resource/project1-2.jpg" alt="Commercial Spaces" />
                    <img src="/theme/images/resource/project1-2.jpg" alt="Commercial Spaces" />
                  </a>
                </div>

                <div className="content-block">
                  <div className="h4 title">
                    <a href="page-project-details.html">Commercial Spaces</a>
                  </div>

                  <a href="page-project-details.html" className="read-more">
                    <img src="/theme/images/icons/btn-icon-2.png" alt="Read More" />
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
