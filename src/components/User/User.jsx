import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="contacts">
    <span>
      <strong>Name: </strong>
      {name}
    </span>
    <span>
      <strong>Email: </strong>
      {email}
    </span>
    <span>
      <strong>Address: </strong>
      {`${address.city}, ${address.street}, ${address.suite}`}
    </span>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.any),
};

User.defaultProps = {
  address: {},
};
