import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="inner">
    <strong className="name">{name}</strong>
    <p>{email}</p>

    <div>
      {`${address.street} ${address.suite}`}
    </div>
  </div>
);

User.propTypes = ({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }),
}).isRequired;
