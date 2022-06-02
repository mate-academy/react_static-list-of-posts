import React from 'react';
import { Comments } from '../../types/Comments';

interface Props {
  singleComment: Comments;
}

export const CommentInfo: React.FC<Props> = ({ singleComment }) => (
  <div className="single-comment">
    <div className="single-comment__name">
      {singleComment.name}
    </div>
    <div className="single-comment__body">
      {singleComment.body}
    </div>
    <div className="single-comment__email">
      {singleComment.email}
    </div>
  </div>
);
