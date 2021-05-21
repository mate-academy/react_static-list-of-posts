import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__info">
      {`Author: ${name}`}
      <br />
      {`Email: ${email}`}
      <br />
      {`Address: `
        + `${address.city},`
        + ` ${address.street},`
        + ` ${address.suite}`}
    </div>
  </div>
);

const AddressType = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
});

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: AddressType.isRequired,
};
