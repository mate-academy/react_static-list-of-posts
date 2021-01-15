import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment/Comment';
import { commentTypes } from '../../types';

export const CommentList = ({ comments }) => (
  <ul>
    {
      comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))
    }
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentTypes).isRequired,
};
