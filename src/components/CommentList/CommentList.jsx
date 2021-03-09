import React from 'react';
import PropTypes from 'prop-types';
import { commentType } from '../../types';
import { Comment } from '../Comment';

import './CommentList.css';

export function CommentList({ comments }) {
  return (
    <>
      <h3>Comments:</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="comment-list__item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentType).isRequired,
};
