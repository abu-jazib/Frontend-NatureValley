import PageBanner from "@/src/components/PageBanner";  
import Partners from "@/src/components/Partners";  
import Layout from "@/src/layouts/Layout";  
import Seo from "@/pages/_seo";  
import Link from "next/link";  
import { useState } from "react";  
  
const Contact = () => {  
  const [formData, setFormData] = useState({  
    name: "",  
    email: "",  
    number: "",  
    subject: "",  
    message: "",  
  });  
  
  const [statusMessage, setStatusMessage] = useState("");  
  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({  
      ...formData,  
      [name]: value,  
    });  
  };  
  
  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {  
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/forms`, {  
        method: "POST",  
        headers: {  
          "Content-Type": "application/json",  
        },  
        body: JSON.stringify(formData),  
      });
      
  
      if (response.ok) {  
        setStatusMessage("Message sent successfully!");  
        // Clear the form if needed  
        setFormData({  
          name: "",  
          email: "",  
          number: "",  
          subject: "",  
          message: "",  
        });  
      } else {  
        setStatusMessage("Failed to send the message. Please try again.");  
      }  
    } catch (error) {  
      console.error("Error:", error);  
      setStatusMessage("An error occurred. Please try again.");  
    }  
  };  
  
  return (  
    <Layout header={3} footer={3}>  
      <PageBanner pageName="Contact Us" />  
      {/*====== Start Contact Info section ======*/}  
  
      <section className="contact-info-section pt-100">  
        <div className="container">  
          <div className="contact-info-wrapper wow fadeInUp">  
            <div className="row no-gutters justify-content-center">  
              <div className="col-lg-4 col-md-6">  
                {/*====== Contact Info Item ======*/}  
  
                <div className="contact-info-item text-center">  
                  <div className="icon">  
                    <img src="assets/images/icon/icon-1.png" alt="icon" />  
                  </div>  
                  <div className="info">  
                    <span className="title">Location</span>  
                    <h6>27KM Multan Road Lahore, Punjab, Pakistan</h6>  
                  </div>  
                </div>  
              </div>  
              <div className="col-lg-4 col-md-6">  
                {/*====== Contact Info Item ======*/}  
  
                <div className="contact-info-item text-center">  
                  <div className="icon">  
                    <img src="assets/images/icon/icon-2.png" alt="icon" />  
                  </div>  
                  <div className="info">  
                    <span className="title">Email Address</span>  
                    <h6>  
                      <a href="mailto:info@naturevalley.com.pk">info@naturevalley.com.pk</a>  
                    </h6>  
                  </div>  
                </div>  
              </div>  
              <div className="col-lg-4 col-md-6">  
                {/*====== Contact Info Item ======*/}  
  
                <div className="contact-info-item text-center">  
                  <div className="icon">  
                    <img src="assets/images/icon/icon-3.png" alt="icon" />  
                  </div>  
                  <div className="info">  
                    <span className="title">Phone No</span>  
                    <h6>  
                      <a href="tel:+92 332 8194499">+92 332 8194499</a>  
                    </h6>  
                  </div>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>  
      {/*====== End Contact Info section ======*/}  
  
      {/*====== Start Contact section ======*/}  
  
      <section className="contact-section pt-95 pb-50">  
        <div className="container">  
          <div className="row">  
            <div className="col-lg-5">  
              {/*====== Section-title ======*/}  
  
              <div className="section-title wow fadeInRight mb-50">  
                <span className="sub-title">  
                  <i className="flaticon-plant" />  
                  Contact Us  
                </span>  
                <h2>Ready to Work With Us</h2>  
              </div>  
            </div>  
          </div>  
          <div className="contact-wrapper">  
            <div className="row">  
              <div className="col-lg-6">  
                {/*=== Map Box ===*/}  
                <div className="map-box wow fadeInLeft mb-50">  
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8109678118117!2d74.16589577429887!3d31.41933385212925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffeb345abee3%3A0xc1a14710eb24feff!2sNature%20Valley!5e0!3m2!1sen!2s!4v1725480618679!5m2!1sen!2s"></iframe>  
                </div>  
              </div>  
              <div className="col-lg-6">  
                {/*====== Contact Form Wrapper ======*/}  
  
                <div className="contact-form-wrapper mb-50 wow fadeInRight">  
                  <form onSubmit={handleSubmit} className="contact-form">  
                    <div className="form_group">  
                      <label>  
                        <i className="far fa-user" />  
                      </label>  
                      <input  
                        type="text"  
                        className="form_control"  
                        placeholder="Full Name"  
                        name="name"  
                        value={formData.name}  
                        onChange={handleChange}  
                        required  
                      />  
                    </div>  
                    <div className="form_group">  
                      <label>  
                        <i className="far fa-envelope" />  
                      </label>  
                      <input  
                        type="email"  
                        className="form_control"  
                        placeholder="Email Address"  
                        name="email"  
                        value={formData.email}  
                        onChange={handleChange}  
                        required  
                      />  
                    </div>  
                    <div className="form_group">  
                      <label>  
                        <i className="far fa-phone-plus" />  
                      </label>  
                      <input  
                        type="text"  
                        className="form_control"  
                        placeholder="Phone Number"  
                        name="number"  
                        value={formData.number}  
                        onChange={handleChange}  
                        required  
                      />  
                    </div>  
                    <div className="form_group">  
                      <label>  
                        <i className="far fa-map-marker-exclamation" />  
                      </label>  
                      <input  
                        type="text"  
                        className="form_control"  
                        placeholder="Subject"  
                        name="subject"  
                        value={formData.subject}  
                        onChange={handleChange}  
                        required  
                      />  
                    </div>  
                    <div className="form_group">  
                      <label>  
                        <i className="far fa-pen-fancy" />  
                      </label>  
                      <textarea  
                        className="form_control"  
                        rows={3}  
                        placeholder="Message"  
                        name="message"  
                        value={formData.message}  
                        onChange={handleChange}  
                        required  
                      />  
                    </div>  
                    <div className="form_group">  
                      <button type="submit" className="main-btn primary-btn">  
                        Send Message  
                      </button>  
                    </div>  
                  </form>  
                  {statusMessage && <p className="status-message">{statusMessage}</p>}  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>  
      {/*====== End Contact section ======*/}  
  
      {/*====== Start Info Section ======*/}  
  
      {/*====== End Info Section ======*/}  
  
      {/*====== Start Partners Section ======*/}  
  
      <Partners />  
    </Layout>  
  );  
};  

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title:"NatureValley - Contact Us for Landscaping and Gardening Services",  
        description:"Get in touch with NatureValley for all your landscaping, gardening, and plant rental needs. We're here to help transform your space.",  
        keywords:"contact NatureValley, landscaping services contact, gardening services, office landscaping, home gardening",  
        ogTitle:"NatureValley - Contact Us for Landscaping & Gardening Services",  
        ogDescription:"Need landscaping or gardening solutions? Reach out to NatureValley for personalized services and expert advice.",  
        twitterTitle:"NatureValley - Contact Us Today",  
        twitterDescription:"Have questions or need landscaping services? Contact NatureValley today for expert advice and professional landscaping solutions.",
        ogImage:"https://naturevalley.blob.core.windows.net/assets/og%20image%20.jpg"   
      },
    },
  };
}
  
export default Contact;  