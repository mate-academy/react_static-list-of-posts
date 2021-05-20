import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="User">
    <div className="User__name">{name}</div>
    <div>{email}</div>
    <div>

      <div>
        {`${address.city} ${address.zipcode}`}
      </div>
      <div>
        {`${address.street} ${address.suite}`}
      </div>
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
