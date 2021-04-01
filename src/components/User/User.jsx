import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <p className="post__user">
    {`${name} from ${address.city}\n`}
    {email}
  </p>
);

export const UserType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

User.propTypes = UserType;
