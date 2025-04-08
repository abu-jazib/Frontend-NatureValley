import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Preloader from "@/src/layouts/Preloader"; 
import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import Seo from "@/pages/_seo";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.snow.css"; // or "quill/dist/quill.bubble.css"


const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get blog ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Prevent fetching if ID is undefined

    const fetchBlog = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog");
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);



  // Format createdAt timestamp
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp._seconds) return "Unknown Date";
    return new Date(timestamp._seconds * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  if (loading) {  
    return <Preloader />; // Show preloader while loading  
  } 

  return (
    <Layout header={3} footer={3}>
      <Seo
        title={blog.title}
        description="Get in touch with NatureValley for all your landscaping, gardening, and plant rental needs. We're here to help transform your space."
        keywords={blog.tags ? blog.tags.join(", ") : "landscaping, gardening, plants"}
        ogTitle={`NatureValley - ${blog.title}`}
        ogDescription="Need landscaping or gardening solutions? Reach out to NatureValley for personalized services and expert advice."
        twitterTitle={`NatureValley - ${blog.title}`}
        twitterDescription="Have questions or need landscaping services? Contact NatureValley today for expert advice and professional landscaping solutions."
      />
      <PageBanner pageName={blog.title} />
      {/*====== Start Blog Details section ======*/}

      <section className="blog-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              {/*=== Blog Details Wrapper ===*/}
              <div className="blog-details-wrapper">
                {/*=== Blog Post ===*/}
                <div className="blog-post wow fadeInUp">
                  <div className="post-meta">
                    <span className="author">
                      <a>
                        <span>By</span> {blog.author}
                      </a>
                    </span>
                    <span className="date">{formatDate(blog.createdAt)}</span>
                  </div>

                  <div className="entry-content">
                    <h3 className="title">{blog.title}</h3>

                    {blog.imageUrl && (
                      <div className="block-image">
                        <img src={blog.imageUrl} alt="Post Image" />
                      </div>
                    )}

                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content, { ADD_TAGS: ["ul", "ol", "li"] }) }} />
                  </div>
                </div>
              </div>
            </div>

            {/*=== Sidebar ===*/}
            <div className="col-xl-4 col-lg-12">
              <div className="sidebar-widget-area">
                {/*=== Author Widget ===*/}
                

                {/*=== Banner Widget ===*/}
                <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Looking for expert landscaping solutions!</h3>
                    <p>You’re in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn filled-btn filled-white">Contact Us</a>
                    </Link>
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
                </div>

                {/*=== Tag Widget ===*/}
                
                <div className="sidebar-widget widget-post-author mb-40 wow fadeInUp">
                  <div className="author-img">
                    <img
                      src={blog.authorImageUrl}
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-content text-center">
                    <div className="author-title-box">
                      <h4><b>Author: </b>{blog.author}</h4>
                    </div>
                    <p>
                      {blog.authorDescription || "No description available."}
                    </p>
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget widget-tag-cloud mb-40 wow fadeInUp">
                  <h4 className="widget-title">Tags</h4>
                  {blog.tags && blog.tags.length > 0 ? (
                    blog.tags.map((tag, index) => (
                      <a key={index} href={`#`}>
                        {tag}
                      </a>
                    ))
                  ) : (
                    <p>No tags available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== End Blog Details section ======*/}
      <div class="section-title text-center  mb-50 wow fadeInDown">
            
      </div>
      <Partners />
    </Layout>
  );
};

export default BlogDetails;
