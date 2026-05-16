import Image from 'next/image'

export default function HomeService() {
  return (
    <section className="service-section pt-120 pb-90">
      <div className="floating-object bounce-y">
        <Image
          src="/theme/images/resource/service-object.png"
          alt="Service Object"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div className="auto-container px-xl-0">
        <div className="row">
          <div className="col-xl-7 mx-auto wow fadeInUp">
            <div className="sec-title text-center">
              <div className="h6 sub-title">our services</div>

              <div className="h2 title tx-title tz-itm-title tz-itm-anim">
                <span>Professional</span> Services designed
                <br />
                for your property goals
              </div>
            </div>
          </div>
        </div>

        <div className="service-block-wraper">
          <div className="service-block-one">
            <div className="inner-block wow fadeInUp" data-wow-delay="200ms">
              <div className="icon">
                <i className="flaticon-set-agreement"></i>
              </div>

              <div className="h5 title">
                <a href="page-service-details.html">
                  Property Buying <br />
                  Assistance
                </a>
              </div>

              <div className="text">
                Helping clients find the right property based on budget, location,
              </div>
            </div>
          </div>

          <div className="service-block-one">
            <div className="inner-block wow fadeInUp" data-wow-delay="400ms">
              <div className="icon">
                <i className="flaticon-set-property"></i>
              </div>

              <div className="h5 title">
                <a href="page-service-details.html">
                  Property Selling <br />
                  Services
                </a>
              </div>

              <div className="text">
                Strategic pricing, marketing, and negotiation to sell faster at the best price.
              </div>
            </div>
          </div>

          <div className="service-block-one">
            <div className="inner-block wow fadeInUp" data-wow-delay="600ms">
              <div className="icon">
                <i className="flaticon-set-building-plan"></i>
              </div>

              <div className="h5 title">
                <a href="page-service-details.html">
                  Rental & Leasing <br />
                  Solutions
                </a>
              </div>

              <div className="text">
                Residential and commercial rental services with verified tenants.
              </div>
            </div>
          </div>

          <div className="service-block-one">
            <div className="inner-block wow fadeInUp" data-wow-delay="800ms">
              <div className="icon">
                <i className="flaticon-set-investment-2"></i>
              </div>

              <div className="h5 title">
                <a href="page-service-details.html">
                  Investment Consulting <br />
                  Services
                </a>
              </div>

              <div className="text">
                Data-driven advice for high-return property investments.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}