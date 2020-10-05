import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
//import Button from 'components/ui/Button';
//import { Fab } from 'gatsby-material-ui-components';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { teal } from '@material-ui/core/colors';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import * as Styled from './styles';

interface DownloadBtn {
  buttonText: string;
  fileLocation: string;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#81e6d9'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f'
    }
  }
});

const style = {
  bottom: 110,
  right: 20,
  position: 'fixed',
  color: '#3c366b'
};

const DownloadBtn: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "download section" } }) {
        frontmatter {
          buttonText
          fileLocation
        }
      }
    }
  `);

  const downloadBtn: DownloadBtn = markdownRemark.frontmatter;

  return (
    <a href={downloadBtn.fileLocation} target="_blank" download>
      <ThemeProvider theme={theme}>
        <Tooltip title="Download CV in PDF" aria-label="download">
          <Fab color="primary" style={style}>
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          </Fab>
        </Tooltip>
      </ThemeProvider>
    </a>
  );
};

export default DownloadBtn;
