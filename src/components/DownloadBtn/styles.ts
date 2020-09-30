import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Fab } from 'gatsby-material-ui-components';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  className?: string;
}

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: '#81e6d9'
  }
};

export const Form = styled.div`
  ${tw`flex flex-col items-center justify-center mx-auto mt-4`};
`;

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const FaBtn = styled(Fab)`
  color: bg-teal-300;
`;
