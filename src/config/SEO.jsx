// src/seo/SEO.jsx
import { Helmet } from "react-helmet-async";
import SITE, { SEO_DATA } from "./seo.config";

export default function SEO({ page }) {
  const data = SEO_DATA[page];

  if (!data) return null;

  const url = `${SITE.url}${data.path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{data.title}</title>
      <meta name="description" content={data.description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={SITE.defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={SITE.defaultImage} />
    </Helmet>
  );
}
