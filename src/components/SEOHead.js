import React from "react";
import { Helmet } from "react-helmet";

function SEOHead({ title, description, url }) {
  const defaultImage = "/og-image.jpg"; // Reference image from public folder

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`Gospel, Lyrics, ${title}, Telugu Songs, Gospel music, Telugu songs, Gospel lyrics, Christian songs, Spiritual music, Telugu lyrics, Worship songs`}
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      <title>{title}</title>
    </Helmet>
  );
}

export default SEOHead;
