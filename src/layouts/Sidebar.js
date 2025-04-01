import { useState } from "react";
import Link from "next/link";
import { Modal } from "react-bootstrap";

const Sidebar = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message

    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail(""); // Clear input
      } else {
        setMessage(data.message || "Subscription failed");
      }
    } catch (error) {
      setMessage("Error connecting to the server.");
    }
  };

  return (
    <Modal
      className="modal fade sidebar-panel-wrapper"
      show={show}
      onHide={handleClose}
    >
      <div className="modal-content">
        <button className="close" data-dismiss="modal" onClick={handleClose}>
          <i className="far fa-times" />
        </button>
        <div className="sidebar-wrapper">
          <div className="sidebar-information-area">
            <div className="row no-gutters">
              <div className="col-lg-4 sidebar-widget">
                <div className="sidebar-info-widget">
                  <Link legacyBehavior href="/">
                    <a className="footer-logo">
                      <img
                        src="assets/images/logo/logo-white.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                  <p>Path To a Greener Tomorrow</p>
                  <div className="social-item">
                    <h6>Follow Us</h6>
                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=61565466936339&mibextid=LQQJ4d">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/naturevalley/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/naturevalley.pk/">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 sidebar-widget">
                <div className="sidebar-info-widget">
                  <h4 className="title">Get In Touch</h4>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-map-marker-alt" />
                      Location
                    </h6>
                    <p>27KM Multan Road Lahore Punjab, Pakistan</p>
                  </div>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-envelope-open" />
                      Email Us
                    </h6>
                    <p>
                      <a href="mailto:info@naturevalley.com.pk">
                        info@naturevalley.com.pk
                      </a>
                    </p>
                  </div>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-phone-plus" />
                      Hotline
                    </h6>
                    <p>
                      <a href="tel:+92 332 8194499">+92 332 8194499</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 sidebar-widget">
                <div className="sidebar-info-widget">
                  <h4 className="title">Newsletter</h4>
                  <form onSubmit={handleSubscribe}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit" className="main-btn secondary-btn">
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                  {message && <p style={{ marginTop: "10px", color: "white" }}>{message}</p>}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Sidebar;
