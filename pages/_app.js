import Preloader from "@/src/layouts/Preloader";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "/styles/globals.css";
import Seo from "@/pages/_seo";
import "react-quill/dist/quill.snow.css"; // or "quill/dist/quill.bubble.css"



const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const defaultTitle = "Nature Valley - Your Online Nursery";
  const defaultDescription =
    "Explore Nature Valley, your trusted source for plants, landscaping, and gardening solutions.";
  const defaultKeywords =
    "online plants, plants in lahore, landscaping, naturevalley, naturevalley lahore";

  return (
    <Fragment>
      <Head>
        {/* Default SEO (fallback) for pages without Seo component */}
        <Seo
          title={defaultTitle}
          description={defaultDescription}
          keywords={defaultKeywords}
        />

        {/* Additional global meta tags */}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/flaticon/flaticon_gadden.css"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/fontawesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/magnific-popup/dist/magnific-popup.css"
        />
        <link rel="stylesheet" href="assets/vendor/slick/slick.css" />
        <link
          rel="stylesheet"
          href="assets/vendor/jquery-ui/jquery-ui.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/nice-select/css/nice-select.css"
        />
        <link rel="stylesheet" href="assets/vendor/animate.css" />
        <link rel="stylesheet" href="assets/css/default.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>

      {loading && <Preloader />}
      {!loading && <Component {...pageProps} />}
    </Fragment>
  );
};

export default App;
