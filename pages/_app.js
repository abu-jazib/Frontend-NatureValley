import Preloader from "@/src/layouts/Preloader";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "/styles/globals.css";
import Seo from "@/pages/_seo";
import "react-quill/dist/quill.snow.css";

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const {
    title = "Nature Valley - Your Online Nursery",
    description = "Explore Nature Valley, your trusted source for plants, landscaping, and gardening solutions.",
    keywords = "online plants, plants in lahore, landscaping, naturevalley, naturevalley lahore",
    ogTitle,
    ogImage = "https://naturevalley.blob.core.windows.net/assets/og%20image%20.jpg", 
    ogDescription,
    twitterTitle,
    twitterDescription,
  } = pageProps.seo || {};

  return (
      <Fragment>
        <Seo
          title={title}
          description={description}
          keywords={keywords}
          ogTitle={ogTitle}
          ogImage={ogImage}
          ogDescription={ogDescription}
          twitterTitle={twitterTitle}
          twitterDescription={twitterDescription}
        />

        {/* ✅ Move all <link> tags inside <Head> */}
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2252656502777909"
            crossOrigin="anonymous"
          />
          <link
            rel="shortcut icon"
            href="/assets/images/favicon.png"
            type="image/png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="/assets/fonts/flaticon/flaticon_gadden.css"
          />
          <link
            rel="stylesheet"
            href="/assets/fonts/fontawesome/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/magnific-popup/dist/magnific-popup.css"
          />
          <link rel="stylesheet" href="/assets/vendor/slick/slick.css" />
          <link
            rel="stylesheet"
            href="/assets/vendor/jquery-ui/jquery-ui.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/nice-select/css/nice-select.css"
          />
          <link rel="stylesheet" href="/assets/vendor/animate.css" />
          <link rel="stylesheet" href="/assets/css/default.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
        </Head>

        {loading && <Preloader />}
        {!loading && <Component {...pageProps} />}
      </Fragment>
  );
};

export default App;
