import React from 'react';
import propTypes from 'prop-types';

function User(props) {
  return (
    <>
      <p>{props.user.name}</p>
      <p>{props.user.email}</p>
      <p>
        {`${props.user.address.city
        } ${props.user.address.street
        } ${props.user.address.suite}`}
      </p>
    </>
  );
}

User.propTypes = {
  user: propTypes.shape({
    name: propTypes.string,
    email: propTypes.string,
    address: ({
      city: propTypes.string,
      street: propTypes.string,
      suite: propTypes.string,
    }).isRequired,
  }).isRequired,
};
export default User;
