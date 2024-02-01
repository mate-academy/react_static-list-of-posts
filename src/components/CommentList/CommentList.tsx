import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

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
