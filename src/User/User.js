import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

function User({ user }) {
  const { city, street } = user.address;
  const { name, email } = user;

  return (
    <div className="user">
      <h3 className="user__title">{name}</h3>
      <p className="user__title">{email}</p>
      <p>
        {`${city}, ${street}`}
      </p>
    </div>
  );
}

const userPropTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
  }),
}).isRequired;

User.propTypes = {
  user: userPropTypes.isRequired,
};

export default User;
