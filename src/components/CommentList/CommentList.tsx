import React from 'react';

import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../Types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};
