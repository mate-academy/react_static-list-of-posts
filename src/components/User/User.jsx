import React from 'react';
import PropTypes from 'prop-types';

import image from '../../images/user-photo.png';

function User({ name, email, address }) {
  return (
    <div className="post__user-info">
      <img
        src={image}
        alt="User"
        className="post__image"
      />
      <h3 className="post__subtitle">{name}</h3>
      <span className="post__email">
        {email}
      </span>
      <p className="post__address">
        {`${address.city}, ${address.street}, ${address.suite}`}
      </p>
      <p className="post__zip">
        {address.zipcode}
      </p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
