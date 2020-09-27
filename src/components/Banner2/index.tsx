import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BannerAlt from 'components/ui/BannerAlt';

import { SectionTitle } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  content2: string;
  linkTo: string;
  linkText: string;
}

const Banner2: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero2 section" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;

  return (
    <BannerAlt
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
    />
  );
};

export default Banner2;
