import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.css';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <div className="post__title">
      <h1>{title}</h1>
    </div>
    <div className="post__description">
      <p>{body}</p>
    </div>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
};
