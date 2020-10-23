import React from 'react';

import { Comment } from '../Comment';
import { CommentListShape } from '../propTypes/comment';

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
