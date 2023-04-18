import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comments';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.length ? (
        comments.map((comment) => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
