import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { Comments } from '../Comments/Comments';

import './Post.css';

export const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <li className="post">
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <User user={user} />
      <Comments comments={comments} />
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        city: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
