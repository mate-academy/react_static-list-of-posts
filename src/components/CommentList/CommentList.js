import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <div className="content">
    <ol type="1">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ol>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
