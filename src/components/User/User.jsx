import React from 'react';
import PropTypes from 'prop-types';
import PostsType from '../../types/postsTypes';
import UsersType from '../../types/usersTypes';

export const User = ({ post, users }) => {
  const neededUser = users.find(user => user.id === post.userId);

  return (
    <>
      <p>
        <strong>Name: </strong>
        {neededUser.name}
      </p>
      <p>
        <strong>Email: </strong>
        {neededUser.email}
      </p>
      <p>
        <strong>Adress: </strong>
        {`${neededUser.address.city}, str.${neededUser.address.street}
        ${neededUser.address.suite}, zcode: ${neededUser.address.zipcode}`}
      </p>
    </>
  );
};

User.propTypes = {
  post: PostsType.isRequired,
  users: PropTypes.arrayOf(UsersType).isRequired,
};
