import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../type/Comments';

type Props = {
  comments: Comments[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
