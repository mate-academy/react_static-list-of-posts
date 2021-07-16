import React from 'react';
import PropTypes from 'prop-types';

export const Adress = ({ address }) => (
  <li>
    Adress:
    {
      ` ${address.city} ${address.street} , ${address.suite} `
    }
  </li>
);

Adress.propTypes = {
  address: PropTypes.objectOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
};
