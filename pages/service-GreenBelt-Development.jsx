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
        title="NatureValley - Greenbelt Development Services for Urban Spaces"
        description="Create lush greenbelt areas with NatureValley’s greenbelt development services. We specialize in planting and maintaining green spaces in urban environments."
        keywords="greenbelt development, urban landscaping, green spaces, environmental landscaping, city landscaping"
        ogTitle="NatureValley - Greenbelt Development Experts"
        ogDescription="NatureValley provides greenbelt development services to enhance urban spaces with lush landscaping and sustainable green areas."
        twitterTitle="NatureValley - Greenbelt Development for Cities"
        twitterDescription="We develop greenbelt areas in urban spaces, making your city environment greener and more sustainable."
      />
      <PageBanner pageName={"GreenBelt Development"} />  
      {/*====== Start Service Details section ======*/}  
  
      <section className="service-details-section pt-100">  
        <div className="container">  
          <div className="row">  
          <div class="col-xl-8 col-lg-7">
                        <div class="service-info-wrapper pr-lg-40 wow fadeInDown">
                            <h2 class="title">Green Belt Development</h2>
                            <p>Nature Valley specializes in designing and maintaining sustainable green belts that enhance the environmental and aesthetic value of urban areas. Our Green Belt Development service focuses on creating lush, eco-friendly spaces that improve air quality, reduce noise pollution, and provide a refreshing environment for communities. We carefully plan and execute projects for public spaces, highways, parks, and residential communities, ensuring long-term sustainability through proper plant selection, soil management, and irrigation systems. Let us help you contribute to a greener, healthier future with our expertly crafted green belts.</p>
                            <div class="block-image wow fadeInDown">
                              <img src="assets/images/service/GreenBelt/sv-2.jpg" alt="Service Image"/></div>
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
                                    <div class="block-image wow fadeInLeft"><img src="assets/images/service/GreenBelt/sv-3.jpg" alt="Service Image"/></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="block-image wow fadeInRight"><img src="assets/images/service/GreenBelt/sv-4.jpg" alt="Service Image"/></div>
                                </div>
                            </div>
                            <div class="block-image wow fadeInDown"><img src="assets/images/service/GreenBelt/sv-1.jpg" alt="Service Image"/></div>
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