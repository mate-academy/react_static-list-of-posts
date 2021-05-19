import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <>
    <div className="user__name">
      {`Author: ${name}`}
    </div>
    <div className="user__email">
      {`Email: ${email}`}
    </div>
    <div className="user__address">
      {`City: ${address.city}`}
    </div>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
