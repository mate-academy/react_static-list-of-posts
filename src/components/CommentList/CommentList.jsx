import React from 'react';
import { CommentListShape } from '../propTypes/commentList';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <>
    {
      comments.map(comment => (
        <ul className="commentList" key={comment.id}>
          <Comment {...comment} />
        </ul>
      ))
    }
  </>
);

CommentList.propTypes = CommentListShape;
