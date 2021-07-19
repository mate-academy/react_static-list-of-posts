import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import { CommentTypes, UserTypes } from '../../types';

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
  user: PropTypes.shape(UserTypes).isRequired,
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
};
