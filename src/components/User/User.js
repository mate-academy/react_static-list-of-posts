import React from 'react';
import './User.scss';

import PropTypes from 'prop-types';

export const User = ({
  name,
  email,
  address,
}) => (
  <section className="user">
    <p className="user__name">
      {`${name},`}
    </p>

    <p className="user__email">
      {`${email},`}
    </p>

    <p className="user__city">
      {address.city}
    </p>
  </section>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.any).isRequired,
};
