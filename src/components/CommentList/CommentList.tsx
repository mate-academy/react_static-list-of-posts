import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({
  comments,
}) => (
  <div className="CommentList">
    {comments.map((comment) => {
      return (
        <CommentInfo comment={comment} key={comment.id} />
      );
    })}
  </div>
);
