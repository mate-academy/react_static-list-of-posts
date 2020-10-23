import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="post__user user">
    <p className="user__name">
      <i>fullname: </i>
      {name}
    </p>
    <p className="user__email">
      <i>email: </i>
      {email}
    </p>
    <p className="user_adress">
      <i>street: </i>
      {address.street}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
  }).isRequired,
};
