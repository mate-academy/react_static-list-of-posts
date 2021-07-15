import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ users, post }) => {
  const findUserWithId = users.find(user => user.id === post.userId);

  return (
    <div className="user">
      <h3 className="user__name">
        Author:
        {' '}
        {findUserWithId.name}
      </h3>
      <a href={findUserWithId.email} className="user__email">
        {findUserWithId.email}
      </a>
      <div className="user__address">
        <span className="user__address-street">
          {findUserWithId.address.street}
        </span>
        <span className="user__address-suite">
          {findUserWithId.address.suite}
        </span>
        <span className="user__address-city">
          {findUserWithId.address.city}
        </span>
      </div>
    </div>
  );
};

User.propTypes = {
  users: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.objectOf(PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  post: PropTypes.objectOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
  })).isRequired,
};
