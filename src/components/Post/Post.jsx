import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.css';

export const Post = ({ title, body, user, comment }) => (
  <div className="post">
    <div className="post__title">
      <h1>{title}</h1>
    </div>
    <div className="post__description">
      <p>{body}</p>
    </div>
    <User {...user} />
    <CommentList comment={comment} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.number,
    PropTypes.string,
  ).isRequired,
  comment: PropTypes.objectOf(
    PropTypes.number,
    PropTypes.string,
  ).isRequired,
};
