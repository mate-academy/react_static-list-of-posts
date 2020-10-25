import React from 'react';
import { Comment } from '../Comment';
import { CommentListShape } from '../../shapes/CommentListShape';
import './CommentList.scss';

export const CommentList = ({ commentList }) => (
  <ul className="commentList">
    {commentList.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

CommentList.propTypes = CommentListShape;
