import React from "react";
import { Helmet } from "react-helmet";

function SEOHead({ title, description, url }) {
  const defaultImage = "/og-image.jpg"; // Reference image from public folder

  return (
    <Helmet>
      {/* Basic SEO Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`Gospel, Lyrics, ${title}, Telugu Songs, Gospel music, Telugu songs, Gospel lyrics, Christian songs, Spiritual music, Telugu lyrics, Worship songs`}
      />
      <meta name="author" content="Gospel Mini Melodies" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Tags for Social Media Sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} /> {/* Use the absolute path */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Gospel Mini Melodies" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GospelMiniMelodies" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} /> {/* Use the absolute path */}

      {/* Favicon */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      <title>{title}</title>
    </Helmet>
  );
}

export default SEOHead;
