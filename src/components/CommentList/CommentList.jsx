import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';

export const CommentList = ({ commentList }) => (
  <ol>
    {commentList.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ol>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
