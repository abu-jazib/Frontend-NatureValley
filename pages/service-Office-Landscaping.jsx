import PageBanner from "@/src/components/PageBanner";  
import Partners from "@/src/components/Partners";  
import Layout from "@/src/layouts/Layout";  
import Link from "next/link";  
import Seo from "@/pages/_seo";
  
const ServiceDetails = () => {  
  return (  
    <Layout>
      <Seo
  title="NatureValley - Office Landscaping Services | Create a Green Office Environment"
  description="Enhance your office's ambiance with NatureValley's office landscaping services. From indoor plants to exterior green spaces, we design and maintain your office garden."
  keywords="office landscaping, office plants, indoor plants, exterior landscaping, workplace green spaces"
  ogTitle="NatureValley - Office Landscaping Experts"
  ogDescription="Make your office a green and productive space with NatureValley’s office landscaping services. We specialize in interior and exterior office gardens."
  twitterTitle="NatureValley - Green Office Landscaping"
  twitterDescription="Transform your office into a green, refreshing space with our expert office landscaping services."
/>  
      <PageBanner pageName={"Office Landscaping"} />  
      {/*====== Start Service Details section ======*/}  
  
      <section className="service-details-section pt-100">  
        <div className="container">  
          <div className="row">  
          <div class="col-xl-8 col-lg-7">
                       
                        <div class="service-info-wrapper pr-lg-40 wow fadeInDown">
                            <h2 class="title">Office Landscaping</h2>
                            <p>nhance your office environment with Nature Valley’s professional Office Landscaping services. We create modern, green spaces that not only boost the aesthetic appeal of your workplace but also promote a healthier, more productive atmosphere for employees and visitors. From outdoor gardens to indoor plant arrangements, our expert team tailors landscaping solutions to reflect your brand’s image while improving air quality and reducing stress. Whether it’s a corporate campus or a small office, we provide customized designs and maintenance to keep your business space vibrant, welcoming, and eco-friendly.</p>
                            <div class="block-image wow fadeInDown"><img src="assets/images/service/office_LA/sv1.jpg" alt="Service Image"/></div>
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
                                    <div class="block-image wow fadeInLeft"><img src="assets/images/service/office_LA/sv2.jpg" alt="Service Image"/></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="block-image wow fadeInRight"><img src="assets/images/service/office_LA/sv3.jpg" alt="Service Image"/></div>
                                </div>
                            </div>
                            <div class="block-image wow fadeInDown"><img src="assets/images/service/office_LA/sv4.jpg" alt="Service Image"/></div>
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
                    <form onSubmit={(e) => e.preventDefault()}>  
                      <div className="form_group">  
                        <input  
                          type="email"  
                          className="form_control"  
                          placeholder="Email Address"  
                          name="email"  
                          required  
                        />  
                      </div>  
                      <div className="form_group">  
                        <button className="main-btn primary-btn">  
                          Subscribe Now  
                        </button>  
                      </div>  
                    </form>  
                  </div>  
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