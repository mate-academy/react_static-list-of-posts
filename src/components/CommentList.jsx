import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';
import { commentType } from '../types';

export const CommentList = ({ comments }) => (
  <ul className="comment__list">
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      ...commentType,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
