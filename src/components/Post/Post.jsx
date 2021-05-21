import React from 'react';

import './Post.scss';
import PropTypes from 'prop-types';

import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="Post">
    <h2 className="Post__title">{title}</h2>
    <p className="Post__text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};
