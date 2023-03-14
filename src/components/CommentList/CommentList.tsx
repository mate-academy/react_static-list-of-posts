import React from 'react';
import './CommentList.scss';

import { Comments } from '../../types/Comments';

import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </div>
  );
};
