import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments
      && comments.map((el: Comment) => <CommentInfo comment={el} />)}
  </div>
);
