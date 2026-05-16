import Image from 'next/image'

export default function HomeHero() {
  return (
    <section className="hero-section">
      <div className="social-text">
        <a href="#">facebook</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>

      <div
        className="hero-1 bg-cover"
        style={{
          backgroundImage: "url('/theme/images/banner/hero-bg-1-1.jpg')",
        }}
      >
        <div className="hero-content">
          <div className="h1 hero-title wow fadeInUp" data-wow-delay="200ms">
            <span>Your Smarter</span> Property Decisions
          </div>

          <a
            href="page-projects.html"
            className="btn-style-two wow fadeInUp"
            data-wow-delay="200ms"
          >
            Browse Properties

            <span className="arrow-right">
              <Image
                src="/theme/images/icons/btn-icon-1.png"
                alt="Arrow Icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
              />
            </span>
          </a>
        </div>

        <div className="hero-bottom-items wow fadeInUp">
          <div className="content">
            <div className="counter-items wow fadeInUp" data-wow-delay="100ms">
              <div className="h6 wow fadeInUp" data-wow-delay="200ms">
                Client <br /> Satisfaction
              </div>

              <div className="h2 count-box wow fadeInUp" data-wow-delay="300ms">
                <span className="count-text" data-speed="3000" data-stop="98">
                  20
                </span>
                %
              </div>
            </div>

            <div className="text wow fadeInUp" data-wow-delay="400ms">
              Premium residential and commercial properties tailored to your lifestyle and
              investment goals.
            </div>
          </div>

          <div className="hero-image wow fadeInUp" data-wow-delay="500ms">
            <Image
              src="/theme/images/banner/hero-image.jpg"
              alt="Hero"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}