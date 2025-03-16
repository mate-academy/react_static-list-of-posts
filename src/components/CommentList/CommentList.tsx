import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type UserCommentsListProp = {
  userCommentsList: Comment[];
};

export const CommentList: React.FC<UserCommentsListProp> = ({
  userCommentsList,
}) => {
  return (
    <div className="CommentList">
      {userCommentsList.length > 0 ? (
        userCommentsList.map(userComment => (
          <CommentInfo key={userComment.id} comment={userComment} />
        ))
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
