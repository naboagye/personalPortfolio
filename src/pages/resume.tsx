import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
//import Button from 'components/ui/Button';
import Experience from 'components/Experience';
import OtherExperience from 'components/OtherExperience';
import Education from 'components/Education';
import Skills from 'components/Skills';
import DownloadBtn from 'components/DownloadBtn';
import Certifications from 'components/Certifications';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Education />
    <hr />
    <Experience />
    <hr />
    <OtherExperience />
    <hr />
    <Certifications />
    <hr />
    <Skills />
  </Layout>
);

export default ResumePage;
