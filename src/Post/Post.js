import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import { CommentsList } from '../CommentsList/CommentsList';
import { User } from '../User/User';

export const Post = ({ title, body, user, comments }) => (
  <div>
    <p className="posts-list__post__title">{title}</p>
    <User {...user} />
    <p className="posts-list__post__body">{body}</p>
    <p className="comments">Comments:</p>
    <CommentsList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
