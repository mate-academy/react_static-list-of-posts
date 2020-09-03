import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <>
    <div className="postList__post--author author">
      <p className="author__name">{name}</p>
      <p className="author__email">{email}</p>
      <p className="author__adress">{address.city}</p>
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
