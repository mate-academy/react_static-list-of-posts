import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }: Props) => (
  <div className="CommentList">
    {comments && comments.map(comment => {
      return (
        <CommentInfo
          key={comment.id}
          comment={comment}
        />
      );
    })}
  </div>
);
