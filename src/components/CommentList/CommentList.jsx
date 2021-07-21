import React from 'react';
import PropTypes from 'prop-types';
import { Coment } from '../Comment';
import { ComentTypes } from '../../types';

export function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Coment comment={comment} />
        </li>
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(ComentTypes).isRequired,
};
