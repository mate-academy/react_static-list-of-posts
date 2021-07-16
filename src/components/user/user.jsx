import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">{`User name: ${name}`}</p>
    <p className="user__email">{`User email: ${email}`}</p>
    <p className="user__address">
      {`User address: ${`${address.street}, ${address.suite}`}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
};
