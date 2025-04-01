import Link from "next/link";
const Footer3 = () => {
  return (
    <footer className="footer-area footer-wave pt-100 p-r z-1">
      <div className="wave-shapes">
        <img
          src="assets/images/shape/wave-shape-1.png"
          className="w-shape one"
          alt="wave shape"
        />
        <img
          src="assets/images/shape/wave-shape-2.png"
          className="w-shape two"
          alt="wave shape"
        />
      </div>
      <div className="footer-wrapper text-white main-bg p-r z-1">
        <div className="shape shape-one animate-float-y">
          <span>
            <img src="assets/images/shape/tree.png" alt="Tree Image" />
          </span>
        </div>
        <div className="shape shape-two animate-float-y">
          <span>
            <img src="assets/images/shape/tree2.png" alt="Tree Image" />
          </span>
        </div>
        <div className="container">
          {/*====== Footer Widget ======*/}
          <div className="footer-widget-area pt-55 pb-40 p-r z-1">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/*====== Footer Widget ======*/}
                <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInDown">
                  <div className="widget-content">
                    <div className="footer-logo mb-25">
                      <Link legacyBehavior href="/">
                        <a>
                          <img
                            src="assets/images/logo/logo-white.png"
                            alt="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    <p>
                    Path to Greener tomorrow. We are here to help you to make
                    your life better.
                    </p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn filled-btn filled-white">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                {/*====== Footer Widget ======*/}
                <div className="footer-widget contact-info-widget mb-40 wow fadeInUp">
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
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer3;
