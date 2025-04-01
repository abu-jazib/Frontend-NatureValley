import PageBanner from "@/src/components/PageBanner";  
import Partners from "@/src/components/Partners";  
import Layout from "@/src/layouts/Layout";  
import Link from "next/link";  
import Seo from "@/pages/_seo";
  
const ServiceDetails = () => {  
  return (  
    <Layout> 
      <Seo
        title="NatureValley - Commercial Landscaping Services | Office and Business Landscaping"
        description="Transform your commercial spaces with NatureValley’s expert landscaping services. We offer office landscaping, green spaces, and maintenance for businesses."
        keywords="commercial landscaping, office landscaping, business landscaping, landscaping services, professional landscaping"
        ogTitle="NatureValley - Expert Commercial Landscaping Services"
        ogDescription="Discover NatureValley’s commercial landscaping services. We specialize in office landscaping, green spaces, and creating beautiful environments for businesses."
        twitterTitle="NatureValley - Commercial Landscaping Experts"
        twitterDescription="Transform your commercial space with our expert landscaping services. Contact us for office landscaping and more."
      /> 
      <PageBanner pageName={"Commercial Landscaping"} />  
      {/*====== Start Service Details section ======*/}  
  
      <section className="service-details-section pt-100">  
        <div className="container">  
          <div className="row">  
            <div className="col-xl-8 col-lg-7">  
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">  
                <h2 className="title">Commercial Landscaping</h2>  
                <p>  
                  Enhance your business environment with Nature Valley’s expert  
                  commercial landscaping services. We specialize in designing,  
                  installing, and maintaining green spaces that not only elevate  
                  the aesthetic appeal of your property but also create a  
                  welcoming and professional atmosphere. From corporate offices  
                  to retail complexes, we tailor our solutions to meet your  
                  specific needs, ensuring that your landscape reflects your  
                  brand’s image and commitment to sustainability.  
                </p>  
                <div className="block-image wow fadeInDown">  
                  <img  
                    src="assets/images/service/Comercial_LA/single-service-1.jpg"  
                    alt="Service Image"  
                  />  
                </div>  
                <h3>Why Choose Us?</h3>  
                <p>  
                  With 23 years of experience in the nursery and landscaping  
                  industry, Nature Valley is your trusted partner for creating  
                  and maintaining beautiful green spaces. We specialize in  
                  providing comprehensive landscaping services to societies,  
                  offices, homes, and green belts, ensuring that every project  
                  reflects our commitment to quality and sustainability.  
                </p>  
                <ul className="check-style-one mb-60">  
                  <li>  
                    <i className="far fa-check"></i>Over two decades of expertise  
                  </li>  
                  <li>  
                    <i className="far fa-check"></i>  
                    Serving prestigious clients like Fazia Housing Society, LDA,  
                    Evercare Hospital, PHA, and many more  
                  </li>  
                  <li>  
                    <i className="far fa-check"></i>  
                    Two convenient locations: a fully stocked warehouse and a  
                    thriving nursery  
                  </li>  
                  <li>  
                    <i className="far fa-check"></i>Awards Winning & Professional  
                    Team Member  
                  </li>  
                </ul>  
                <div className="row">  
                  <div className="col-md-6">  
                    <div className="block-image wow fadeInLeft">  
                      <img  
                        src="assets/images/service/Comercial_LA/single-service-2.jpg"  
                        alt="Service Image"  
                      />  
                    </div>  
                  </div>  
                  <div className="col-md-6">  
                    <div className="block-image wow fadeInRight">  
                      <img  
                        src="assets/images/service/Comercial_LA/single-service-3.jpg"  
                        alt="Service Image"  
                      />  
                    </div>  
                  </div>  
                </div>  
                <div className="block-image wow fadeInDown">  
                  <img  
                    src="assets/images/service/Comercial_LA/single-service-4.jpg"  
                    alt="Service Image"  
                  />  
                </div>  
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