import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email }) => (
  <>
    <p key={name}>
      Author:
      {` ${name}`}
    </p>
    <p key={email}>
      Email:
      {` ${email}`}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
