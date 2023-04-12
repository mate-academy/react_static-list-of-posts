import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Comments = {
  comments: Comment[];
};

export const CommentList: React.FC<Comments> = ({ comments }) => (

  (comments.length === 0)
    ? <b data-cy="NoCommentsMessage">No comments yet</b>
    : (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    )
);
