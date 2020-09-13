import React from 'react';
import PropTypes, { number } from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="post__comments">
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: number,
    }),
  ).isRequired,
};
