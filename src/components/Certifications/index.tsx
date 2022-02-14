import React from 'react';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import ProgressBar from 'components/ui/ProgressBar';
import AWSBadge from 'components/AWSBadge';
import AzureBadge from 'components/AzureBadge';
import Helmet from 'react-helmet';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';
import { Blocky } from 'components/ui/InfoBlock/styles';

interface Certification {
  node: {
    id: string;
    frontmatter: {
      title: string;
      percentage: number;
    };
  };
}

const Certifications: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "certifications section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "certifications" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              percentage
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const skills: Certification[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <Helmet>
        <script src={withPrefix('myScript.js')} type="text/javascript" />
      </Helmet>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Services>
        <Blocky>
          <AWSBadge />
        </Blocky>
        <Blocky>
          <AzureBadge />
        </Blocky>
      </Styled.Services>
    </Container>
  );
};

export default Certifications;
