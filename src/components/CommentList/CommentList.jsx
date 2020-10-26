import React from 'react';
import { Comment } from '../Comment/Comment';
import { CommentListShape } from '../shapes/CommentListShape';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <>
    <span className="comment__legend">
      Comments:
    </span>
    {
      comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))
    }
  </>
);

CommentList.propTypes = CommentListShape;
