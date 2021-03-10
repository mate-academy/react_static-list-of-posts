import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';
import { UserType, CommentType } from '../types';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2>{title}</h2>
    <p className="post__text">{body}</p>
    <User user={user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserType.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentType),
  ).isRequired,
};
