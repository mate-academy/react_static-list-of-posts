import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user-info">
    <p className="user-info__name">{name}</p>
    <p className="user-info__email">{email}</p>
    <p className="user-info__address">
      {`${address.city}, ${address.street}, ${address.suite}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }),
};

User.defaultProps = {
  address: {},
};
