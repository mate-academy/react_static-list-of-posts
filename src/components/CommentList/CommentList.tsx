import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((commentItem) => (
      <CommentInfo
        comment={commentItem}
        key={commentItem.id}
      />
    ))}
  </div>
);
