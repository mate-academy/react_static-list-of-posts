import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.length > 0 ? (
        <div className="CommentList">
          {comments.map(comment => (
            <CommentInfo comment={comment} />
          ))}
        </div>
      ) : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </>
  );
};

type Props = {
  comments: Comment[];
};
