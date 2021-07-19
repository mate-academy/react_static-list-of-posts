import React from 'react';
import propTypes from 'prop-types';

import { Comment } from '../Comment/Comment';
import { commentType } from '../../Types';

export function CommentList({ commentsForPost }) {
  return (
    <ul className="comments__list">
      {commentsForPost.map(comment => (
        <li key={comment.id} className="comments__item">
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  commentsForPost: propTypes.arrayOf(commentType).isRequired,
};
