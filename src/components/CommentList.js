import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export function CommentList({ comments }) {
  return (
    <ul className="comments">
      {comments.map(comment => (
        <li className="comment" key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(Comment)).isRequired,
};
