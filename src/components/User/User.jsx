import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <>
    <div className="author">
      <p className="name">{name}</p>
      <p className="email">{email}</p>
      <p className="adress">{address.city}</p>
    </div>
    <p className="commentaries_block">Commetaries</p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
