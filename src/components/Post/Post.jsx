import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <h2 className="post-title">{title.toUpperCase()}</h2>
    <p className="post-body">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comments: PropTypes.arrayOf().isRequired,
};
