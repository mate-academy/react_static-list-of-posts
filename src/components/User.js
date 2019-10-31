import React from 'react';
import PropTypes from 'prop-types';

export default function User(props) {
  return (
    <>
      <p>
        {'Name: '}
        {props.user.name}
      </p>
      <p>
        {'Email: '}
        {props.user.email}
      </p>
      <p>
        {'Adress: '}
        {props.user.address.street}
      </p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
