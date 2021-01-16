import React from 'react';
import PropTypes from 'prop-types';

import { CommentType } from '../types/types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comment: PropTypes.arrayOf(CommentType).isRequired,
}.isRequired;
