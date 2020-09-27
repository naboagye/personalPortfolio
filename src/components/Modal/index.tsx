import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './styles';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}
export const Modal: FunctionComponent<ModalProps> = ({ isShown, hide, modalContent, headerText }) => {
  const modal = (
    <React.Fragment>
      <Styled.Backdrop />
      <Styled.Wrapper>
        <Styled.StyledModal>
          <Styled.Header>
            <Styled.HeaderText>{headerText}</Styled.HeaderText>
            <Styled.CloseButton onClick={hide}>X</Styled.CloseButton>
          </Styled.Header>
          <Styled.Content>{modalContent}</Styled.Content>
        </Styled.StyledModal>
      </Styled.Wrapper>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
