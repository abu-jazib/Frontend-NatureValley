import PageBanner from "@/src/components/PageBanner"; 
import { useEffect, useState } from "react";  
import Partners from "@/src/components/Partners";  
import Layout from "@/src/layouts/Layout";  
import Link from "next/link";  
import Seo from "@/pages/_seo";
  
const ServiceDetails = () => { 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
    const handleSubscribe = async (e) => {
      e.preventDefault();
      setMessage(""); // Reset message

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscribe`, {
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
    <Layout header={3} footer={3}> 
      <Seo
  title="NatureValley - Residential Landscaping Services | Beautify Your Home's Outdoors"
  description="Create a beautiful garden with Nature Valley's residential landscaping services. We specialize in designing, planting, and maintaining residential landscapes for your home."
  keywords="residential landscaping, home gardening, garden design, landscape services, backyard landscaping"
  ogTitle="NatureValley - Residential Landscaping for Your Home"
  ogDescription="Enhance your home’s outdoor beauty with NatureValley’s residential landscaping services. From garden design to maintenance, we do it all."
  twitterTitle="NatureValley - Residential Landscaping Experts"
  twitterDescription="Make your home’s outdoors beautiful with expert residential landscaping services from NatureValley."
/>
      <PageBanner pageName={"Residential Landscaping"} />  
      {/*====== Start Service Details section ======*/}  
  
      <section className="service-details-section pt-100">  
        <div className="container">  
          <div className="row">  
          <div class="col-xl-8 col-lg-7">
                       
                        <div class="service-info-wrapper pr-lg-40 wow fadeInDown">
                            <h2 class="title">Residential Landscaping</h2>
                            <p>Transform your home’s outdoor spaces with Nature Valley’s Residential Landscaping services. We create personalized landscape designs that blend beauty, functionality, and sustainability, turning your garden or yard into a peaceful retreat. Whether you're looking for elegant flower beds, lush lawns, or a serene water feature, our expert team ensures that every detail aligns with your vision and enhances your home’s curb appeal. From initial design to ongoing maintenance, we provide a full range of services to keep your landscape vibrant, healthy, and inviting all year round.</p>
                            <div class="block-image wow fadeInDown"><img src="assets/images/service/RA_LA/sv1.jpg" alt="Service Image"/></div>
                            <h3>Why Choose Us?</h3>
                            <p>With 23 years of experience in the nursery and landscaping industry, Nature Valley is your trusted partner for creating and maintaining beautiful green spaces. We specialize in providing comprehensive landscaping services to societies, offices, homes, and green belts, ensuring that every project reflects our commitment to quality and sustainability.</p>
                            <ul class="check-style-one mb-60">
                                <li><i class="far fa-check"></i>Over two decades of expertise</li>
                                <li><i class="far fa-check"></i>Serving prestigious clients like Fazia Housing Society, LDA, Evercare Hospital, PHA, and many more</li>
                                <li><i class="far fa-check"></i>Two convenient locations: a fully stocked warehouse and a thriving nursery</li>
                                <li><i class="far fa-check"></i>Awards Winning & Professional Team Member</li>
                            </ul>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="block-image wow fadeInLeft"><img src="assets/images/service/RA_LA/sv2.jpg" alt="Service Image"/></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="block-image wow fadeInRight"><img src="assets/images/service/RA_LA/sv3.jpg" alt="Service Image"/></div>
                                </div>
                            </div>
                            <div class="block-image wow fadeInDown"><img src="assets/images/service/RA_LA/sv4.jpg" alt="Service Image"/></div>
                        </div>
                    </div>
            <div className="col-xl-4 col-lg-5">  
              {/*====== Sidebar Widget Area ======*/}  
              <div className="sidebar-widget-area">  
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">  
                  <div className="banner-content text-white">  
                    <h3 className="title">Looking for expert landscaping solutions!</h3>  
                    <p>You’re in the right place</p>  
                    <Link legacyBehavior href="/contact">  
                      <a className="main-btn filled-btn filled-white">Contact Us</a>  
                    </Link>  
                    <img  
                      src="assets/images/sidebar/b-w-1.png"  
                      alt="Banner Image"  
                    />  
                  </div>  
                </div>  
                <div className="sidebar-widget widget-newsletter gray-bg mb-30 wow fadeInUp">
                    <h4 className="widget-title">Newsletter</h4>
                    <div className="sidebar-content"> 
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
                          <div className="form_group">
                            <button type="submit" className="main-btn primary-btn">
                              Subscribe Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {message && <p style={{ marginTop: "10px", color: "0B3D2C" }}>{message}</p>}
                  </div>   
              </div>  
            </div>  
          </div>  
          {/*====== Post Navigation ======*/}   
        </div>  
      </section>  
      {/*====== End Service Details section ======*/}  
  
      <Partners />  
    </Layout>  
  );  
};  
  
export default ServiceDetails;  