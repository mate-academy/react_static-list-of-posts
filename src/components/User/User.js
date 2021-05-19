/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = ({ name, email, address }) => (
  <div className="user-container">
    <p className="user-container__name text">{`User: ${name}.`}</p>
    <a href={`mailto: ${email}`} className="user-container__email text">{`Email: ${email}.`}</a>
    <p className="user-container__address text">
      {`Address: ${address.city} ${address.street} ${address.suite}.`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
