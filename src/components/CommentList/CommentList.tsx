import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comment: Comment[];
};

export const CommentList: React.FC<Props> = ({ comment }) => {
  return (
    <div className="CommentList">
      {comment.map(coment => (
        <CommentInfo item={coment} key={coment.id} />
      ))}
    </div>
  );
};
