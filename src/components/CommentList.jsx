import React from 'react';
import { Comment } from './Comment';
import { CommentsListType } from '../types/types';

export const CommentList = ({ comments }) => (
  <div className="comment-list">
    { comments.map(comment => (
      <Comment
        key={comment.id}
        {...comment}
      />
    ))}
  </div>
);

CommentList.propTypes = CommentsListType;
