import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export const CommentList = ({ commentList }) => (
  <ul>
    {commentList.map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

export const CommentListShape = PropTypes.arrayOf(PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
})).isRequired;

CommentList.propTypes = {
  commentList: CommentListShape.isRequired,
};
