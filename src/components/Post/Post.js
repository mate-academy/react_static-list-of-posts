import React from 'react';
import PropTypes from 'prop-types';
import { userType, commentType } from '../../types';
import { CommentList } from '../CommentList';
import { User } from '../User';

export const Post = ({ title, body, user, comment }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <CommentList comments={comment} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userType.isRequired,
  comment: commentType.isRequired,
};
