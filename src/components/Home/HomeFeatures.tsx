import Image from 'next/image'

export default function HomeFeatures() {
  return (
    <section className="feature-section pt-120 pb-60">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-7 mx-auto wow fadeInUp">
            <div className="sec-title text-center">
              <div className="h6 sub-title">featured list</div>
              <div className="h2 title tx-title tz-itm-title tz-itm-anim">
                <span>Featured</span> Properties you’ll love
              </div>
            </div>
          </div>
        </div>

        {/* Feature Block 1 */}
        <div className="feature-block">
          <div className="inner-block wow fadeInUp" data-wow-delay="200ms">
            <div className="image-block">
              <div className="image-1">
                <div className="inner-box overflow-hidden" data-height="600">
                  <Image
                    data-speed="0.8"
                    src="/theme/images/resource/feautre1-1.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              <div className="image-2">
                <div className="inner-box overflow-hidden" data-height="600">
                  <Image
                    data-speed="0.8"
                    src="/theme/images/resource/feautre1-2.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="img-text-block">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/marker-pin.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="text">1901 Thornridge Shiloh Hawaii 81063</div>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="h6 subtitle">Residential apartment</div>

              <div className="h3 title tx-title tz-itm-title tz-itm-anim">
                Skyline Heights Apartment
              </div>

              <div className="text">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less
              </div>

              <div className="features-list">
                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon1.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Total Area</div>
                  <div className="separetor">:</div>
                  <div className="value">2400 sq ft</div>
                </div>

                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon2.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Rooms</div>
                  <div className="separetor">:</div>
                  <div className="value">4 Beds</div>
                </div>

                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon3.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Baths</div>
                  <div className="separetor">:</div>
                  <div className="value">3</div>
                </div>

                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon4.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Parking</div>
                  <div className="separetor">:</div>
                  <div className="value">Yes</div>
                </div>
              </div>

              <a href="/page-about" className="btn-style-one">
                More About Us
                <span className="arrow-right">
                  <Image
                    src="/theme/images/icons/btn-icon-1.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Block 2 */}
        <div className="feature-block-two">
          <div className="inner-block wow fadeInUp" data-wow-delay="300ms">
            <div className="image-block">
              <div className="image-1">
                <div className="inner-box overflow-hidden" data-height="600">
                  <Image
                    data-speed="0.8"
                    src="/theme/images/resource/feautre1-3.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="img-text-block">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/marker-pin.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="text">1901 Thornridge Shiloh Hawaii 81063</div>
                </div>
              </div>

              <div className="image-2">
                <div className="inner-box overflow-hidden" data-height="600">
                  <Image
                    data-speed="0.8"
                    src="/theme/images/resource/feautre1-4.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="h6 subtitle">Residential apartment</div>

              <div className="h3 title tx-title tz-itm-title tz-itm-anim">
                Skyline Heights Apartment
              </div>

              <div className="text">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less
              </div>

              <div className="features-list">
                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon1.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Total Area</div>
                  <div className="separetor">:</div>
                  <div className="value">2400 sq ft</div>
                </div>

                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon2.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Rooms</div>
                  <div className="separetor">:</div>
                  <div className="value">4 Beds</div>
                </div>

                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon3.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Baths</div>
                  <div className="separetor">:</div>
                  <div className="value">3</div>
                </div>

                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon4.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Parking</div>
                  <div className="separetor">:</div>
                  <div className="value">Yes</div>
                </div>
              </div>

              <a href="/page-about" className="btn-style-one">
                More About Us
                <span className="arrow-right">
                  <Image
                    src="/theme/images/icons/btn-icon-1.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Block 3 */}
        <div className="feature-block">
          <div className="inner-block wow fadeInUp" data-wow-delay="400ms">
            <div className="image-block">
              <div className="image-1">
                <div className="inner-box overflow-hidden" data-height="600">
                  <Image
                    data-speed="0.8"
                    src="/theme/images/resource/feautre1-5.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              <div className="image-2">
                <div className="inner-box overflow-hidden" data-height="600">
                  <Image
                    data-speed="0.8"
                    src="/theme/images/resource/feautre1-6.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="img-text-block">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/marker-pin.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="text">1901 Thornridge Shiloh Hawaii 81063</div>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="h6 subtitle">Residential apartment</div>

              <div className="h3 title tx-title tz-itm-title tz-itm-anim">
                Skyline Heights Apartment
              </div>

              <div className="text">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less
              </div>

              <div className="features-list">
                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon1.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Total Area</div>
                  <div className="separetor">:</div>
                  <div className="value">2400 sq ft</div>
                </div>

                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon2.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Rooms</div>
                  <div className="separetor">:</div>
                  <div className="value">4 Beds</div>
                </div>

                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon3.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Baths</div>
                  <div className="separetor">:</div>
                  <div className="value">3</div>
                </div>

                <div className="list-item">
                  <div className="icon">
                    <Image
                      src="/theme/images/icons/feature1-icon4.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="ftr-title">Parking</div>
                  <div className="separetor">:</div>
                  <div className="value">Yes</div>
                </div>
              </div>

              <a href="/page-about" className="btn-style-one">
                More About Us
                <span className="arrow-right">
                  <Image
                    src="/theme/images/icons/btn-icon-1.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}