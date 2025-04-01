import Link from "next/link";
import { Fragment, useState } from "react";
const MobileMenu = ({ handleShow, logo, extraClass, barIcon }) => {
  const [toggle, setToggle] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };

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
              {/*====== Site Branding ======*/}
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
              <div className="nav-search mb-30 d-block d-xl-none ">
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
                            <a>Office Landscaping</a>  
                          </Link>  
                        </li>  
                        <li>  
                          <Link legacyBehavior href="service-Society-Plantation">  
                            <a>Society Plantation</a>  
                          </Link>  
                        </li>  
                        <li>  
                          <Link legacyBehavior href="service-Plant-Nursery">  
                            <a>Plant Sales and Nursery</a>  
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
                className="bar-button"
                data-toggle="modal"
                data-target="#sidebar-modal"
                onClick={handleShow}
              >
                <img
                  src={barIcon ? barIcon : "assets/images/bar.png"}
                  alt="Image"
                />
              </div>
              <div
                className="navbar-toggler"
                onClick={() => setToggle(!toggle)}
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
