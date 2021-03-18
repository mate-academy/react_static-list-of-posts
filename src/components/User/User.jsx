import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

const User = ({ name, email, address }) => (
  <div className="user">
    <h3 className="user__name">
      {name}
    </h3>
    <div className="user__address">
      <span>
        {address.city}
      </span>
    </div>
    <a href={`mailto:${email}`} className="user__email">
      {email}
    </a>
  </div>
);

User.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
