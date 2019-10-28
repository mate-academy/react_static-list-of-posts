import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentsList from './CommentsList';
import users from '../api/users';

export default function Post({ post }) {
  const postUser = users.find(user => user.id === post.userId);

  return (
    <li>
      <h3>{ post.title }</h3>
      <p>{ post.body }</p>
      <p>
        <User
          email={postUser.email}
          name={postUser.name}
          address={postUser.address}
        />
      </p>
      <CommentsList post={post} />
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.string.isRequired,
};
