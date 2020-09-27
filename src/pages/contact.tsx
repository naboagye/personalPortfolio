import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Banner2 from 'components/Banner2';
import ContactInfo from 'components/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Banner2 />
      <ContactInfo />
    </Layout>
  );
};

export default ContactPage;
