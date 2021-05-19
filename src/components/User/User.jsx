import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <div className="user">
    <div className="user__info">
      {`Author: ${user.name}`}
      <br />
      {`Email: ${user.email}`}
      <br />
      {`Address: `
        + `${user.address.city},`
        + ` ${user.address.street},`
        + ` ${user.address.suite}`}
    </div>
  </div>
);

const AddressType = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
});

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: AddressType,
  }).isRequired,
};
