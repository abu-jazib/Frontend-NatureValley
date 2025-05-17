import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Seo from "@/pages/_seo";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Team = () => {
  return (
    
    <Layout header={3} footer={3}>
      <PageBanner pageName={"Meet Our Founders"} />
      
      {/*====== End Skills Section  ======*/}
      {/*====== Start CTA Section  ======*/}
      {/*====== End CTA Section  ======*/}
      {/*====== Start Team Section  ======*/}
      <section className="team-section pt-125 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              {/*====== Section-title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Team
                </span>
                <h2>Meet Our Dedicated Experts</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                      <a>Abdul Ghaffar</a>

                  </h3>
                  {/* <p>Senior Gardener</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/team-5.jpg" alt="Team Image" />
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    Muhammad Akbar Shahbaz
                  </h3>
                  {/* <p>Senior Gardener</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInLeft">
                <div className="member-img">
                  <img src="assets/images/team/team-4.jpg" alt="Team Image" />
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    Muhammad Afzal
                  </h3>
                  {/* <p>Senior Gardener</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-6.jpg" alt="Team Image" />
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    Abdul Manan
                  </h3>
                  {/* <p>Senior Gardener</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInRight">
                <div className="member-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                      Abu Jazib
                  </h3>
                  {/* <p>Senior Gardener</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*====== Single Team Item ======*/}
            </div>
          </div>
        </div>
      </section>
      
      <Partners />
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title:"NatureValley - Meet Our Expert Team | Landscaping and Gardening Services",
        description:"Meet the team behind NatureValley. Our expert landscapers and gardening professionals are dedicated to transforming your outdoor spaces.",
        keywords:"landscaping team, expert landscapers, gardening professionals, landscaping services, NatureValley team",
        ogTitle:"NatureValley - Meet Our Landscaping and Gardening Experts",
        ogDescription:"Learn more about the skilled professionals at NatureValley who are transforming landscapes and providing exceptional gardening services.",
        twitterTitle:"NatureValley - Meet Our Expert Team",
        twitterDescription:"Discover the talented team at NatureValley. Our experts are passionate about transforming landscapes and providing top-tier gardening services.",
        ogImage:"https://naturevalley.blob.core.windows.net/assets/og%20image%20.jpg"  
      },
    },
  };
}
export default Team;
