import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from './CommentList';
import { User } from './User';

import './post.css';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <div className="post-text">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
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
    }).isRequired,
  ).isRequired,
};
