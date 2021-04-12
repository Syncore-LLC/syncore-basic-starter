import React from 'react';

// Component imports
import Header from '@global/Header';

// Styles

import '../../styles/tailwind.css';

// Helpers
import SEOConfig from '@helper/seo';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
