import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User({ user }) {
  const userAdress = user.address.suite
    .concat(` `, user.address.street, `, `, user.address.city);

  return (
    <div className="user">
      <h4>{user.name}</h4>
      <span>{user.email}</span>
      <div>
        <p>{userAdress}</p>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      catchPhrase: PropTypes.string.isRequired,
      bs: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
