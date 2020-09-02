import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="author">
    <i>
      {`By ${name},  email: ${email}`}
      <br />
      Address:
      {` ${address.zipcode}, ${address.city},
        ${address.street}, ${address.suite}`}
    </i>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.string).isRequired,
}.isRequired;
