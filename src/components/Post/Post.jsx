import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList';
import { User } from '../User';
import { CommentShape, UserShape } from '../Shapes';

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
  user: UserShape.isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
