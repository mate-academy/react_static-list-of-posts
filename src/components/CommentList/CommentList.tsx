import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comment';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.length ? (
      comments.map((comment) => (
        <div className="CommentList">
          <CommentInfo comment={comment} key={comment.id} />
        </div>
      ))
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </>

);
