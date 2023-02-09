import React from 'react';
import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

export interface Allcoments {
  comments: Comment[];
}

export const CommentList: React.FC<Allcoments> = ({ comments }) => {
  return (
    <>
      {comments.length < 1
        ? (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )
        : (
          comments.map((elem: Comment) => (
            <>
              <div className="CommentList">
                <CommentInfo comment={elem} />
              </div>
            </>
          ))
        )}
    </>
  );
};
