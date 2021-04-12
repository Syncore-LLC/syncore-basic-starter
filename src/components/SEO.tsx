import React from 'react';

// Component imports
import { GatsbySeo } from 'gatsby-plugin-next-seo';

// Helpers
import SEOConfig from '@helper/seo';

interface Props {
  title: string;
  path: string;
  description?: string;
  img?: {
    url: string;
    alt: string;
  };
}

const SEO: React.FC<Props> = ({ title, path, description, img }) => {
  return (
    <GatsbySeo
      title={title}
      canonical={`${SEOConfig.baseURL}/${path}`}
      description={description}
      openGraph={{
        url: `${SEOConfig.baseURL}/${path}`,
        images: [img as { url: string; alt: string }],
      }}
    />
  );
};

export default SEO;
