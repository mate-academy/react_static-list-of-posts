import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types';
import '../../styles/components/CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </ul>
  );
};
