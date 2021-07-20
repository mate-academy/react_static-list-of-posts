import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

export const User = ({ user }) => (
  <div className="user">
    <p className="user__name">{`User name: ${user.name}`}</p>
    <p className="user__email">{`User email: ${user.email}`}</p>
    <p className="user__address">
      {`User address: ${`${user.address.street}, ${user.address.suite}`}`}
    </p>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
      geo: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};
