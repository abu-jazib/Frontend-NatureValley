// components/BlogsSeo.js
import Head from "next/head";

const BlogsSeo = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  url,
}) => (
  <Head>
    {/* Standard Meta */}
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
    <meta property="og:type" content="article" />
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    {url && <meta property="og:url" content={url} />}

    {/* Twitter Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={twitterTitle || title} />
    <meta name="twitter:description" content={twitterDescription || description} />
    {twitterImage && <meta name="twitter:image" content={twitterImage} />}
  </Head>
);

export default BlogsSeo;
