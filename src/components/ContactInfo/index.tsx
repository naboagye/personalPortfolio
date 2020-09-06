import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { IconProps } from 'components/ui/Icon';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Contact extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  submitPlaceholder: string;
}

const ConctactInfo: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "contact" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
            }
          }
        }
      }
    }
  `);

  const contact: Contact = markdownRemark.frontmatter;

  return (
    <Styled.Newsletter>
      <Container section>
        <TitleSection title={contact.title} subtitle={contact.subtitle} center />
        <Styled.Form>
          <Styled.Input type="text" placeholder={contact.namePlaceholder} />
          <Styled.Input type="email" placeholder={contact.emailPlaceholder} />
          <Button primary block>
            {contact.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Newsletter>
  );
};

export default ConctactInfo;
