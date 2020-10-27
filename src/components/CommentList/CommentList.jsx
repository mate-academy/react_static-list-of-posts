import React from 'react';
import { CommentListShape } from '../propTypes/commentList';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul className="commentList">
    {
      comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))
    }
  </ul>
);

CommentList.propTypes = CommentListShape;
