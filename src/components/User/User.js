import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ person: { name, email, address } }) => (
  <div className="user">
    <h3>
      <span className="user__author">author: </span>
      { name }
    </h3>
    <p>
      <span>email: </span>
      { email }
    </p>
    <p>
      <span>adress: </span>
      { address.street }
      ,
      {' '}
      <span>
        {address.suite }
      ,
        {' '}
      </span>
      <span>
        { address.city }
      ,
        {' '}
      </span>
      <span>
        { address.zipcode }
      ,
      </span>
    </p>
  </div>
);

User.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
