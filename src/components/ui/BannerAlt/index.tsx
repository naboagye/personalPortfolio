import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { Modal } from 'components/Modal';
import { useModal } from 'components/utils/useModal';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const BannerAlt: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText }) => {
  const { isShown, toggle } = useModal();
  const content2 = <React.Fragment>Hey, I'm a model.</React.Fragment>;

  return (
    <Styled.Banner>
      <Container section>
        <TitleSection title={title} subtitle={subtitle} />
        <Styled.Content>{content}</Styled.Content>
        <React.Fragment>
          <Button primary onClick={toggle}>
            {linkText}
          </Button>
          <Modal headerText={'s'} isShown={isShown} hide={toggle} modalContent={content2} />
        </React.Fragment>
      </Container>
    </Styled.Banner>
  );
};

export default BannerAlt;
