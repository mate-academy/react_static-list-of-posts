import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <p className="lead">{`Name: ${name}`}</p>
    <p className="lead">{`E-mail: ${email}`}</p>
    <p className="lead">
      {`Address: ${address.city} ${address.street} ${address.suite}`}
    </p>
  </>
);

export const UserTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

User.propTypes = UserTypes;
