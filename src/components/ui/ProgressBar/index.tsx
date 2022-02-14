import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
}

const ProgressBar: React.FC<Props> = ({ title, percentage }) => (
  <Styled.ProgressBar>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>{' '}
    </Styled.Content>
    <Styled.BarWrapper>
      <Styled.Bar percentage={100} />
    </Styled.BarWrapper>
  </Styled.ProgressBar>
);

export default ProgressBar;
