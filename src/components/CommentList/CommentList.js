import React from 'react';

import './CommentList.css';
import { CommentListType } from '../Types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="comments">
    <div className="text">
      Comments:
    </div>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = CommentListType.isRequired;
