import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </li>

      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
