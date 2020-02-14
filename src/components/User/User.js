import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  const { name, email, address } = user;
  const { city } = address;

  return (
    <div className="user">
      <span className="user__span">
        {`Written by: ${name} ${email} from: ${city}`}
      </span>
    </div>
  );
};

User.propTypes = {

  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string,
    }),
  }).isRequired,

};
