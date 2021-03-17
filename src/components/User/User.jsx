import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export function User({ name, email, address }) {
  return (
    <>
      <div className="user__name">{`Name: ${name}`}</div>
      <div className="user__email">{`Email: ${email}`}</div>
      <div className="user__address">
        {`City: ${address.city}
        Street: ${address.street}`}
      </div>
    </>
  );
}

User.propTypes = ({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }),
}).isRequired;
