import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';
import { CommentType } from '../types';

export function CommentList({ comments }) {
  return (
    <ul className="post__list">
      {comments.map(comment => (
        <li
          key={comment.id}
          className="post__comments"
        >
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}

CommentList.propTypes = PropTypes.arrayOf(CommentType).isRequired;
