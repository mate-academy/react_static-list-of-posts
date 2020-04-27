import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../Typedefs';

import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
