import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentType } from '../../types';
import './CommentList.scss';

export function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments.map(comment => (
        <li
          key={comment.id}
          className="comment-list__comment"
        >
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
