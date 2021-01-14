import React from 'react';
import PropTypes from 'prop-types';

import { CommentType } from '../types/CommentType';
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

CommentList.propTypes = PropTypes.arrayOf(CommentType).isRequired;
