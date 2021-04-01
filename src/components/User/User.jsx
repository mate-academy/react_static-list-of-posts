import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <h3 className='postAutor'>
      <strong>User: </strong>
      {user.username}
    </h3>
    <h3 className='postEmail'>
      <strong>Email: </strong>
      {user.email}
    </h3>
    <h3 className='postAddress'>
      <strong>Adress: </strong>
      {
      `${user.address.street},
        ${user.address.suite},
        ${user.address.city},
        ${user.address.zipcode}`
      }
    </h3>
  </>
)

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
}