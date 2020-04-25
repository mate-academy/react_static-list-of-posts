import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li className="comments__item" key={comment.id}>
        <p className="comment__title">Comment</p>
        <Comment {...comment} />
      </li>
    ))}

  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
