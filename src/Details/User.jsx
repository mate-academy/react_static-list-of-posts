import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div>
      <div>
        <b>Name: </b>
        {user.name}
      </div>

      <div>
        <b>E-mail: </b>
        {user.email}
      </div>

      <div>
        <b>Adress:</b>
        <ul>
          {Object.values(user.address).map(param => (typeof param === 'string')
          && <li key={`id:${param}`}>{param}</li>)}
        </ul>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
