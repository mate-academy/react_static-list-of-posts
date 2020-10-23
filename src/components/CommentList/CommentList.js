import React from 'react';
import './CommentList.scss';
import { CommentListShape } from '../shapes/CommentListShape';

import { Comment } from '../Comment';

export const CommentList = ({ comments, hasShownComments }) => (
  <ul className="CommentList" hidden={!hasShownComments}>
    {
      comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))
    }
  </ul>
);

CommentList.propTypes = CommentListShape;
