import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

function User(props) {
  const { name, email, address } = props;

  return (
    <div className="user">
      <>
        <p>{name}</p>
        <p>{email}</p>
        <p>{address.city}</p>
      </>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
  }).isRequired,
};

export default User;
