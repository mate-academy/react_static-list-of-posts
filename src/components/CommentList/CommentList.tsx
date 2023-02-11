import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comment: Comment[]
};

export const CommentList: React.FC<Props> = ({ comment }) => {
  return (
    <ul className="CommentList">
      {comment.map(commentPosted => (
        <CommentInfo
          key={commentPosted.id}
          commentPosted={commentPosted}
        />
      ))}
    </ul>
  );
};
