import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const {
    name, email, address = {}, test,
  } = user;

  const {
    street, suite, city, zipcode,
  } = address;

  return (
    <>
      <h2>{name}</h2>
      <a href={`mailto:${email}`}>{email}</a>
      <div>
        <p>{street}</p>
        <p>{suite}</p>
        <p>{city}</p>
        <p>{zipcode}</p>
      </div>
      <p>Ниже тестовое свойство не отображается</p>
      <p>{test}</p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    test: PropTypes.string,
  }).isRequired,
};

export default User;
