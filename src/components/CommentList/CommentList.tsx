import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {(comments.length)
        ? (
          comments.map(comment => (
            <div className="CommentList">
              <CommentInfo comment={comment} />
            </div>
          ))
        ) : (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )}
    </>
  );
};
