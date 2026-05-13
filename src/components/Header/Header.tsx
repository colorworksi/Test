export default function Header() {
  return (
    <header className="main-header header-style-one">
      <div className="large-container">
        <div className="header-lower anim-fade-move" data-delay="0.25">
          <div className="inner-container">
            <div className="main-box">
              {/* Logo */}
              <div className="logo-box">
                <div className="logo">
                  <a href="/">
                    <img src="/theme/images/logo.png" alt="Logo" />
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
                    <li className="current dropdown">
                      <a href="/">Home</a>
                      <ul>
                        <li>
                          <a href="/">Home 01</a>
                        </li>
                        <li>
                          <a href="/home-02">Home 02</a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/faq">Faq</a>
                        </li>
                        <li>
                          <a href="/pricing">Pricing</a>
                        </li>

                        <li className="dropdown">
                          <a href="#">Services</a>
                          <ul>
                            <li>
                              <a href="/services">Services List</a>
                            </li>
                            <li>
                              <a href="/service-details">Services Details</a>
                            </li>
                          </ul>
                        </li>

                        <li className="dropdown">
                          <a href="#">Team</a>
                          <ul>
                            <li>
                              <a href="/team">Team List</a>
                            </li>
                            <li>
                              <a href="/team-details">Team Details</a>
                            </li>
                          </ul>
                        </li>

                        <li className="dropdown">
                          <a href="#">Shop</a>
                          <ul>
                            <li>
                              <a href="/products">Products</a>
                            </li>
                            <li>
                              <a href="/products-sidebar">Products with Sidebar</a>
                            </li>
                            <li>
                              <a href="/product-details">Product Details</a>
                            </li>
                            <li>
                              <a href="/cart">Cart</a>
                            </li>
                            <li>
                              <a href="/checkout">Checkout</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="/testimonials">Testimonials</a>
                        </li>
                        <li>
                          <a href="/404">404</a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a href="#">Project</a>
                      <ul>
                        <li>
                          <a href="/projects">Project</a>
                        </li>
                        <li>
                          <a href="/project-details">Project Details</a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a href="/blog">Blog</a>
                      <ul>
                        <li>
                          <a href="/blog">Blog</a>
                        </li>
                        <li>
                          <a href="/blog-details">Blog Details</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Right Side */}
              <div className="right-box">
                <a className="theme-btn btn-style-one" href="/contact">
                  <span className="btn-title">Get a Quote</span>
                </a>

                <div className="ui-btn-outer">
                  <button className="ui-btn search-btn">
                    <span className="icon lnr lnr-icon-search"></span>
                  </button>
                </div>

                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>

        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <a href="/">
                <img src="/theme/images/logo-2.png" alt="Logo" />
              </a>
            </div>

            <div className="close-btn">
              <i className="icon fa fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix"></ul>

          <ul className="contact-list-one">
            <li>
              <i className="icon lnr-icon-envelope1"></i>

              <span className="title">Send Email</span>

              <div className="text">
                <a href="mailto:example@email.com">example@email.com</a>
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <a href="#">
                <i className="icon fab fa-twitter"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="icon fab fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="icon fab fa-pinterest-p"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="icon fab fa-vimeo-v"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Search Popup */}
      <div className="search-popup">
        <span className="search-back-drop"></span>

        <button className="close-search">
          <span className="fa fa-times"></span>
        </button>

        <div className="search-inner">
          <form method="post" action="/">
            <div className="form-group">
              <input type="search" name="search-field" placeholder="Search..." required />

              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <a href="/">
                <img src="theme/images/logo.png" alt="Logo" />
              </a>
            </div>

            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix"></ul>
                </div>
              </nav>

              <div className="mobile-nav-toggler">
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
