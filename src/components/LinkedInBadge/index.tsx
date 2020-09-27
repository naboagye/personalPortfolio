import React from 'react';

const LinkedInBadge: React.FC = () => {
  return (
    <div
      className="LI-profile-badge"
      data-version="v1"
      data-size="medium"
      data-locale="en_US"
      data-type="horizontal"
      data-theme="light"
      data-vanity="naboagye"
    >
      <a className="LI-simple-link" href="https://uk.linkedin.com/in/naboagye?trk=profile-badge">
        Nana Aboagye
      </a>
    </div>
  );
};

export default LinkedInBadge;
