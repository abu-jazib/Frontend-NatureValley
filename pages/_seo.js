import Head from "next/head";

const Seo = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}) => (
  <Head>
    {/*====== Standard Meta Tags =====*/}
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    
    {/* SEO Tags */}
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />

    {/* Title */}
    <title>{title}</title>

    {/* Open Graph Tags */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />

    {/* Twitter Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={twitterTitle || title} />
    <meta name="twitter:description" content={twitterDescription || description} />
  </Head>
);

export default Seo;
