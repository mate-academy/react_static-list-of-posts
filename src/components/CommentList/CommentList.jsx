import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <div className="comment-list">
    {
      comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf().isRequired,
};
