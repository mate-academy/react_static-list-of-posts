import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { commentShape, userShape } from '../../types';

export const Post = ({
  title,
  user,
  body,
  comments,
}) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <User currentUser={user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userShape.isRequired,
  comments: PropTypes.arrayOf(commentShape).isRequired,
};
