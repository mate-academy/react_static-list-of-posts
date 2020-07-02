import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';
import { CommentShape } from './shapes';

export const CommentList = ({ commentList }) => (
  <ul className="comments">
    {commentList.map(comment => (
      <li key={comment.id} className="comments__item">
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(CommentShape.isRequired).isRequired,
};
