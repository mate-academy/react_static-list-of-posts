import React from 'react';
import PropTypes from 'prop-types';
import { CommentType, UserType } from '../ListTypes';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <User user={user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserType).isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
