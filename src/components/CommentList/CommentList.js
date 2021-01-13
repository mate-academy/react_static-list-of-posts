import React from 'react';
import PropTypes from 'prop-types';

import { CommentShape } from '../shapes/CommentShape';
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

CommentList.propTypes = PropTypes.arrayOf(CommentShape).isRequired;
