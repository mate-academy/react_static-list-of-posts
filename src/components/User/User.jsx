import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">{name}</p>
    <a className="user__email" href={`mailto:${email}`}>{email}</a>
    <p className="user__address">
      {
        `${address.zipcode}, `
        + `${address.city}, `
        + `${address.street}, `
        + `${address.suite}`
      }
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  address: PropTypes.shape(),
};

User.defaultProps = {
  email: '',
  address: {},
};
