import React from 'react';
import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (

  <div className="CommentList">
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {comment.user && <UserInfo user={comment.user} />}
      </div>

      <div className="CommentInfo__body">
        {comment.body}
      </div>
    </div>
  </div>
);
