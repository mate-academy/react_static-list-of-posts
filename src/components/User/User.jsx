import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="post-creator">
    <h3 className="post-creator__name">
      {name}
    </h3>

    <a href={`mailto:${email}`}>
      {email}
    </a>

    <p className="post-creator__city">
      {address.city
        ? (
          <>
            {'City: '}
            <strong>{address.city}</strong>
          </>
        )
        : 'User prefered to hidden his city'}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }),
};

User.defaultProps = {
  address: {},
};
