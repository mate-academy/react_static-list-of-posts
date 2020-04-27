import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = ({ name, email, address }) => (
  <section className="posts__author-info">
    <span className="posts__author-name">
      <b>Author:</b>
      {' '}
      {name}
    </span>
    <br />
    <span className="posts__author-email">
      <b>email:</b>
      {' '}
      <a href={`mailto:${email}`}>{email}</a>
    </span>
    <address>
      <ul className="posts__author-address">
        <li>
          <b>Street:</b>
          {' '}
          {address.street}
        </li>
        <li>
          <b>Suite:</b>
          {' '}
          {address.suite}
        </li>
        <li>
          <b>City:</b>
          {' '}
          {address.city}
        </li>
        <li>
          <b>zipcode:</b>
          {' '}
          {address.zipcode}
        </li>
      </ul>
    </address>
  </section>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.arrayOf(PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  })).isRequired,
};

export default User;
