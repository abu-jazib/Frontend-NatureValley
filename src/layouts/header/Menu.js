import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Preloader from '@/src/layouts/Preloader'; // Assuming Preloader is located here

const Menu = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Listen for route changes to handle loading state
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true); // Set loading to true when the route changes
    };
    
    const handleRouteComplete = () => {
      setLoading(false); // Set loading to false when the route change is complete
    };

    const handleRouteError = () => {
      setLoading(false); // Set loading to false when there's an error
    };

    // Add event listeners for route changes
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteError);

    // Cleanup listeners when the component is unmounted
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteError);
    };
  }, [router]);

  // Delay Preloader visibility by 1000ms (1 second)
  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        setLoading(true);
      }, 2000); // Delay by 1000ms (1 second)
    } else {
      clearTimeout(timer); // Clear timeout if loading is set to false
    }

    return () => {
      clearTimeout(timer); // Clear the timer on cleanup
    };
  }, [loading]);

  // Show Preloader while route is loading with a delay
  if (loading) {
    return <Preloader />;
  }

  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item">
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Service
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/service-Commercial-Landscaping">
                <a>Commercial Landscaping</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-Residential-Landscaping">
                <a>Residential Landscaping</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-GreenBelt-Development">
                <a>GreenBelt Development</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-Office-Landscaping">
                <a>Office Landscaping</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-Society-Plantation">
                <a>Society Plantation</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-Plant-Nursery">
                <a>Plant Sales and Nursery</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            AI Tools
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="https://leafscan.naturevalley.com.pk/">
                <a>Plant Identifier & Disease Finder</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="https://design.naturevalley.com.pk/">
                <a>Garden Planner</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/team">
            <a>Our Team</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/blogs">
            <a>Blogs</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
