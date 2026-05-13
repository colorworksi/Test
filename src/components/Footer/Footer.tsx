export default function Footer() {
  return (
    <footer className="main-footer footer-style-one">
      <div className="floating-img bounce-x">
        <img src="/theme/images/background/footer-bg-obj-1.png" alt="Footer Background Object" />
      </div>

      <div className="floating-img2 bounce-y">
        <img src="/theme/images/background/footer-bg-obj-2.png" alt="Footer Background Object" />
      </div>

      {/* Widgets Section */}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            {/* Footer Column */}
            <div className="footer-column col-lg-3 col-sm-6">
              <div className="footer-widget links-widget ms-0 ms-xl-4">
                <h4 className="widget-title">Quick Links</h4>

                <div className="widget-content">
                  <ul className="user-links">
                    <li>
                      <a href="#/">Home</a>
                    </li>
                    <li>
                      <a href="#/">Pages</a>
                    </li>
                    <li>
                      <a href="#/">Apartments</a>
                    </li>
                    <li>
                      <a href="#/">News</a>
                    </li>
                    <li>
                      <a href="#/">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Column */}
            <div className="footer-column col-lg-6 col-sm-6">
              <div className="footer-widget news-widget">
                <div className="widget-content">
                  <div className="text">
                    <em>Subscribe</em> to receive high-potential investment properties, market
                    analysis, and expert recommendations.
                  </div>

                  <form className="newsletter-form" method="post" action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="Your email address"
                        required
                      />

                      <button type="button" className="subscribe-btn">
                        Subscribe <i className="fa-light fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Footer Column */}
            <div className="footer-column col-lg-3 col-sm-6">
              <div className="footer-widget info-widget">
                <h4 className="widget-title">Contact Us</h4>

                <div className="widget-content">
                  <div className="contact-list">
                    <div className="list-info">
                      <a href="tel:+1750050088">+175 005-0088</a>
                    </div>

                    <div className="list-info">
                      <a href="mailto:info@company.com">info@company.com</a>
                    </div>

                    <div className="list-info">
                      <a href="#/" className="address">
                        1901 Thornridge Cir. Shiloh Hawaii 81063
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="auto-container">
        <div className="footer-bottom">
          <div className="inner-container justify-content-center justify-content-sm-between">
            <p className="copyright-text">© Copyright 2026 by Company.com</p>

            <ul className="d-flex align-items-center gap-2">
              <li>
                <a href="#0">Privacy Policy</a>
              </li>
              <li>|</li>
              <li>
                <a href="#0">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img
        className="img-reveal footer-bottom-logo"
        src="/theme/images/footer-bottom-logo.png"
        alt="Footer Logo"
      />
    </footer>
  )
}
