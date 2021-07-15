import React from 'react';
import PropTypes from 'prop-types';
import UserTypes from '../../types/UserTypes';
import PostTypes from '../../types/PostTypes';

export const User = ({ users, post }) => {
  const findUserWithId = users.find(user => user.id === post.userId);
  const userMail = `mailto: ${findUserWithId.email}`;

  return (
    <div className="user">
      <h3 className="user__name">
        Author:
        {' '}
        {findUserWithId.name}
      </h3>
      <a href={userMail} className="user__email">
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
  post: PostTypes.isRequired,
  users: PropTypes.arrayOf(UserTypes).isRequired,
};
