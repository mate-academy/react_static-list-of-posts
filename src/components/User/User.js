import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <section className="user post__user">
    <p className="user__name">{name}</p>
    <a href={`mailto:${email}`} className="user__email">
      {email}
    </a>
    <address className="user__address">
      <div>{`${address.street}, ${address.suite}`}</div>
      <div>{address.city}</div>
    </address>
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
