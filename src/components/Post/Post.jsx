import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import { CommentsList } from '../CommentsList';

import './Post.scss';

export const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <li className="Post">
      <h3 className="Post__title">{title}</h3>
      <p className="Post__body">{body}</p>
      <User user={user} />
      <CommentsList comments={comments} />
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
