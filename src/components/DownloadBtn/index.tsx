import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
//import Button from 'components/ui/Button';
//import { Fab } from 'gatsby-material-ui-components';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import * as Styled from './styles';

interface DownloadBtn {
  buttonText: string;
  fileLocation: string;
}

const style = {
  background: '#81e6d9',
  right: 20,
  position: 'fixed'
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
      <Tooltip title="Download CV in PDF" aria-label="download">
        <Fab style={style}>
          <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
        </Fab>
      </Tooltip>
    </a>
  );
};

export default DownloadBtn;
