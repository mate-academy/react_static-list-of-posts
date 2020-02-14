import React from 'react';
import PropTypes from 'prop-types';

export const userTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};

export const User = ({ user }) => {
  const { name, email, address } = user;

  return (
    <>
      <h3>{`Posted by: ${name}`}</h3>
      <p>
        {`Email: ${email}.
         Address: ${address.city} 
         ${address.street} ${address.suite}`}
      </p>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape(userTypes).isRequired,
};
