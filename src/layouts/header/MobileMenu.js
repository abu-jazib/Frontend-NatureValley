import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import Preloader from "@/src/layouts/Preloader"; // Assuming Preloader is located here

const MobileMenu = ({ handleShow, logo, extraClass, barIcon }) => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [loading, setLoading] = useState(false); // Manage loading state for other parts
  const [loadingNavbar, setLoadingNavbar] = useState(false); // Manage loading for navbar toggler

  const active = (value) => setActiveMenu(value === activeMenu ? null : value);
  const activeSubMenu = (value) =>
    value == activeMenu ? { display: "block" } : { display: "none" };

  // Simulate loading state change (for demonstration purposes)
  useEffect(() => {
    if (toggle) {
      // Show loading for the rest of the menu when it's opened
      setLoading(true);
      setTimeout(() => {
        setLoading(false); // Set loading to false after 1 second (simulate loading)
      }, 1000);
    } else {
      setLoading(false); // No loading when toggle is false
    }
  }, [toggle]);

  // Handle navbar toggler click
  const handleNavbarTogglerClick = () => {
    setLoadingNavbar(true); // Set navbar loading state to true when toggler is clicked
    setToggle(!toggle); // Toggle the menu visibility

    // Set loading for navbar to false after the toggle action is done
    setTimeout(() => {
      setLoadingNavbar(false); // Set loadingNavbar to false after the toggle operation
    }, 1000);
  };

  // Only show preloader for parts of the menu that are not toggler or menu itself
  if (loading && !toggle && !loadingNavbar) {
    return <Preloader />; // Show preloader if loading for other parts of the menu
  }

  return (
    <Fragment>
      <div
        className={`header-navigation d-xl-none d-block breakpoint-on ${extraClass}`}
      >
        <div
          className={`nav-overlay ${toggle ? "active" : ""}`}
          onClick={() => setToggle(false)}
        />
        <div className="container-fluid">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}

            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img
                    src={logo ? logo : "assets/images/logo/logo-black.png"}
                    alt="Site Logo"
                  />
                </a>
              </Link>
            </div>

            {/*====== Nav Menu ======*/}

            <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src={"assets/images/logo/logo-black.png"}
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>

              {/*=== Nav Search ===*/}
              <div className="nav-search mb-30 d-block d-xl-none">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Search Here"
                      name="email"
                      required
                    />
                    <button className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>

              {/*====== main Menu ======*/}

              <nav className="main-menu">
                <ul>
                  <li className="menu-item">
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="menu-item has-children">
                    <a href="#">
                      Service
                      <span
                        className="dd-trigger"
                        onClick={() => active("Service")}
                      >
                        <i className="far fa-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu" style={activeSubMenu("Service")}>
                      <li>
                        <Link legacyBehavior href="service-Commercial-Landscaping">
                          Commercial Landscaping
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="service-Residential-Landscaping">
                          Residential Landscaping
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="service-GreenBelt-Development">
                          GreenBelt Development
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="service-Office-Landscaping">
                          Office Landscaping
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="service-Society-Plantation">
                          Society Plantation
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="service-Plant-Nursery">
                          Plant Sales and Nursery
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link legacyBehavior href="team">
                      <a>Our Team</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link legacyBehavior href="blogs">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link legacyBehavior href="contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </nav>

              {/*====== Menu Button ======*/}

              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">Get a Quote</a>
                </Link>
              </div>
            </div>

            {/*====== Nav Right Item ======*/}

            <div className="nav-right-item d-flex align-items-center">
              <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">Get a Quote</a>
                </Link>
              </div>
              <div
                className="navbar-toggler"
                onClick={handleNavbarTogglerClick} // Trigger preloader for other divs
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
