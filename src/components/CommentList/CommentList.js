import React from 'react';
import { Comment } from '../Comment';
import { TypeCommentList } from '../shapes/CommentListType';

export const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = TypeCommentList;
