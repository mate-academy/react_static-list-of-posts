import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ol className="commentList list-group list-group-numbered">
    {comments.map(comment => (
      <li
        className="
          list-group-item
          list-group-item-action
          list-group-item-success
        "
        key={comment.id}
      >
        <Comment comment={comment} />
      </li>
    ))}
  </ol>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
