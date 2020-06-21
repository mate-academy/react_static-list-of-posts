import React from 'react';
import PropTypes from 'prop-types';

export const Address = ({ address }) => (
  <div>
    <ul>
      <li>{address.street}</li>
      <li>{address.suite}</li>
      <li>{address.city}</li>
      <li>{address.zipcode}</li>
    </ul>
  </div>
);

Address.propTypes = {
  address: PropTypes.objectOf(Object).isRequired,
};
