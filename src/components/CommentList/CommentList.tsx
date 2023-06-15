import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[] | string
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {typeof comments === 'string' ? (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    ) : (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    )}
  </>
);
