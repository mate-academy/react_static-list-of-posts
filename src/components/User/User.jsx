import React from 'react';
import PropTypes, { shape } from 'prop-types';

export const User = ({ user }) => (
  <>
    <h3>
      {`Author: ${user.name}`}
    </h3>
    <div>
      {`User name: ${user.name}`}
    </div>
    <div>
      {`User addres: ${user.address.city}`}
    </div>
  </>
);

User.propTypes = {
  user: shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
