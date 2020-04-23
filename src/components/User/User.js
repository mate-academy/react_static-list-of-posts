import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

const User = ({ name, email, address }) => (
  <section className="posts__author-info">
    <p>
      <b>{name}</b>
    </p>
    <p>
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </p>
    <p>{address.city}</p>
  </section>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
};

export default User;
