export default function HomeContact() {
  return (
    <section className="contact-section">
      <div className="contact-image fix">
        <img data-speed=".8" src="/theme/images/resource/contact-1-1.jpg" alt="Contact" />
      </div>

      <div className="contact-image2 fix">
        <img data-speed=".8" src="/theme/images/resource/contact-bg.png" alt="Background" />
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-xl-6">
            <div className="contact-content-1">
              <div className="sec-title light">
                <span className="h6 sub-title tz-sub-tilte tz-sub-anim tx-subTitle">Contact</span>

                <div className="h2 title tx-title tz-itm-title tz-itm-anim tx-title sec_title">
                  <span className="d-xl-block">Get in Touch</span> With our experts
                </div>
              </div>

              <div className="contact-list-items">
                <iframe
                  className="map w-100"
                  title="map"
                  src="https://maps.google.com/maps?width=100%25&height=315&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                ></iframe>

                <div className="list-wrapper">
                  {/* Location */}
                  <div className="contact-list wow fadeInUp" data-wow-delay=".4s">
                    <div className="h4 title">Location:</div>
                    <div className="contact-box">
                      <div className="icon">
                        <i className="fa-sharp fa-light fa-location-dot"></i>
                      </div>
                      <div className="text">Holland Park Holland, London 7QU</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-list wow fadeInUp" data-wow-delay=".6s">
                    <div className="h4 title">Email:</div>
                    <div className="contact-box">
                      <div className="icon">
                        <i className="fa-classic fa-light fa-envelope"></i>
                      </div>
                      <div>
                        <a
                          href="https://html.kodesolution.com/cdn-cgi/l/email-protection"
                          className="d-block"
                        >
                          <span>[email protected]</span>
                        </a>
                        <a href="mailto:info8797@gmail.com">info8797@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-xl-6 ps-xl-0">
            <div className="contact-form-style-1">
              <form
                id="contact_form"
                name="contact_form"
                className="contact-form-box"
                action="https://html.kodesolution.com/2026/realexa-html/includes/sendmail.php"
                method="post"
              >
                <div className="row g-4">
                  {/* Name */}
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="form-clt">
                      <label>Your Name</label>
                      <input
                        name="form_name"
                        className="form-control"
                        type="text"
                        placeholder="Your Name *"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="form-clt">
                      <label>Email Address</label>
                      <input
                        name="form_email"
                        className="form-control"
                        type="email"
                        placeholder="Email Address *"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="form-clt">
                      <label>Phone Number</label>
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder="Phone *"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                    <div className="form-clt">
                      <label>Select Service</label>
                      <input
                        name="form_subject"
                        className="form-control"
                        type="text"
                        placeholder="Subject (Optional)"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                    <div className="form-clt">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        name="form_message"
                        placeholder="Type Your Message"
                        rows="9"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                    <div className="contact-button">
                      <input name="form_botcheck" className="form-control" type="hidden" value="" />
                      <button
                        type="submit"
                        className="btn-style-one"
                        data-loading-text="Please wait..."
                      >
                        View All Member
                        <span className="arrow-right">
                          <img src="/theme/images/icons/btn-icon-1.png" alt="icon" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
