import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
