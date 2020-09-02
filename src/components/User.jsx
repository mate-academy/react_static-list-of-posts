import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="post__author">
    <h3 className="post__author-name">
      {name}
    </h3>
    <a className="post__author-email" href={`mailto:${email}`}>
      {email}
    </a>
    <address className="post__author-address">
      {`${address.city}, ${address.street}, ${address.suite}`}
    </address>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
    suite: PropTypes.string,
    street: PropTypes.string,
  }),
};

User.defaultProps = {
  address: {},
};
