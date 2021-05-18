import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="coments-list">
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
