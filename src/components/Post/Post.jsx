import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList';
import { User } from '../User';
import { commentShape, userShape } from '../../types';

export const Post = ({ user, comments, title, body }) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <User currentUser={user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  user: userShape.isRequired,
  comments: PropTypes.arrayOf(commentShape).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
