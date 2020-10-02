import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';
import { IconProps } from 'components/ui/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Content>Copyright © 2020 NANA ABOAGYE</Styled.Content>
        <Styled.Link href="https://github.com/naboagye" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          GitHub
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/naboagye/" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          LinkedIn
        </Styled.Link>
        <Styled.Link
          href="https://stackoverflow.com/users/13501266/nana-aboagye?tab=profile"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon>
          Stack Overflow
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
