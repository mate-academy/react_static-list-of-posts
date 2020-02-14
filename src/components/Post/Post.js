import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    <User person={user} />
    <h3>Comments</h3>
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comments: PropTypes.arrayOf().isRequired,
};
