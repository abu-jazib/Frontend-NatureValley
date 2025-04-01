import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "../SearchModal";
import Sidebar from "../Sidebar";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
const Header3 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <header className="header-area header-three">
        <div className="header-top-bar-two white-bg d-none d-xl-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                {/*====== Top Left ======*/}
                <div className="top-left">
                  <span>
                    <i className="far fa-envelope" />
                    <b className="title">Email :</b>
                    <a href="mailto:info@naturevalley.com.pk">info@naturevalley.com.pk</a>
                  </span>
                  <span>
                    <i className="far fa-phone-plus" />
                    <b className="title">Call :</b>
                    <a href="tel:+92 332 8194499">+92 332 8194499</a>
                  </span>
                  <span>
                    <i className="far fa-map-marker-alt" />
                    <b className="title">Location :</b>27KM Multan Road, Lahore
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                {/*====== Top Right ======*/}
                <div className="top-right float-lg-right">
                  <ul className="social-link">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61565466936339&mibextid=LQQJ4d">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/naturevalley/">Linkedin</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/naturevalley.pk/">Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>  
          </div>
        </div>
        {/*======= Header Navigation ======*/}
        <div className="header-navigation main-bg navigation-white d-xl-block d-none">
          <div className="nav-overlay" />
          <div className="container-fluid">
            {/*======= Primary Menu ======*/}
            <div className="primary-menu">
              {/*======= Site Branding ======*/}
              <div className="site-branding">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-white-two.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*======= Nav Menu ======*/}
              <div className="nav-menu">
                {/* Mobile Logo */}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link legacyBehavior href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/logo-black.png"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/*=== Nav Search ===*/}
                {/*=== Main menu ===*/}
                <Menu />
                {/*====== Menu Button ======*/}
                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
              {/*======= Nav Right Item ======*/}
              <div className="nav-right-item d-flex align-items-center">
                <div className="menu-button d-xl-block d-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Get a Quote</a>
                  </Link>
                </div>
                <div
                  className="bar-button"
                  data-toggle="modal"
                  data-target="#sidebar-modal"
                  onClick={handleShow}
                >
                  <img src="assets/images/bar2.png" alt="Image" />
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu
          handleShow={handleShow}
          logo="assets/images/logo/logo-white-two.png"
          extraClass={"main-bg navigation-white"}
          barIcon="assets/images/bar2.png"
        />
      </header>
      <Sidebar show={show} handleClose={handleClose} />
    </Fragment>
  );
};
export default Header3;
