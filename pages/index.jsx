import Counter from "@/src/components/Counter";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Seo from "@/pages/_seo";
import Link from "next/link";
import Slider from "react-slick";
import ReactGA from 'react-ga4'; // Import ReactGA  
const Index = () => {
  return (
    <Layout header={3} footer={3}>
      <Seo
        title="NatureValley - Landscaping for Offices, Homes, and Societies | Online Plants"
        description="Explore NatureValley, your trusted source for landscaping services, plant rentals, and gardening solutions. We provide commercial and residential landscaping, green spaces, and more."
        keywords="landscaping services, online plants, home gardening, office landscaping, society plantation, NatureValley"
        ogTitle="NatureValley - Transforming Landscapes for Homes, Offices & Societies"
        ogDescription="NatureValley offers landscaping and gardening solutions for homes, offices, societies, and plant rental services. Explore our services today."
        twitterTitle="NatureValley - Your Partner in Landscaping and Gardening"
        twitterDescription="NatureValley provides expert landscaping services for homes, offices, and societies. We specialize in plant rentals, green spaces, and more."
      />
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper ======*/}
        <div className="hero-wrapper-three">
          <div className="hero-waves">
            <img src="assets/images/hero/bg-2.png" className="waves one" alt />
            <img src="assets/images/hero/bg.png" className="waves two" alt />
          </div>
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroSliderTwo} className="hero-slider-two">
            {/*====== Single Slider ======*/}
            <div class="single-slider">
                        <div class="image-layer bg_cover" style={{
                            backgroundImage:
                              "url(assets/images/hero/hero_two-slider-1.jpg)",
                          }}></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-10">
                                    
                                    <div class="hero-content text-center">
                                        <span class="sub-title" data-animation="fadeInUp" data-delay=".4s">Welcome To</span>
                                        <h1 data-animation="fadeInDown" data-delay=".5s">NatureValley</h1>
                                        <p data-animation="fadeInUp" data-delay=".6s">Transforming spaces with expert landscaping, creating sustainable beauty for homes, offices, and communities.</p>
                                        <div class="hero-button mb-30" data-animation="fadeInDown" data-delay=".7s">
                                            <a href="/contact" class="main-btn golden-btn mb-10">Get a Quote</a>
                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            {/*====== Single Slider ======*/}
            <div class="single-slider">
                        <div class="image-layer bg_cover" style={{
                            backgroundImage:
                              "url(assets/images/hero/hero_two-slider-2.jpg)",
                          }}></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-10">
                                    
                                    <div class="hero-content text-center">
                                        <span class="sub-title" data-animation="fadeInUp" data-delay=".4s">Welcome To</span>
                                        <h1 data-animation="fadeInDown" data-delay=".5s">NatureValley</h1>
                                        <p data-animation="fadeInUp" data-delay=".6s">Transforming spaces with expert landscaping, creating sustainable beauty for homes, offices, and communities.</p>
                                        <div class="hero-button mb-30" data-animation="fadeInDown" data-delay=".7s">
                                            <a href="contact" class="main-btn golden-btn mb-10">Get a Quote</a>
                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            {/*====== Single Slider ======*/}
            <div class="single-slider">
                        <div class="image-layer bg_cover" style={{
                            backgroundImage:
                              "url(assets/images/hero/hero_two-slider-3.jpg)",
                          }}></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-10">
                                    
                                    <div class="hero-content text-center">
                                        <span class="sub-title" data-animation="fadeInUp" data-delay=".4s">Welcome To</span>
                                        <h1 data-animation="fadeInDown" data-delay=".5s">NatureValley</h1>
                                        <p data-animation="fadeInUp" data-delay=".6s">Transforming spaces with expert landscaping, creating sustainable beauty for homes, offices, and communities.</p>
                                        <div class="hero-button mb-30" data-animation="fadeInDown" data-delay=".7s">
                                            <a href="contact" class="main-btn golden-btn mb-10">Get a Quote</a>
                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-95">  
      <div className="container">  
        <div className="row align-items-xl-center">  
          <div className="col-lg-6">  
            <div className="section-title mb-55 wow fadeInLeft">  
              <span className="sub-title">  
                <i className="flaticon-plant" />  
                Our Commitment to Nature  
              </span>  
              <h2>Nurturing Your Landscape and Green Spaces.</h2>  
            </div>  
          </div>  
          <div className="col-lg-6">  
            <div className="features-content-box mb-55 wow fadeInRight">  
              <p>  
                With 23 years of experience in the nursery and landscaping industry, Nature Valley is your trusted partner for creating and maintaining beautiful green spaces. We specialize in providing comprehensive landscaping services to societies, offices, homes, and green belts, ensuring that every project reflects our commitment to quality and sustainability.  
              </p>  
  
            </div>  
          </div>  
        </div>  
        <div className="row">  
          <div className="col-xl-3 col-md-6 col-sm-12">  
            <div className="features-thumb-item-two mb-40 wow fadeInDown" data-wow-delay=".2s">  
              <div className="thumb">  
                <img src="assets/images/features/features-6.jpg" alt="Image" />  
              </div>  
              <div className="text">  
                <div className="icon">  
                  <i className="flaticon-landscape-1" />  
                </div>  
                <h5 className="title">Comprehensive Landscaping</h5>  
                <p>Expert design, installation, and maintenance for beautiful and functional outdoor spaces.</p>  
              </div>  
            </div>  
          </div>  
          <div className="col-xl-3 col-md-6 col-sm-12">  
            <div className="features-thumb-item-two mb-40 wow fadeInUp" data-wow-delay=".25s">  
              <div className="thumb">  
                <img src="assets/images/features/features-7.jpg" alt="Image" />  
              </div>  
              <div className="text">  
                <div className="icon">  
                  <i className="flaticon-watering-can" />  
                </div>  
                <h5 className="title">Contract-Based Plantation</h5>  
                <p>Tailored plantation and landscaping services for large-scale and specialized projects.</p>  
              </div>  
            </div>  
          </div>  
          <div className="col-xl-3 col-md-6 col-sm-12">  
            <div className="features-thumb-item-two mb-40 wow fadeInDown" data-wow-delay=".3s">  
              <div className="thumb">  
                <img src="assets/images/features/features-8.jpg" alt="Image" />  
              </div>  
              <div className="text">  
                <div className="icon">  
                  <i className="flaticon-lawnmower" />  
                </div>  
                <h5 className="title">Plant Sales</h5>  
                <p>Flexible plant rental options to enhance your office or event with vibrant greenery.</p>  
              </div>  
            </div>  
          </div>  
          <div className="col-xl-3 col-md-6 col-sm-12">  
            <div className="features-thumb-item-two mb-40 wow fadeInUp" data-wow-delay=".35s">  
              <div className="thumb">  
                <img src="assets/images/features/features-9.jpg" alt="Image" />  
              </div>  
              <div className="text">  
                <div className="icon">  
                  <i className="flaticon-spider-plant" />  
                </div>  
                <h5 className="title">Green Belt & Public Space Development</h5>  
                <p>Creating and maintaining sustainable green spaces for communities and public areas.</p>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-bg-section">  
      {/*====== About BG ======*/}  
      <div  
        className="about-bg bg_cover wow fadeInLeft"  
        style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}  
      ></div>  
      <div className="container">  
        <div className="row align-items-center justify-content-end">  
          <div className="col-lg-6">  
            {/*====== About Content Box ======*/}  
            <div className="about-two_content-box pb-80 wow fadeInRight">  
              <div className="section-title">  
                <div className="section-title mb-50">  
                  <span className="sub-title">  
                    <i className="flaticon-plant"></i>About NatureValley  
                  </span>  
                  <h2>We Serve Prestigious Clients with Expert Care</h2>  
                </div>  
                <p className="mb-45">  
                  We’ve proudly served prestigious clients like Fazia Housing Society, LDA, Evercare Hospital, and PHA, delivering tailored solutions that meet their unique needs. Our experienced team of horticulturists, landscape architects, and skilled laborers work closely with each client to ensure that every project reflects our commitment to quality, sustainability, and customer satisfaction.  
                </p>  
                <div className="about-inner-content d-flex justify-content-between">  
                  <div className="inner-content">  
                    <ul className="check-style-one mb-45">  
                      <li><i className="far fa-check"></i>Trusted by top Clients.</li>  
                      <li><i className="far fa-check"></i>Over two decades of Expertise.</li>  
                    </ul>    
                  </div>  
                  <div className="experience-box-two">  
                    <h2 className="number">  
                      <Counter end={20} />+  
                    </h2>  
                    <h6>Years Of Experience</h6>  
                    <Link legacyBehavior href="/about">  
                      <a className="icon-btn">  
                        <i className="far fa-arrow-right"></i>  
                      </a>  
                    </Link>  
                  </div>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>
      {/*====== End About Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-bgc-section p-r z-1 main-bg pt-150 pb-70">  
      <div className="shape shape-one">  
        <span>  
          <img src="assets/images/shape/leaf-1.png" alt="Leaf Png" />  
        </span>  
      </div>  
      <div className="shape shape-two">  
        <span>  
          <img src="assets/images/shape/leaf-2.png" alt="Leaf Png" />  
        </span>  
      </div>  
      <div className="shape shape-three">  
        <span>  
          <img src="assets/images/shape/leaf-3.png" alt="Leaf Png" />  
        </span>  
      </div>  
      <div className="container">  
        <div className="row justify-content-center">  
          <div className="col-xl-9 col-lg-12">  
            {/*====== Section Title ======*/}  
            <div className="section-title text-white text-center mb-50 wow fadeInDown">  
              <span className="sub-title">  
                <i className="flaticon-plant" />  
                Our Services  
              </span>  
            </div>  
          </div>  
        </div>  
        <div className="row">  
          <div className="col-xl-4 col-lg-6 col-sm-12">  
            {/*====== Service Item ======*/}  
            <div className="single-service-item mb-30 wow fadeInUp" data-wow-delay=".2s">  
              <div className="service-info">  
                <div className="shape icon-shape">  
                  <i className="flaticon-agriculture" />  
                </div>  
                <div className="icon">  
                  <i className="flaticon-agriculture" />  
                </div>  
                <h4 className="title">  
                  <Link legacyBehavior href="/service-Society-Plantation">  
                    <a>Society Plantation</a>  
                  </Link>  
                </h4>  
              </div>  
              <div className="service-img">  
                <Link legacyBehavior href="/service-Society-Plantation">  
                  <a className="icon-btn">  
                    <i className="far fa-arrow-right" />  
                  </a>  
                </Link>  
                <Link legacyBehavior href="/service-Society-Plantation">  
                  <a>  
                    <img src="assets/images/service/sv-1.jpg" alt="Service Image" />  
                  </a>  
                </Link>  
              </div>  
            </div>  
          </div>  
          <div className="col-xl-4 col-lg-6 col-sm-12">  
            {/*====== Service Item ======*/}  
            <div className="single-service-item mb-30 wow fadeInDown" data-wow-delay=".25s">  
              <div className="service-info">  
                <div className="shape icon-shape">  
                  <i className="flaticon-field-1" />  
                </div>  
                <div className="icon">  
                  <i className="flaticon-field-1" />  
                </div>  
                <h4 className="title">  
                  <Link legacyBehavior href="/service-GreenBelt-Development">  
                    <a>Green Belt Development</a>  
                  </Link>  
                </h4>  
              </div>  
              <div className="service-img">  
                <Link legacyBehavior href="/service-GreenBelt-Development">  
                  <a className="icon-btn">  
                    <i className="far fa-arrow-right" />  
                  </a>  
                </Link>  
                <Link legacyBehavior href="/service-GreenBelt-Development">  
                  <a>  
                    <img src="assets/images/service/sv-2.jpg" alt="Service Image" />  
                  </a>  
                </Link>  
              </div>  
            </div>  
          </div>  
          <div className="col-xl-4 col-lg-6 col-sm-12">  
            {/*====== Service Item ======*/}  
            <div className="single-service-item mb-30 wow fadeInUp" data-wow-delay=".3s">  
              <div className="service-info">  
                <div className="shape icon-shape">  
                  <i className="flaticon-farming" />  
                </div>  
                <div className="icon">  
                  <i className="flaticon-farming" />  
                </div>  
                <h4 className="title">  
                  <Link legacyBehavior href="/service-Office-Landscaping">  
                    <a>Office Landscaping</a>  
                  </Link>  
                </h4>  
              </div>  
              <div className="service-img">  
                <Link legacyBehavior href="/service-Office-Landscaping">  
                  <a className="icon-btn">  
                    <i className="far fa-arrow-right" />  
                  </a>  
                </Link>  
                <Link legacyBehavior href="/service-Office-Landscaping">  
                  <a>  
                    <img src="assets/images/service/sv-3.jpg" alt="Service Image" />  
                  </a>  
                </Link>  
              </div>  
            </div>  
          </div>  
          <div className="col-xl-4 col-lg-6 col-sm-12">  
            {/*====== Service Item ======*/}  
            <div className="single-service-item mb-30 wow fadeInDown" data-wow-delay=".35s">  
              <div className="service-info">  
                <div className="shape icon-shape">  
                  <i className="flaticon-park" />  
                </div>  
                <div className="icon">  
                  <i className="flaticon-park" />  
                </div>  
                <h4 className="title">  
                  <Link legacyBehavior href="/service-Commercial-Landscaping">  
                    <a>Commercial Landscaping</a>  
                  </Link>  
                </h4>  
              </div>  
              <div className="service-img">  
                <Link legacyBehavior href="/service-Commercial-Landscaping">  
                  <a className="icon-btn">  
                    <i className="far fa-arrow-right" />  
                  </a>  
                </Link>  
                <Link legacyBehavior href="/service-Commercial-Landscaping">  
                  <a>  
                    <img src="assets/images/service/sv-4.jpg" alt="Service Image" />  
                  </a>  
                </Link>  
              </div>  
            </div>  
          </div>  
          <div className="col-xl-4 col-lg-6 col-sm-12">  
            {/*====== Service Item ======*/}  
            <div className="single-service-item mb-30 wow fadeInUp" data-wow-delay=".4s">  
              <div className="service-info">  
                <div className="shape icon-shape">  
                  <i className="flaticon-rake" />  
                </div>  
                <div className="icon">  
                  <i className="flaticon-rake" />  
                </div>  
                <h4 className="title">  
                  <Link legacyBehavior href="/service-Residential-Landscaping">  
                    <a>Residential Landscaping</a>  
                  </Link>  
                </h4>  
              </div>  
              <div className="service-img">  
                <Link legacyBehavior href="/service-Residential-Landscaping">  
                  <a className="icon-btn">  
                    <i className="far fa-arrow-right" />  
                  </a>  
                </Link>  
                <Link legacyBehavior href="/service-Residential-Landscaping">  
                  <a>  
                    <img src="assets/images/service/sv-5.jpg" alt="Service Image" />  
                  </a>  
                </Link>  
              </div>  
            </div>  
          </div>  
          <div className="col-xl-4 col-lg-6 col-sm-12">  
            {/*====== Service Item ======*/}  
            <div className="single-service-item mb-30 wow fadeInDown" data-wow-delay=".45s">  
              <div className="service-info">  
                <div className="shape icon-shape">  
                  <i className="flaticon-growth-1" />  
                </div>  
                <div className="icon">  
                  <i className="flaticon-growth-1" />  
                </div>  
                <h4 className="title">  
                  <Link legacyBehavior href="/service-Plant-Nursery">  
                    <a>Plant Sales and Nursery</a>  
                  </Link>  
                </h4>  
              </div>  
              <div className="service-img">  
                <Link legacyBehavior href="/service-Plant-Nursery">  
                  <a className="icon-btn">  
                    <i className="far fa-arrow-right" />  
                  </a>  
                </Link>  
                <Link legacyBehavior href="/service-Plant-Nursery">  
                  <a>  
                    <img src="assets/images/service/sv-6.jpg" alt="Service Image" />  
                  </a>  
                </Link>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Skills Section  ======*/}
      {/*====== End Skills Section  ======*/}
      {/*====== Start CTA Section ======*/}
      {/*====== End CTA Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/*====== End Gallery Section ======*/}
      {/*====== Start Pricing Section ======*/}
      {/*====== End Pricing Section ======*/}
      {/*====== Start Testimonial Section  ======*/}
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start Blog Section  ======*/}
      {/*====== End Blog Section  ======*/}
      {/*====== Start Partners Section ======*/}
      <div class="section-title text-center  mb-50 wow fadeInDown">

      </div>
      <Partners />
      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default Index;
