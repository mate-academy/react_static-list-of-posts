import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { User } from '../User/User';
import { CommentList } from '../Comment/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <User {...user} />
    <h3>{title}</h3>
    <p>{body}</p>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
