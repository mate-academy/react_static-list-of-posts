import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <p className="user__name">
      {`autor: ${name}`}
    </p>
    <span className="user__email">
      {`e-mail: ${email}`}
    </span>
    <p className="user__city">{`is located in: ${address.city}`}</p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape().isRequired,
};
