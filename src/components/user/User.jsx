import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

 export const User = ({ name, email, address}) => (
  <div className="post__user-info">
    <div className="post__user-name">
      {name}
    </div>
    <div className="post__user-email">
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </div>
    <div className="post__user-address">
      City: {address.city}
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  })
};
