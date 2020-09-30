import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faCloud,
  faInfinity,
  faChartBar,
  faPeopleArrows,
  faBasketballBall,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(
  fab,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faCloud,
  faInfinity,
  faChartBar,
  faPeopleArrows,
  faLinkedin,
  faBasketballBall,
  faDownload
);

export type IconProps = FontAwesomeIconProps['icon'];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
