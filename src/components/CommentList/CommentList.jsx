import React from 'react';
import { Comment } from '../Comment/Comment';
import { CommentListShape } from '../shapes/CommentListShape';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="comment__list">
    <li className="comment__list--item item">
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </li>
  </ul>
);

CommentList.propTypes = CommentListShape;
