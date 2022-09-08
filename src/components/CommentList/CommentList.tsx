import React from 'react';
import './CommentList.scss';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comment: Comments[] | null;
};

export const CommentList: React.FC<Props> = ({ comment: comments }) => {
  return comments?.length
    ? (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    )
    : <b data-cy="NoCommentsMessage">No comments yet</b>;
};
