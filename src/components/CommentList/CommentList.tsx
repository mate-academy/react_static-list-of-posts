import React from 'react';
import './CommentList.scss';
import { Comments } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comments[]
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <>
      {comments.length === 0
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : (
          <div className="CommentList">
            {comments.map(comment => (
              <CommentInfo comment={comment} key={comment.id} />
            ))}
          </div>
        )}
    </>
  );
};
