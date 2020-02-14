import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <div className="description">
      <div className="starts">***</div>
      <h3>{title}</h3>
      <p>{body}</p>
      <User user={user} />
    </div>
    <p className="comments">Comments:</p>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
};
