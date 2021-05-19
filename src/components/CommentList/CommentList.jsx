import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ list }) => (
  <ul className="comment-list">
    {list.map(comment => (
      <li key={comment.id}>
        <Comment commentItem={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
