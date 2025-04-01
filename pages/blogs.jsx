import { useEffect, useState } from "react";  
import Preloader from "@/src/layouts/Preloader";  
import PageBanner from "@/src/components/PageBanner";  
import Partners from "@/src/components/Partners";  
import Layout from "@/src/layouts/Layout";  
import Link from "next/link";  
import Seo from "@/pages/_seo";  
  
const BlogStandard = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");  
  const [blogs, setBlogs] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);  
  const [loading, setLoading] = useState(true); // Loading state for blogs  
  const blogsPerPage = 5; // Number of blogs to display per page  

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
  
  useEffect(() => {  
    const fetchBlogs = async () => {  
      try {  
        const response = await fetch("http://localhost:5000/api/blogs");  
        const data = await response.json();  
        setBlogs(data.blogs); // Assuming the response structure as provided  
      } catch (error) {  
        console.error("Error fetching blogs:", error);  
      } finally {  
        setLoading(false); // Set loading to false once data is fetched  
      }  
    };   
  
    fetchBlogs();  
  }, []);  
  
  // Calculate the index of the last blog on the current page  
  const indexOfLastBlog = currentPage * blogsPerPage;  
  // Calculate the index of the first blog on the current page  
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;  
  // Get the current blogs to display  
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);  
  
  // Calculate the total number of pages  
  const totalPages = Math.ceil(blogs.length / blogsPerPage);  
  
  // Function to handle page change  
  const handlePageChange = (pageNumber) => {  
    setCurrentPage(pageNumber);  
  };  
  
  // Functions for next and previous page  
  const handleNextPage = () => {  
    if (currentPage < totalPages) {  
      setCurrentPage(currentPage + 1);  
    }  
  };  
  
  const handlePreviousPage = () => {  
    if (currentPage > 1) {  
      setCurrentPage(currentPage - 1);  
    }  
  };  

  if (loading) {  
    return <Preloader />; // Show preloader while loading  
  } 
  
  return (  
    <Layout>  
      <Seo  
        title="NatureValley Blogs - Expert Tips on Gardening & Landscaping"  
        description="Explore expert articles on indoor plants, landscaping ideas, and gardening tips. Stay updated with the latest trends from NatureValley."  
        keywords="NatureValley blog, gardening tips, landscaping ideas, indoor plants care, sustainable gardening"  
        ogTitle="NatureValley Blogs - Your Guide to Better Gardening & Landscaping"  
        ogDescription="Discover expert advice, plant care guides, and landscaping inspiration on the NatureValley blog."  
        twitterTitle="NatureValley Blogs - Gardening & Landscaping Tips"  
        twitterDescription="Get the best gardening and landscaping tips from NatureValley. Read expert articles today!"  
      />  
      <PageBanner pageName={"Blogs"} />  
      <section className="blog-standard-section pt-100 pb-60">  
        <div className="container">  
          <div className="row">  
            <div className="col-xl-8 col-lg-7">  
              <div className="blog-standard-wrapper">  
                {currentBlogs.map((blog) => (  
                  <div key={blog.id} className="single-blog-post-three mb-30 wow fadeInUp">  
                    <div className="post-thumbnail">  
                      <img src={blog.imageUrl} alt="Post Image" />  
                    </div>  
                    <div className="entry-content">  
                      <div className="post-meta">  
                        <span className="date">  
                          <Link legacyBehavior href={`/blog-details?id=${blog.id}`}>  
                            <a>{new Date(blog.createdAt._seconds * 1000).toLocaleDateString()}</a>  
                          </Link>  
                        </span>  
                      </div>  
                      <h3 className="title">  
                        <Link legacyBehavior href={`/blog-details?id=${blog.id}`}>  
                          <a>{blog.title}</a>  
                        </Link>  
                      </h3>  
                      <div className="author">  
                        <img src={blog.authorImageUrl} alt="Author Image" />  
                        <h6>  
                          <span>By</span>  
                          <Link legacyBehavior href={`/blog-details?id=${blog.id}`}>  
                            <a>{blog.author}</a>  
                          </Link>  
                        </h6>  
                      </div>  
                    </div>  
                  </div>  
                ))}  
                <ul className="gadden-pagination mb-40 wow fadeInUp" style={{ justifyContent: 'center', display: 'flex' }}>  
                  <li>  
                    <a href="#" onClick={(e) => { e.preventDefault(); handlePreviousPage(); }}>  
                      <i className="far fa-angle-double-left" />  
                    </a>  
                  </li>  
                  {Array.from({ length: totalPages }, (_, index) => (  
                    <li key={index + 1}>  
                      <a  
                        href="#"  
                        onClick={(e) => { e.preventDefault(); handlePageChange(index + 1); }}  
                        className={currentPage === index + 1 ? 'active' : ''}  
                      >  
                        {index + 1}  
                      </a>  
                    </li>  
                  ))}  
                  <li>  
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNextPage(); }}>  
                      <i className="far fa-angle-double-right" />  
                    </a>  
                  </li>  
                </ul>  
              </div>  
            </div>  
            <div className="col-xl-4 col-lg-5">  
              <div className="sidebar-widget-area"> 
                  <div className="sidebar-widget widget-search gray-bg mb-40 wow fadeInUp">
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
                    {message && <p style={{ marginTop: "10px", color: "0B3D2C" }}>{message}</p>}
                  </div> 
                {/*=== Author Widget ===*/}  
                <div className="sidebar-widget widget-post-author mb-40 wow fadeInUp">  
                  <div className="author-img">  
                    <img src="assets/images/team/team-2.jpg" alt="Author Image" />  
                  </div>  
                  <div className="author-content text-center">  
                    <div className="author-title-box">  
                      <h4>Abu Jazib</h4>  
                      <span className="posiiton">CTO &amp; Co-Founder</span>  
                    </div>  
                    <p>  
                      At Nature Valley, we believe in the power of nature to transform spaces and lives. Our blogs aim to share insights, tips, and inspiration to help you create a greener world.  
                    </p>  
                    <ul className="social-link">  
                      <li>  
                        <a href="https://www.instagram.com/jazib.ghaffar">  
                          <i className="fab fa-instagram" />  
                        </a>  
                      </li>  
                      <li>  
                        <a href="https://www.facebook.com/jazibghaffar1">  
                          <i className="fab fa-facebook-f" />  
                        </a>  
                      </li>  
                      <li>  
                        <a href="https://www.linkedin.com/in/abujazib">  
                          <i className="fab fa-linkedin-in" />  
                        </a>  
                      </li>  
                      <li>  
                        <a href="https://youtube.com/@jazibghaffar2313?feature=shared">  
                          <i className="fab fa-youtube" />  
                        </a>  
                      </li>  
                    </ul>  
                  </div>  
                </div>  
                {/*=== Recent Post Widget ===*/}  
                {/*=== Banner Widget ===*/}  
                <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">  
                  <div className="banner-content text-white">  
                    <h3 className="title">Looking for expert landscaping solutions!</h3>  
                    <p>You’re in the right place</p>  
                    <Link legacyBehavior href="/contact">  
                      <a className="main-btn filled-btn filled-white">Contact Us</a>  
                    </Link>  
                    <img src="assets/images/sidebar/b-w-1.png" alt="Banner Image" />  
                  </div>  
                </div>  
                {/*=== Tag Widget ===*/}  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>  
      {/*====== Start Partners Section ======*/}   
      <Partners />  
    </Layout>  
  );  
};  
  
export default BlogStandard;  