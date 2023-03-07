import React from 'react';
import { CommentListType } from '../../Types/Types';
import { CommentInfo } from '../CommentInfo';

export const CommentList: React.FC<CommentListType> = ({
  comments,
  id: postIdCurrent,
}) => {
  const commentsOnlyPost = comments.filter(c => c.postId === postIdCurrent);

  return (
    <>
      {commentsOnlyPost.length === 0
        ? (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
        : (
          <div className="CommentList">
            {commentsOnlyPost.map(comment => (
              <div className="CommentInfo" key={comment.id}>
                <CommentInfo {...comment} />
              </div>
            ))}
          </div>
        )}
    </>
  );
};
