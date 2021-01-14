import React from 'react';
import { Comment } from '../Comment/Comment';
import { CommentsListProp } from '../Types';

export const CommentsList = ({ comments }) => (
  <div className="commentsList">
    {comments.map(comment => (
      <Comment
        {...comment}
        key={comment.id}
      />
    ))}
  </div>
);

CommentsList.propTypes = CommentsListProp.isRequired;
