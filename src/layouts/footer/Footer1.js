import Link from "next/link";
const Footer1 = () => {
  return (
    <footer className="footer-area gray-bg">
      <div className="container">
        {/*====== Footer Widget ======*/}
        <div className="footer-widget-area pt-80 pb-40">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInUp">
                <div className="widget-content">
                  <div className="footer-logo mb-25">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/logo/logo-black.png"
                          alt="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                  Path to Greener tomorrow. We are here to help you to make
                  your life better.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-box"
                  >
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                      <button className="submit-btn">
                        <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget contact-info-widget mb-40 wow fadeInDown">
                <h4 className="widget-title">Get In Touch</h4>
                <div className="widget-content">
                  <ul className="info-list">
                    <li>27KM Multan Road Lahore, Punjab, Pakistan</li>
                    <li>
                      <a href="mailto:info@naturevalley.com.pk">info@naturevalley.com.pk</a>
                    </li>
                    <li>
                      <a href="tel:+92 332 8194499">+92 332 8194499</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Copyright Area ===*/}
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Copyright Text ======*/}
              <div className="copyright-text">
                <p>Copyright© 2025 NatureValley. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Copyright Nav ======*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
