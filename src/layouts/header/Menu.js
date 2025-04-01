import Link from "next/link";  
  
const Menu = () => {  
  return (  
    <nav className="main-menu">  
      <ul>  
        <li className="menu-item">  
          <Link legacyBehavior href="/">  
            <a>Home</a>  
          </Link>  
        </li>  
        <li className="menu-item has-children">  
          <a href="#">Service
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>  
          <ul className="sub-menu">  
            <li>  
              <Link legacyBehavior href="service-Commercial-Landscaping">  
                <a>Commercial Landscaping</a>  
              </Link>  
            </li>  
            <li>  
              <Link legacyBehavior href="service-Residential-Landscaping">  
                <a>Residential Landscaping</a>  
              </Link>  
            </li>  
            <li>  
              <Link legacyBehavior href="service-GreenBelt-Development">  
                <a>GreenBelt Development</a>  
              </Link>  
            </li>  
            <li>  
              <Link legacyBehavior href="service-Office-Landscaping">  
                <a>Office Landscaping</a>  
              </Link>  
            </li>  
            <li>  
              <Link legacyBehavior href="service-Society-Plantation">  
                <a>Society Plantation</a>  
              </Link>  
            </li>  
            <li>  
              <Link legacyBehavior href="service-Plant-Nursery">  
                <a>Plant Sales and Nursery</a>  
              </Link>  
            </li>  
          </ul>  
        </li>  
        <li className="menu-item">  
          <Link legacyBehavior href="team">  
            <a>Our Team</a>  
          </Link>  
        </li>  
        <li className="menu-item">  
          <Link legacyBehavior href="blogs">  
            <a>Blogs</a>  
          </Link>  
        </li>
        <li className="menu-item">  
          <Link legacyBehavior href="contact">  
            <a>Contact Us</a>  
          </Link>  
        </li>  
      </ul>  
    </nav>  
  );  
};  
  
export default Menu;  